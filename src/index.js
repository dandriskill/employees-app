const express = require("express");
const cors = require("cors");
const employeesRouter = require('./routes/employees')
const api = express();
const port = process.env.PORT || 3001;

api.get("/", (req, res) => {
  res.send("API is working!");
});

api.use(cors());
api.use(express.json());
api.use(express.urlencoded({ extended: false }));
api.use(employeesRouter);

api.listen(port, () => {
  console.log(`API running on port ${port}!`)
});