import { body } from "express-validator";

export const registerValidator = [
  body("fullName").trim().notEmpty().withMessage("Full name required"),

  body("email").isEmail().withMessage("Invalid email"),

  body("mobile").notEmpty().withMessage("Mobile required"),

  body("password")
    .isLength({
      min: 6,
    })
    .withMessage("Password must be at least 6 characters"),
];

export const loginValidator = [
  body("email").isEmail(),

  body("password").notEmpty(),
];
