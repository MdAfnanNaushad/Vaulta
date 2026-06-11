import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    status: "UP",
    timestamp: new Date(),
  });
});

export default router;