import mongoose from "mongoose";

const investmentSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    amount: {
      type: Number,
      required: true,
      min: 1,
    },

    planName: {
      type: String,
      required: true,
      trim: true,
    },

    startDate: {
      type: Date,
      required: true,
      index: true,
    },

    endDate: {
      type: Date,
      required: true,
      index: true,
    },

    dailyROIPercentage: {
      type: Number,
      required: true,
    },

    status: {
      type: String,
      enum: ["ACTIVE", "COMPLETED", "CANCELLED"],
      default: "ACTIVE",
      index: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

investmentSchema.index({
  user: 1,
  status: 1,
});

const Investment = mongoose.model(
  "Investment",
  investmentSchema
);

export default Investment;