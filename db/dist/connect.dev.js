"use strict";

var mongoose = require('mongoose');

var connectDB = function connectDB(url) {
  return mongoose.connect(url).then(function () {
    console.log('データベースと接続しています。');
  })["catch"](function (err) {
    console.log(err);
  });
};

module.exports = connectDB;
//# sourceMappingURL=connect.dev.js.map
