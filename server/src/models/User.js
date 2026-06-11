import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    mobile: {
      type: String,
      required: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },

    referralCode: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    referredBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
      index: true,
    },

    walletBalance: {
      type: Number,
      default: 0,
      min: 0,
    },

    totalROIEarned: {
      type: Number,
      default: 0,
    },

    totalLevelIncomeEarned: {
      type: Number,
      default: 0,
    },

    accountStatus: {
      type: String,
      enum: ["ACTIVE", "BLOCKED", "PENDING"],
      default: "ACTIVE",
      index: true,
    },

    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },

    refreshToken: {
      type: String,
      default: null,
      select: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);


userSchema.virtual("referrals", {
  ref: "User",
  localField: "_id",
  foreignField: "referredBy",
});

userSchema.pre("save", async function () {
  if (!this.isModified("password")) {
    return;
  }

  this.password = await bcrypt.hash(
    this.password,
    12
  );
});

userSchema.methods.comparePassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      id: this._id,
      role: this.role,
    },
    process.env.JWT_ACCESS_SECRET,
    {
      expiresIn: process.env.JWT_ACCESS_EXPIRES,
    }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      id: this._id,
    },
    process.env.JWT_REFRESH_SECRET,
    {
      expiresIn: process.env.JWT_REFRESH_EXPIRES,
    }
  );
};

const User = mongoose.model("User", userSchema);

export default User;