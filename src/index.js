const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/serverConfig");
const cron = require("node-cron");
const TicketController = require("./controllers/ticket-controller");
// const { sendBasicEmail } = require("./services/email-service");
const jobs = require("./utils/job");
const setupAndStartServer = () => {
  const app = express();
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.post("/api/v1/tickets", TicketController.create);
  app.listen(PORT, () => {
    console.log(` Server started at port ${PORT}`);
    jobs();
    // sendBasicEmail(
    //   "support@admin.com",
    //   "kakkar.adi14@gmail.com",
    //   "This is a missing mail",
    //   "Itne der baat krne pr bhi baat krne ka man kr rha...kya hua hai aaj"
    // );
  });
};

setupAndStartServer();
