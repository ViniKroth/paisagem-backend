const models = require("./models");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fileUpload = require('express-fileupload');
const fs = require('fs')
const http = require('http');
const https = require('https');

const loginRouter = require("./routes/login");
const usersRouter = require("./routes/users");
const especiesRouter = require("./routes/especies");
const nomesPopularesRouter = require("./routes/nomesPopulares");
const familiasRouter = require("./routes/familias");
const TokenManager = require("./Helpers/AuthManager");

const ssl_certificate = fs.readFileSync( 'server.ctr' );
const ssl_certificate_key = fs.readFileSync( 'server.key' );
const ssl_password = 'paisagem';

const credentials = {
    key: ssl_certificate,
    cert: ssl_certificate_key,
    passphrase: ssl_password
};

// Initialize server
models.sequelize.sync().then(function() {
  models.Users.create({
    "username":"admin",
    "senha":"8c9a812879a9324b5becada806b85389685944212118971e8ff1507d74af67ed",
    "salt":"34df78b35c833deade9fd2e77db5341a27252206f46d0aeb065673e2529a0576",
    "nome":"admin"
  })
  models.Familias.create({
    "nome": "Acanthaceae"
   })
   models.Familias.create({
    "nome": "Annonaceae"
   })
   models.Familias.create({
    "nome": "Apiaceae"
   })
   models.Familias.create({
    "nome": "Apocynaceae"
   })
   models.Familias.create({
    "nome": "Araliaceae"
   })
   models.Familias.create({
    "nome": "Bignoniaceae"
   })
   models.Familias.create({
    "nome": "Boraginaceae"
   })
   models.Familias.create({
    "nome": "Calyceraceae"
   })
   models.Familias.create({
    "nome": "Cannaceae"
   })
   models.Familias.create({
    "nome": "Convolvulaceae"
   })
   models.Familias.create({
    "nome": "Ericaceae"
   })
   models.Familias.create({
    "nome": "Lecythidaceae"
   })
   models.Familias.create({
    "nome": "Magnoliaceae"
   })
   models.Familias.create({
    "nome": "Piperaceae"
   })
   models.Familias.create({
    "nome": "Poaceae"
   })
   models.Familias.create({
    "nome": "Rubiaceae"
   })
   models.Familias.create({
    "nome": "Solanaceae"
   })
   models.Familias.create({
    "nome": "Theophrastaceae"
   })
   models.Familias.create({
    "nome": "Verbenaceae"
   })
  setupServer();
});

function setupServer() {
  const app = express();

  app.use(cors());
  //app.use(bodyParser.json());
  app.use(bodyParser.json({limit: '10mb', extended: true}))
  app.use("/api/especies", especiesRouter);
  app.use("/api/familias", familiasRouter);
  app.use("/api/login", loginRouter);
  app.use("/api/nomesPopulares", nomesPopularesRouter);

  app.use(
    "/api/users",
    //TokenManager.ensureUserToken,
    usersRouter
  );

  app.use(fileUpload());

  app.use('/public', express.static(__dirname + '/public'))
  
  app.post('/api/upload', (req, res, next) => {
    let imageFile = req.files.imagem;
    imageFile.mv(`${__dirname}/public/${req.body.nome}`, function(err) {
      if (err) {
        return res.status(500).send(err);
      }
      res.json({file: `public/${req.body.nome}`});
    });
  })

/*  app.listen(process.env.port || 4000, function() {
    console.log("server listening");
  });*/

  const httpServer = http.createServer(app);
  const httpsServer = https.createServer(credentials, app);

  httpServer.listen(4000, () => {
      console.log('HTTP Server running on port 4000');
  });

  httpsServer.listen(4043, () => {
      console.log('HTTPS Server running on port 4043');
  });
}
