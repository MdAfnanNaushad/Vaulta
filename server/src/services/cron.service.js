import dayjs from "dayjs";

import cronRepository from "../repositories/cron.repository.js";

import investmentRepository from "../repositories/investment.repository.js";

import roiService from "./roi.service.js";

import logger from "../config/logger.js";

class CronService {
  async processDailyROI() {
    const executionDate =
      dayjs()
        .startOf("day")
        .toDate();

    const existingExecution =
      await cronRepository.findExecution(
        "DAILY_ROI",
        executionDate
      );

    if (existingExecution) {
      logger.warn(
        "ROI Cron Already Executed"
      );

      return;
    }

    const execution =
      await cronRepository.create({
        jobName: "DAILY_ROI",

        executionDate,

        status: "RUNNING",
      });

    try {
      const investments =
        await investmentRepository.getActiveInvestments();

      logger.info(
        `Processing ${investments.length} investments`
      );

      const results =
        await roiService.processMultipleInvestments(
          investments
        );

      await cronRepository.complete(
        execution._id
      );

      logger.info(
        "ROI Processing Completed"
      );

      return results;
    } catch (error) {
      logger.error(error);

      throw error;
    }
  }
}

export default new CronService();