import referralService from "../../../services/referral.service.js";

import ApiResponse from "../../../utils/ApiResponse.js";

class ReferralController {
  async directReferrals(
    req,
    res
  ) {
    const referrals =
      await referralService.getDirectReferrals(
        req.user._id
      );

    return res.status(200).json(
      new ApiResponse(
        200,
        "Direct referrals fetched",
        referrals
      )
    );
  }

  async referralTree(
    req,
    res
  ) {
    const tree =
      await referralService.buildReferralTree(
        req.user._id
      );

    return res.status(200).json(
      new ApiResponse(
        200,
        "Referral tree fetched",
        tree
      )
    );
  }

  async referralIncome(
    req,
    res
  ) {
    const income =
      await referralService.getReferralIncome(
        req.user._id
      );

    return res.status(200).json(
      new ApiResponse(
        200,
        "Referral income fetched",
        income
      )
    );
  }
}

export default new ReferralController();