import app from "./app.js";
import connectDB from "./config/database.js";
import env from "./config/env.js";
import startDailyROICron from "./cron/dailyROI.cron.js";
const startServer = async () => {
  try {
    await connectDB();

    app.listen(env.port, () => {
      console.log(
        `Server running on port ${env.port}`
      );
    });
  } catch (error) {
    console.error(error);

    process.exit(1);
  }
};
startDailyROICron();
startServer();