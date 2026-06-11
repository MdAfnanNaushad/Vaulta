import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    type: {
      type: String,
      enum: [
        "INVESTMENT",
        "ROI",
        "REFERRAL",
        "WITHDRAWAL",
      ],
      required: true,
      index: true,
    },

    amount: {
      type: Number,
      required: true,
    },

    source: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["SUCCESS", "FAILED"],
      default: "SUCCESS",
      index: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Transaction = mongoose.model(
  "Transaction",
  transactionSchema
);

export default Transaction;