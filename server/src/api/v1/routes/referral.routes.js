import { Router } from "express";

import authMiddleware from "../../../middleware/auth.middleware.js";

import asyncHandler from "../../../utils/asyncHandler.js";

import referralController from "../controllers/referral.controller.js";

const router = Router();

router.use(authMiddleware);

router.get(
  "/direct",
  asyncHandler(
    referralController.directReferrals
  )
);

router.get(
  "/tree",
  asyncHandler(
    referralController.referralTree
  )
);

router.get(
  "/income",
  asyncHandler(
    referralController.referralIncome
  )
);

export default router;