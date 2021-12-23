const express = require("express");
const app = express();
const cors = require("cors");

const authRouter = require("./routes");

const port = process.env.PORT || 4000;
require("./db");
app.use(cors());
app.use(express.json());
app.use("/auth", authRouter);

// port
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
