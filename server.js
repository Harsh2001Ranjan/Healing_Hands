const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
//configuring dotenv
dotenv.config({ path: "routes/.env" });
//mongodb connect
connectDB();
//Creating rest object here
const app = express();

//creating middlewares here
app.use(express.json());
app.use(morgan("dev"));

//Setting routes;
app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));

// port
const port = process.env.PORT || 8080;
console.log(`NODE_ENV: ${process.env.NODE_MODE}`);
console.log(`PORT: ${process.env.PORT}`);
// listening port
app.listen(port, () => {
  console.log(
    `Server is running on ${process.env.NODE_MODE} Mode on port ${port}`.bgCyan
      .white
  );
});
