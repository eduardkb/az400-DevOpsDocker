const express = require("express");
const cors = require("cors");

//TO RUN FE WITH EXPRESS
const path = __dirname + "/aReactFrontEnd/build";
console.log(`FE Path: ${__dirname}`);

const app = express();

//TO RUN FE WITH EXPRESS
app.use(express.static(path));

const corsOptions = {
  origin: "https://www.Beduardkb.website",
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// sync database
const db = require("./app/models");

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log(`Failed to sync db: ${err.message}`);
  });
// force sync database (delete tables and initialize)
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the application's API." });
});

//TO RUN FE WITH EXPRESS
// app.get('/', function (req,res) {
//   res.sendFile(path + "index.html");
// });

// include routes in server.js
require("./app/routes/turorial.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8090;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
