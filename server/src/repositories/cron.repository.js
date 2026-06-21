import CronExecution from "../models/CronExecution.js";

class CronRepository {
  async create(payload) {
    return CronExecution.create(payload);
  }

  async findExecution(jobName, executionDate) {
    return CronExecution.findOne({
      jobName,
      executionDate,
    });
  }

  async complete(id) {
    return CronExecution.findByIdAndUpdate(
      id,
      {
        status: "COMPLETED",
      },
      {
        new: true,
      },
    );
  }
}

export default new CronRepository();
