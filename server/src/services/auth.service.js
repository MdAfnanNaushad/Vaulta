import jwt from "jsonwebtoken";

import ApiError from "../utils/ApiError.js";

import userRepository from "../repositories/user.repository.js";

import generateReferralCode from "../utils/generateReferralCode.js";

class AuthService {
  async register(payload) {
    const {
      fullName,
      email,
      mobile,
      password,
      referralCode,
    } = payload;

    const existingUser =
      await userRepository.findByEmail(email);

    if (existingUser) {
      throw new ApiError(
        409,
        "Email already exists"
      );
    }

    let parentUser = null;

    if (referralCode) {
      parentUser =
        await userRepository.findByReferralCode(
          referralCode
        );

      if (!parentUser) {
        throw new ApiError(
          404,
          "Invalid referral code"
        );
      }
    }

    const user =
      await userRepository.create({
        fullName,
        email,
        mobile,
        password,

        referralCode:
          generateReferralCode(),

        referredBy:
          parentUser?._id || null,
      });

    return user;
  }

  async login(email, password) {
    const user =
      await userRepository.findByEmail(
        email
      );

    if (!user) {
      throw new ApiError(
        401,
        "Invalid credentials"
      );
    }

    const isValid =
      await user.comparePassword(
        password
      );

    if (!isValid) {
      throw new ApiError(
        401,
        "Invalid credentials"
      );
    }

    const accessToken =
      user.generateAccessToken();

    const refreshToken =
      user.generateRefreshToken();

    user.refreshToken =
      refreshToken;

    await user.save();

    return {
      user,
      accessToken,
      refreshToken,
    };
  }

  async refreshToken(token) {
    const decoded = jwt.verify(
      token,
      process.env.JWT_REFRESH_SECRET
    );

    const user =
      await userRepository.findById(
        decoded.id
      );

    if (!user) {
      throw new ApiError(
        401,
        "Invalid refresh token"
      );
    }

    const accessToken =
      user.generateAccessToken();

    return accessToken;
  }

  async logout(userId) {
    return userRepository.updateById(
      userId,
      {
        refreshToken: null,
      }
    );
  }

  async getProfile(userId) {
    return userRepository.findById(
      userId
    );
  }
}

export default new AuthService();