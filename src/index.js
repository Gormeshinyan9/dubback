const express = require("express");
const cors = require("cors");
require("dotenv").config();
const swaggerUi = require("swagger-ui-express");

const swaggerDocument = require("../swagger.json");

const { PORT } = require("./config");
const { mailRouter } = require("./routes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: true, credentials: true }));

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/api/mail", mailRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
