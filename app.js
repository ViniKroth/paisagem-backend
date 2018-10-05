const models = require("./models");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const loginRouter = require("./routes/login");
const usersRouter = require("./routes/users");
const especiesRouter = require("./routes/especies");
const familiasRouter = require("./routes/familias");
const TokenManager = require("./Helpers/AuthManager");

// Initialize server
models.sequelize.sync().then(function() {
  setupServer();
});

function setupServer() {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());
  app.use("/api/especies", especiesRouter);
  app.use("/api/familias", familiasRouter);
  app.use("/api/login", loginRouter);
  app.use(
    "/api/users",
    //TokenManager.ensureUserToken,
    usersRouter
  );

  app.listen(process.env.port || 4000, function() {
    console.log("server listening");
  });
}
