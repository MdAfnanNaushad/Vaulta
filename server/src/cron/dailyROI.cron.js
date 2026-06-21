import cron from "node-cron";

import cronService from "../services/cron.service.js";

import logger from "../config/logger.js";

const startDailyROICron = () => {
  cron.schedule(
    "* * * * *",
    async () => {
      try {
        logger.info(
          "Starting Daily ROI Cron"
        );

        await cronService.processDailyROI();
      } catch (error) {
        logger.error(error);
      }
    },
    {
      timezone:
        "Asia/Kolkata",
    }
  );
};

export default startDailyROICron;