"use strict";

var sake = require('../models/Task');

var getAllTask = function getAllTask(req, res) {
  var allsakes;
  return regeneratorRuntime.async(function getAllTask$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          console.log('全てのデータを取得しました。');
          _context.next = 4;
          return regeneratorRuntime.awrap(sake.find({}));

        case 4:
          allsakes = _context.sent;
          res.status(200).json(allsakes);
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          res.status(500).json(_context.t0);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

var createTask = function createTask(req, res) {
  var createsake;
  return regeneratorRuntime.async(function createTask$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          console.log('酒を一つ登録しました。');
          _context2.next = 4;
          return regeneratorRuntime.awrap(sake.create(req.body));

        case 4:
          createsake = _context2.sent;
          res.status(200).json(createsake);
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json(_context2.t0);

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

var getSingleTask = function getSingleTask(req, res) {
  var getsingletask;
  return regeneratorRuntime.async(function getSingleTask$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(sake.findOne({
            _id: req.params.id
          }));

        case 3:
          getsingletask = _context3.sent;

          if (getsingletask) {
            _context3.next = 6;
            break;
          }

          return _context3.abrupt("return", res.status(404).json("_id".concat(req.params.id, "\u306F\u5B58\u5728\u3057\u307E\u305B\u3093\u3002")));

        case 6:
          res.status(200).json(getsingletask);
          _context3.next = 12;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json(_context3.t0);

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

var updateTask = function updateTask(req, res) {
  var updatetask;
  return regeneratorRuntime.async(function updateTask$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          console.log('タスク情報を更新しました。');
          _context4.next = 4;
          return regeneratorRuntime.awrap(sake.findOneAndUpdate({
            _id: req.params.id
          }, req.body, {
            "new": true
          }));

        case 4:
          updatetask = _context4.sent;
          res.status(200).json(updatetask);
          _context4.next = 11;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json(_context4.t0);

        case 11:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

var deleteATask = function deleteATask(req, res) {
  var deletesake;
  return regeneratorRuntime.async(function deleteATask$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          console.log("".concat(req.params.id, "\u3092\u30C7\u30FC\u30BF\u3092\u524A\u9664\u3057\u307E\u3057\u305F\u3002"));
          _context5.next = 4;
          return regeneratorRuntime.awrap(sake.findOneAndDelete({
            _id: req.params.id
          }));

        case 4:
          deletesake = _context5.sent;
          res.status(200).json(deletesake);
          _context5.next = 11;
          break;

        case 8:
          _context5.prev = 8;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);

        case 11:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

module.exports = {
  getAllTask: getAllTask,
  createTask: createTask,
  getSingleTask: getSingleTask,
  updateTask: updateTask,
  deleteATask: deleteATask
};
//# sourceMappingURL=tasks.dev.js.map
