import mongoose from "mongoose";

import ApiError from "../utils/ApiError.js";

import investmentRepository from "../repositories/investment.repository.js";

import transactionRepository from "../repositories/transaction.repository.js";

import referralService from "./referral.service.js";

class InvestmentService {
  async createInvestment(
    userId,
    payload
  ) {
    const session =
      await mongoose.startSession();

    session.startTransaction();

    try {
      const investment =
        await investmentRepository.create({
          user: userId,

          amount: payload.amount,

          planName:
            payload.planName,

          startDate:
            payload.startDate,

          endDate:
            payload.endDate,

          dailyROIPercentage:
            payload.dailyROIPercentage,
        });

      await transactionRepository.create({
        user: userId,

        type: "INVESTMENT",

        amount: payload.amount,

        source:
          payload.planName,
      });

      await referralService.processReferralIncome(
        userId,
        payload.amount
      );

      await session.commitTransaction();

      return investment;
    } catch (error) {
      await session.abortTransaction();

      throw error;
    } finally {
      session.endSession();
    }
  }

  async getUserInvestments(
    userId
  ) {
    return investmentRepository.getUserInvestments(
      userId
    );
  }

async getInvestment(
  investmentId,
  userId
) {
  const investment =
    await investmentRepository.findUserInvestment(
      investmentId,
      userId
    );

  if (!investment) {
    throw new ApiError(
      404,
      "Investment not found"
    );
  }

  return investment;
}

  async cancelInvestment(id) {
    return investmentRepository.cancelInvestment(
      id
    );
  }
}

export default new InvestmentService();