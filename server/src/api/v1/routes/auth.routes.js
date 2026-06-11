import { Router } from "express";

import authController from "../controllers/auth.controller.js";

import asyncHandler from "../../../utils/asyncHandler.js";

import validateMiddleware from "../../../middleware/validate.middleware.js";

import authMiddleware from "../../../middleware/auth.middleware.js";

import {
  registerValidator,
  loginValidator,
} from "../validators/auth.validator.js";

const router = Router();


router.post(
  "/register",
  registerValidator,
  validateMiddleware,
  asyncHandler(
    authController.register
  )
);

router.post(
  "/login",
  loginValidator,
  validateMiddleware,
  asyncHandler(
    authController.login
  )
);

router.post(
  "/refresh-token",
  asyncHandler(
    authController.refreshToken
  )
);

router.post(
  "/logout",
  authMiddleware,
  asyncHandler(
    authController.logout
  )
);

router.get(
  "/profile",
  authMiddleware,
  asyncHandler(
    authController.profile
  )
);

export default router;