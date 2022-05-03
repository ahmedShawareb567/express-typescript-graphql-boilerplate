import { start } from "./server";
import { dbStart } from "./_common/DB";
import "./_common/mail";
import { fileReference } from "./_common/uploader/cron";

// SERVER && DB INITIALIZATION
start();
dbStart();

//SCHEDULE JOBS
// fileReference().start();
