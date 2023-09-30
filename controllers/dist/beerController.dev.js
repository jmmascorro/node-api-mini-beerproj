"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addNewBeer = exports.getBeerById = exports.getBeers = void 0;

var _beerModel = require("../models/beerModel.js");

var getBeers = function getBeers(req, res) {
  _beerModel.Beer.findAll().then(function (beers) {
    res.status(200).send(beers);
  })["catch"](function (err) {
    console.log(err);
  });
};

exports.getBeers = getBeers;

var getBeerById = function getBeerById(req, res) {
  var id = parseInt(req.params.id);

  _beerModel.Beer.findByPk(id).then(function (beer) {
    res.status(200).send(beer || "Beer with the id of ".concat(id, " not found"));
  })["catch"](function (err) {
    console.log(err);
  });
};

exports.getBeerById = getBeerById;

var addNewBeer = function addNewBeer(req, res) {
  _beerModel.Beer.create({
    name: req.body.name,
    abv: req.body.abv,
    image_url: req.body.image_url,
    tagline: req.body.tagline,
    first_brewed: req.body.first_brewed,
    ph: req.body.ph
  });

  res.status(201).send({
    message: "Created"
  })["catch"](function (err) {
    console.log(err);
  });
}; // export const deleteBeer = (req, res) => {
//     const id = parseInt(req.params.id);
//     Beer.destroy({
//         where: {id: id}
//     }).then(() => {
//     res.status(204).end();
//     });
// }


exports.addNewBeer = addNewBeer;