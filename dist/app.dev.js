"use strict";

var express = require('express');

var app = express();

var connectDB = require('./db/connect');

var _require = require('./routes/tasks'),
    use = _require.use;

require('dotenv').config();

var PORT = 5000;

var taskRoute = require('./routes/tasks');

app.use(express.json());
app.use(express["static"]("./public"));
app.use('/api/v1/tasks', taskRoute);

var start = function start() {
  return regeneratorRuntime.async(function start$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(connectDB(process.env.MONGO_URL));

        case 3:
          app.listen(PORT, function () {
            console.log(PORT + '番ポートでサーバーが起動しました。');
          });
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

start();
//# sourceMappingURL=app.dev.js.map
