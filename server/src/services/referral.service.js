import userRepository from "../repositories/user.repository.js";

import referralRepository from "../repositories/referral.repository.js";

import transactionRepository from "../repositories/transaction.repository.js";

class ReferralService {
  async processReferralIncome(
    sourceUserId,
    investmentAmount
  ) {
    const percentages = [
      Number(
        process.env.LEVEL_1_PERCENT
      ),
      Number(
        process.env.LEVEL_2_PERCENT
      ),
      Number(
        process.env.LEVEL_3_PERCENT
      ),
    ];

    let currentUser =
      await userRepository.findById(
        sourceUserId
      );

    for (
      let level = 0;
      level < percentages.length;
      level++
    ) {
      if (!currentUser?.referredBy)
        break;

      const parent =
        await userRepository.findById(
          currentUser.referredBy
        );

      if (!parent) break;

      const income =
        (investmentAmount *
          percentages[level]) /
        100;

      await userRepository.incrementWallet(
        parent._id,
        income
      );

      await userRepository.incrementLevelIncome(
        parent._id,
        income
      );

      await referralRepository.create({
        receiverUser:
          parent._id,

        sourceUser:
          sourceUserId,

        referralLevel:
          level + 1,

        incomeAmount:
          income,

        date: new Date(),
      });

      await transactionRepository.create({
        user: parent._id,

        type: "REFERRAL",

        amount: income,

        source:
          "LEVEL_INCOME",
      });

      currentUser = parent;
    }
  }

  async getDirectReferrals(
    userId
  ) {
    return userRepository.getDirectReferrals(
      userId
    );
  }

  async getReferralIncome(
    userId
  ) {
    return referralRepository.getReferralHistory(
      userId
    );
  }

  async buildReferralTree(
    userId
  ) {
    const buildNode =
      async (id) => {
        const user =
          await userRepository.findById(
            id
          );

        const children =
          await userRepository.getDirectReferrals(
            id
          );

        return {
          user,

          children:
            await Promise.all(
              children.map(
                (child) =>
                  buildNode(
                    child._id
                  )
              )
            ),
        };
      };

    return buildNode(userId);
  }
}

export default new ReferralService();