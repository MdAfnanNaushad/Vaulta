import Transaction from "../models/Transaction.js";

class TransactionRepository {
  async create(
    payload,
    session = null
  ) {
    const [transaction] =
      await Transaction.create(
        [payload],
        { session }
      );

    return transaction;
  }

  async getUserTransactions(
    userId
  ) {
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