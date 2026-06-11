import { Router } from "express";

import authMiddleware from "../../../middleware/auth.middleware.js";

import validateMiddleware from "../../../middleware/validate.middleware.js";

import asyncHandler from "../../../utils/asyncHandler.js";

import investmentController from "../controllers/investment.controller.js";

import {
  createInvestmentValidator,
} from "../validators/investment.validator.js";

const router = Router();

router.use(authMiddleware);

router.post(
  "/",
  createInvestmentValidator,
  validateMiddleware,
  asyncHandler(
    investmentController.create
  )
);

router.get(
  "/",
  asyncHandler(
    investmentController.getAll
  )
);

router.get(
  "/:id",
  asyncHandler(
    investmentController.getOne
  )
);

router.patch(
  "/:id/cancel",
  asyncHandler(
    investmentController.cancel
  )
);

export default router;