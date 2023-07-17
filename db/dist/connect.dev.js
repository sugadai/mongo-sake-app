"use strict";

var mongoose = require('mongoose');

var connectDB = function connectDB(url) {
  return regeneratorRuntime.async(function connectDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(mongoose.connect(url).then(function () {
            console.log('モンゴサーベーに接続しました。');
          })["catch"](function (error) {
            console.log(error);
          }));

        case 2:
          return _context.abrupt("return", _context.sent);

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
};

module.exports = connectDB;
//# sourceMappingURL=connect.dev.js.map
