"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = require("sequelize");

var sequelize = new _sequelize.Sequelize("postgres", "postgres", "Olenjude2020!", {
  dialect: "postgres",
  host: "db.vxinmbvlspqhcdusriua.supabase.co"
});
exports.sequelize = sequelize;