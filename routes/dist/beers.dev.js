"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _beerController = require("../controllers/beerController.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express["default"])();
router.get("/", function (req, res) {
  return (0, _beerController.getBeers)(req, res);
});
router.get("/:id", function (req, res) {
  return (0, _beerController.getBeerById)(req, res);
});
router.post("/", function (req, res) {
  return (0, _beerController.addNewBeer)(req, res);
});
var _default = router;
exports["default"] = _default;