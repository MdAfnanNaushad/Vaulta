import mongoose from "mongoose";

import userRepository from "../repositories/user.repository.js";
import roiRepository from "../repositories/roi.repository.js";
import transactionRepository from "../repositories/transaction.repository.js";

class ROIService {
  async processInvestmentROI(
    investment
  ) {
    const session =
      await mongoose.startSession();

    session.startTransaction();

    try {
      const today = new Date();

      today.setHours(
        0,
        0,
        0,
        0
      );

      const alreadyProcessed =
        await roiRepository.exists(
          investment._id,
          today
        );

      if (alreadyProcessed) {
        await session.abortTransaction();

        return null;
      }

      const roiAmount =
        (investment.amount *
          investment.dailyROIPercentage) /
        100;

      await roiRepository.create(
        {
          user:
            investment.user._id,

          investment:
            investment._id,

          roiAmount,

          date: today,

          status: "CREDITED",
        },
        session
      );

      await userRepository.incrementWallet(
        investment.user._id,
        roiAmount,
        session
      );

      await userRepository.incrementROI(
        investment.user._id,
        roiAmount,
        session
      );

      await transactionRepository.create(
        {
          user:
            investment.user._id,

          type: "ROI",

          amount: roiAmount,

          source:
            investment.planName,

          status: "SUCCESS",
        },
        session
      );

      await session.commitTransaction();

      return roiAmount;
    } catch (error) {
      await session.abortTransaction();

      throw error;
    } finally {
      session.endSession();
    }
  }
  async processMultipleInvestments(
  investments
) {
  const results = [];

  for (const investment of investments) {
    try {
      const roi =
        await this.processInvestmentROI(
          investment
        );

      results.push({
        investmentId:
          investment._id,

        success: true,

        roi,
      });
    } catch (error) {
      results.push({
        investmentId:
          investment._id,

        success: false,

        error: error.message,
      });
    }
  }

  return results;
}
}

export default new ROIService();