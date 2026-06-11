import userRepository from "../repositories/user.repository.js";
import investmentRepository from "../repositories/investment.repository.js";
import roiRepository from "../repositories/roi.repository.js";
import referralRepository from "../repositories/referral.repository.js";
import transactionRepository from "../repositories/transaction.repository.js";

class DashboardService {
  async getDashboard(userId) {
    const [
      user,
      investmentSummary,
      roiTotal,
      referralTotal,
      transactions,
      monthlyROI,
    ] = await Promise.all([
      userRepository.findById(userId),

      investmentRepository.getInvestmentSummary(
        userId
      ),

      roiRepository.getTotalROI(userId),

      referralRepository.getTotalReferralIncome(
        userId
      ),

      transactionRepository.getRecentTransactions(
        userId
      ),

      roiRepository.getMonthlyROI(userId),
    ]);

    return {
      walletBalance:
        user.walletBalance,

      totalROIEarned:
        user.totalROIEarned,

      totalLevelIncome:
        user.totalLevelIncomeEarned,

      totalInvestment:
        investmentSummary.totalInvestment || 0,

      activeInvestments:
        investmentSummary.activeInvestments || 0,

      roiTotal:
        roiTotal?.[0]?.total || 0,

      referralTotal:
        referralTotal?.[0]?.total || 0,

      monthlyROI,

      recentTransactions:
        transactions,
    };
  }
}

export default new DashboardService();