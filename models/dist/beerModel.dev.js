"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Beer = void 0;

var _sequelize = require("sequelize");

var _index = require("../db/index.js");

var Beer = _index.sequelize.define("beers", {
  id: {
    type: _sequelize.Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false
  },
  abv: {
    type: _sequelize.Sequelize.INTEGER,
    allowNull: false
  },
  image_url: {
    type: _sequelize.Sequelize.STRING,
    allowNull: true
  },
  tagline: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false
  },
  first_brewed: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false
  },
  ph: {
    type: _sequelize.Sequelize.INTEGER,
    allowNull: false
  }
});

exports.Beer = Beer;