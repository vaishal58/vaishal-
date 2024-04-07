const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");

const cors = require("cors");
const fs = require("fs");
const path = require("path");
const UserRoutes=require("./routes/userRoutes")

require("dotenv").config();
const url = process.env.API_URL;



global.__basedir = __dirname;

const app = express();
let databasestatus = "In-Progress";
app.use(cors());
app.options("*", cors());

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DATABASE, { useNewUrlParser: true })
  .then(() => {
    databasestatus = "DB connected";
    //NodeCronJob.LoadCronJobs();
    console.log("DB connected");
  })
  .catch((err) => {
    databasestatus = err;
    console.log("DB Error => ", err);
  });


app.use(morgan("dev"));

app.use(express.static("files"));
app.use(express.json());

app.use('/api/v1/user',UserRoutes)











const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
