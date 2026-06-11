import ReferralIncome from "../models/ReferralIncome.js";

class ReferralRepository {
  async create(payload) {
    return ReferralIncome.create(payload);
  }

  async getReferralHistory(userId) {
    return ReferralIncome.find({
      receiverUser: userId,
    })
      .populate("sourceUser")
      .sort({
        createdAt: -1,
      });
  }

  async getTotalReferralIncome(userId) {
    return ReferralIncome.aggregate([
      {
        $match: {
          receiverUser: userId,
        },
      },
      {
        $group: {
          _id: null,
          total: {
            $sum: "$incomeAmount",
          },
        },
      },
    ]);
  }
}

export default new ReferralRepository();