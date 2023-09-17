"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = require("sequelize");

var sequelize = new _sequelize.Sequelize("beers_db", "root", "password", {
  dialect: "mysql",
  host: "localhost"
});
exports.sequelize = sequelize;