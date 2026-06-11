import mongoose from "mongoose";

const roiHistorySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    investment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Investment",
      required: true,
      index: true,
    },

    roiAmount: {
      type: Number,
      required: true,
    },

    date: {
      type: Date,
      required: true,
      index: true,
    },

    status: {
      type: String,
      enum: ["CREDITED"],
      default: "CREDITED",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

roiHistorySchema.index(
  {
    investment: 1,
    date: 1,
  },
  {
    unique: true,
  }
);

const ROIHistory = mongoose.model(
  "ROIHistory",
  roiHistorySchema
);

export default ROIHistory;