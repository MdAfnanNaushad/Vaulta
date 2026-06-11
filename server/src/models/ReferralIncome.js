import mongoose from "mongoose";

const referralIncomeSchema = new mongoose.Schema(
  {
    receiverUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    sourceUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    referralLevel: {
      type: Number,
      required: true,
    },

    incomeAmount: {
      type: Number,
      required: true,
    },

    date: {
      type: Date,
      required: true,
      index: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const ReferralIncome = mongoose.model(
  "ReferralIncome",
  referralIncomeSchema
);

export default ReferralIncome;