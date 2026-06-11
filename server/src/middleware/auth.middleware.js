import jwt from "jsonwebtoken";

import ApiError from "../utils/ApiError.js";

import User from "../models/User.js";

const authMiddleware = async (
  req,
  res,
  next
) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.headers.authorization?.replace(
        "Bearer ",
        ""
      );

    if (!token) {
      return next(
        new ApiError(
          401,
          "Unauthorized"
        )
      );
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_ACCESS_SECRET
    );

    const user =
      await User.findById(
        decoded.id
      );

    if (!user) {
      return next(
        new ApiError(
          401,
          "User not found"
        )
      );
    }

    req.user = user;

    next();
  } catch (error) {
    next(
      new ApiError(
        401,
        "Invalid token"
      )
    );
  }
};

export default authMiddleware;