import userRepository from "../repositories/user.repository.js";
import roiRepository from "../repositories/roi.repository.js";
import transactionRepository from "../repositories/transaction.repository.js";

class ROIService {
  async processInvestmentROI(investment) {
    try {
      console.log("================================");
      console.log("PROCESSING INVESTMENT");
      console.log("Investment ID:", investment._id);
      console.log("Plan:", investment.planName);
      console.log("User:", investment.user);
      console.log("================================");

      const today = new Date();

      today.setHours(0, 0, 0, 0);

      const alreadyProcessed =
        await roiRepository.exists(
          investment._id,
          today
        );

      if (alreadyProcessed) {
        console.log(
          "ROI already processed for:",
          investment._id
        );

        return null;
      }

      const roiAmount =
        (
          investment.amount *
          investment.dailyROIPercentage
        ) / 100;

      console.log(
        "ROI Amount:",
        roiAmount
      );

      const roiHistory =
        await roiRepository.create({
          user:
            investment.user._id,

          investment:
            investment._id,

          roiAmount,

          date: today,

          status: "CREDITED",
        });

      console.log(
        "ROI History Created:",
        roiHistory
      );

      const walletUpdated =
        await userRepository.incrementWallet(
          investment.user._id,
          roiAmount
        );

      console.log(
        "Wallet Updated:",
        walletUpdated?.walletBalance
      );

      const roiUpdated =
        await userRepository.incrementROI(
          investment.user._id,
          roiAmount
        );

      console.log(
        "ROI Updated:",
        roiUpdated?.totalROIEarned
      );

      const transaction =
        await transactionRepository.create({
          user:
            investment.user._id,

          type: "ROI",

          amount: roiAmount,

          source:
            investment.planName,

          status: "SUCCESS",
        });

      console.log(
        "Transaction Created:",
        transaction?._id
      );

      return roiAmount;
    } catch (error) {
      console.error(
        "================================"
      );
      console.error(
        "ROI PROCESSING FAILED"
      );
      console.error(error);
      console.error(
        "================================"
      );

      throw error;
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
        console.error(
          "FAILED INVESTMENT:",
          investment._id
        );

        console.error(error);

        results.push({
          investmentId:
            investment._id,
          success: false,
          error:
            error.message,
        });
      }
    }

    console.log(
      "FINAL ROI RESULTS:"
    );

    console.log(results);

    return results;
  }
}

export default new ROIService();