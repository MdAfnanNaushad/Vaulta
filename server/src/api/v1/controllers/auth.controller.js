import authService from "../../../services/auth.service.js";

import ApiResponse from "../../../utils/ApiResponse.js";

class AuthController {
  async register(req, res) {
    const user = await authService.register(
      req.body
    );

    return res.status(201).json(
      new ApiResponse(
        201,
        "User registered successfully",
        user
      )
    );
  }

  async login(req, res) {
    const {
      email,
      password,
    } = req.body;

    const result =
      await authService.login(
        email,
        password
      );

    res.cookie(
      "accessToken",
      result.accessToken,
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV ===
          "production",
      }
    );

    res.cookie(
      "refreshToken",
      result.refreshToken,
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV ===
          "production",
      }
    );

    return res.status(200).json(
      new ApiResponse(
        200,
        "Login successful",
        result
      )
    );
  }

  async refreshToken(
    req,
    res
  ) {
    const token =
      req.cookies.refreshToken;

    const accessToken =
      await authService.refreshToken(
        token
      );

    return res.status(200).json(
      new ApiResponse(
        200,
        "Token refreshed",
        {
          accessToken,
        }
      )
    );
  }

  async logout(req, res) {
    await authService.logout(
      req.user._id
    );

    res.clearCookie(
      "accessToken"
    );

    res.clearCookie(
      "refreshToken"
    );

    return res.status(200).json(
      new ApiResponse(
        200,
        "Logout successful"
      )
    );
  }

  async profile(req, res) {
    const profile =
      await authService.getProfile(
        req.user._id
      );

    return res.status(200).json(
      new ApiResponse(
        200,
        "Profile fetched",
        profile
      )
    );
  }
}

export default new AuthController();