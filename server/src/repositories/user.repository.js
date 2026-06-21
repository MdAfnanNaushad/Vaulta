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



async incrementWallet(
  id,
  amount,
  session = null
) {
  return User.findByIdAndUpdate(
    id,
    {
      $inc: {
        walletBalance: amount,
      },
    },
    {
      returnDocument: "after",
      session,
    }
  );
}

async incrementROI(
  id,
  amount,
  session = null
) {
  return User.findByIdAndUpdate(
    id,
    {
      $inc: {
        totalROIEarned: amount,
      },
    },
    {
      returnDocument: "after",
      session,
    }
  );
}

async incrementLevelIncome(
  id,
  amount,
  session = null
) {
  return User.findByIdAndUpdate(
    id,
    {
      $inc: {
        totalLevelIncomeEarned:
          amount,
      },
    },
    {
      returnDocument: "after",
      session,
    }
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
