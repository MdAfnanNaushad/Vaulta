import { Router } from "express";

import authMiddleware from "../../../middleware/auth.middleware.js";

import asyncHandler from "../../../utils/asyncHandler.js";

import dashboardController from "../controllers/dashboard.controller.js";

const router = Router();

router.use(authMiddleware);

router.get(
  "/",
  asyncHandler(
    dashboardController.dashboard
  )
);

export default router;