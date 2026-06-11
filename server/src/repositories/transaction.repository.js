import Transaction from "../models/Transaction.js";

class TransactionRepository {
  async create(payload,session=null) {
    return Transaction.create(payload),{session};
  }

  async getUserTransactions(userId) {
    return Transaction.find({
      user: userId,
    }).sort({
      createdAt: -1,
    });
  }

  async getRecentTransactions(
  userId,
  limit = 10
) {
  return Transaction.find({
    user: userId,
  })
    .sort({
      createdAt: -1,
    })
    .limit(limit);
}
}

export default new TransactionRepository();