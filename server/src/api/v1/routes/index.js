import { Router } from "express";

import authRoutes from "./auth.routes.js";
import investmentRoutes from "./investment.routes.js";
import referralRoutes from "./referral.routes.js";
import dashboardRoutes from "./dashboard.routes.js";
import healthRoutes from "./health.routes.js";
import adminRoutes from "./admin.routes.js";
const router = Router();

router.use(
  "/auth",
  authRoutes
);

router.use(
  "/investments",
  investmentRoutes
);

router.use(
  "/referrals",
  referralRoutes
);

router.use(
  "/dashboard",
  dashboardRoutes
);

router.use("/health", healthRoutes);
router.use("/admin", adminRoutes);

export default router;