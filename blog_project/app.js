const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
//const postRoutes = require("./routes/posts");

const app = express();

app.use(bodyParser.json());
//app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
