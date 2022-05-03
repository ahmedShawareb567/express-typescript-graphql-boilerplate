import { CronJob } from "cron";

const fileReference = () => {
  return new CronJob("*/10 * * * * *", () => {
    console.log(`Cron == ${new Date()}`);
  });
};

export { fileReference };
