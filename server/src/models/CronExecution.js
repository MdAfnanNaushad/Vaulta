import mongoose from "mongoose";

const cronExecutionSchema = new mongoose.Schema(
  {
    jobName: {
      type: String,
      required: true,
      index: true,
    },

    executionDate: {
      type: Date,
      required: true,
      index: true,
    },

    status: {
      type: String,
      enum: ["RUNNING", "COMPLETED"],
      default: "RUNNING",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

cronExecutionSchema.index(
  {
    jobName: 1,
    executionDate: 1,
  },
  {
    unique: true,
  }
);

const CronExecution = mongoose.model(
  "CronExecution",
  cronExecutionSchema
);

export default CronExecution;