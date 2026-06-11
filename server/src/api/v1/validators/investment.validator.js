import { body } from "express-validator";

export const createInvestmentValidator = [
  body("amount")
    .isFloat({ min: 1 })
    .withMessage(
      "Investment amount must be greater than 0"
    ),

  body("planName")
    .trim()
    .notEmpty()
    .withMessage("Plan name is required"),

  body("dailyROIPercentage")
    .isFloat({ min: 0.01 })
    .withMessage(
      "Daily ROI percentage must be greater than 0"
    ),

  body("startDate")
    .isISO8601()
    .withMessage("Invalid start date"),

  body("endDate")
    .isISO8601()
    .withMessage("Invalid end date")
    .custom((value, { req }) => {
      const startDate = new Date(
        req.body.startDate
      );

      const endDate = new Date(value);

      if (endDate <= startDate) {
        throw new Error(
          "End date must be after start date"
        );
      }

      return true;
    }),
];