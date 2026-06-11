import Investment from "../models/Investment.js";

class InvestmentRepository {
  async create(payload) {
    return Investment.create(payload);
  }

  async findById(id) {
    return Investment.findById(id)
      .populate("user");
  }

  async getUserInvestments(userId) {
    return Investment.find({
      user: userId,
    }).sort({
      createdAt: -1,
    });
  }

  async getActiveInvestments() {
    return Investment.find({
      status: "ACTIVE",
    }).populate("user");
  }

  async cancelInvestment(id) {
    return Investment.findByIdAndUpdate(
      id,
      {
        status: "CANCELLED",
      },
      {
        new: true,
      }
    );
  }

  async getTotalInvestment(userId) {
    return Investment.aggregate([
      {
        $match: {
          user: userId,
        },
      },
      {
        $group: {
          _id: null,
          total: {
            $sum: "$amount",
          },
        },
      },
    ]);
  }
  async getInvestmentSummary(userId) {
  const result = await Investment.aggregate([
    {
      $match: {
        user: userId,
      },
    },
    {
      $group: {
        _id: null,
        totalInvestment: {
          $sum: "$amount",
        },

        activeInvestments: {
          $sum: {
            $cond: [
              { $eq: ["$status", "ACTIVE"] },
              1,
              0,
            ],
          },
        },
      },
    },
  ]);

  return result[0] || {
    totalInvestment: 0,
    activeInvestments: 0,
  };
}

async findUserInvestment(
  investmentId,
  userId
) {
  return Investment.findOne({
    _id: investmentId,
    user: userId,
  });
}
}

export default new InvestmentRepository();