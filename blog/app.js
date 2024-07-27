const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require("./config/database");
const postRoutes = require("./routes/postRoutes");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:8000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(bodyParser.json());
app.use(postRoutes);
app.use(errorHandler);

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
