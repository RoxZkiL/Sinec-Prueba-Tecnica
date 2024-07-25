const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "blogposts.sqlite",
});

module.exports = sequelize;
