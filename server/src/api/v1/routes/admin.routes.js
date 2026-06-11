import { Router } from "express";

import authMiddleware from "../../../middleware/auth.middleware.js";
import roleMiddleware from "../../../middleware/role.middleware.js";
import asyncHandler from "../../../utils/asyncHandler.js";

import adminController from "../controllers/admin.controller.js";

const router = Router();

router.post(
  "/process-roi",
  authMiddleware,
  roleMiddleware("ADMIN"),
  asyncHandler(
    adminController.processROI
  )
);

export default router;