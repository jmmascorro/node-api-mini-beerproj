"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _beers = _interopRequireDefault(require("./routes/beers.js"));

var _cors = _interopRequireDefault(require("cors"));

var _index = require("./db/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
var port = 5432;

_index.sequelize.sync().then(function (result) {
  console.log(result);
})["catch"](function (err) {
  console.log(err);
});

app.use(_bodyParser["default"].json());
app.use((0, _cors["default"])({
  origin: '*'
}));
app.use((0, _cors["default"])({
  methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH']
}));
app.use((0, _cors["default"])({
  allowedHeaders: '*'
}));
app.use("/api/beers", _beers["default"]);
app.listen(port, function (req, res) {
  console.log("Server is running on port " + port);
});
app.get('/api', function (req, res) {
  res.send("welcome to my API");
});