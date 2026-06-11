import User from "../models/User.js";

class UserRepository {
  async create(payload) {
    return User.create(payload);
  }

  async findById(id) {
    return User.findById(id).select("+refreshToken");
  }

  async findByEmail(email) {
    return User.findOne({ email }).select("+password +refreshToken");
  }

  async findByReferralCode(referralCode) {
    return User.findOne({ referralCode });
  }

  async updateById(id, payload) {
    return User.findByIdAndUpdate(id, payload, {
      new: true,
    });
  }

  async incrementWallet( id,
  amount,
  session = null) {
    return User.findByIdAndUpdate(
      id,
      {
        $inc: {
          walletBalance: amount,
        },
      },
      {
        new: true,
        session,
      },
    );
  }

  async incrementROI(id, amount) {
    return User.findByIdAndUpdate(
      id,
      {
        $inc: {
          totalROIEarned: amount,
        },
      },
      {
        new: true,
      },
    );
  }

  async incrementLevelIncome(id, amount) {
    return User.findByIdAndUpdate(
      id,
      {
        $inc: {
          totalLevelIncomeEarned: amount,
        },
      },
      {
        new: true,
      },
    );
  }

  async getDirectReferrals(userId) {
    return User.find({
      referredBy: userId,
    });
  }

  async getAll() {
    return User.find();
  }
}

export default new UserRepository();
