"use strict";

var _require = require('nodemon/lib/monitor/watch'),
    resetWatchers = _require.resetWatchers;

var Task = require('../models/Task');

var getAllTask = function getAllTask(req, res) {
  var allTask;
  return regeneratorRuntime.async(function getAllTask$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Task.find(req.body));

        case 3:
          allTask = _context.sent;
          res.status(200).json(allTask);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json(_context.t0);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

var createTask = function createTask(req, res) {
  var _createTask;

  return regeneratorRuntime.async(function createTask$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          console.log(req.body);
          _context2.next = 4;
          return regeneratorRuntime.awrap(Task.create(req.body));

        case 4:
          _createTask = _context2.sent;
          res.status(200).json(_createTask);
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
  var _getSingleTask;

  return regeneratorRuntime.async(function getSingleTask$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          console.log(req.params.id);
          _context3.next = 4;
          return regeneratorRuntime.awrap(Task.findOne({
            _id: req.params.id
          }));

        case 4:
          _getSingleTask = _context3.sent;

          if (_getSingleTask) {
            _context3.next = 7;
            break;
          }

          return _context3.abrupt("return", res.status(404).json("_id:".concat(req.param.id, "\u306F\u5B58\u5728\u3057\u307E\u305B\u3093\u3002")));

        case 7:
          res.status(200).json(_getSingleTask);
          _context3.next = 13;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json(_context3.t0);

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

var updateTask = function updateTask(req, res) {
  var _updateTask;

  return regeneratorRuntime.async(function updateTask$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          console.log(req.body);
          _context4.next = 4;
          return regeneratorRuntime.awrap(Task.findOneAndUpdate({
            _id: req.params.id
          }, req.body, {
            "new": true
          }));

        case 4:
          _updateTask = _context4.sent;

          if (_updateTask) {
            _context4.next = 7;
            break;
          }

          return _context4.abrupt("return", res.status(404).json("_id:".concat(req.param.id, "\u306F\u5B58\u5728\u3057\u307E\u305B\u3093\u3002")));

        case 7:
          res.status(200).json(_updateTask);
          _context4.next = 13;
          break;

        case 10:
          _context4.prev = 10;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json(_context4.t0);

        case 13:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

var deleteATask = function deleteATask(req, res) {
  var _deleteATask;

  return regeneratorRuntime.async(function deleteATask$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          console.log(req.params.id);
          _context5.next = 4;
          return regeneratorRuntime.awrap(Task.findOneAndDelete({
            _id: req.params.id
          }));

        case 4:
          _deleteATask = _context5.sent;

          if (_deleteATask) {
            _context5.next = 7;
            break;
          }

          return _context5.abrupt("return", res.status(404).json("_id:".concat(req.param.id, "\u306F\u5B58\u5728\u3057\u307E\u305B\u3093\u3002")));

        case 7:
          res.status(200).json(_deleteATask);
          _context5.next = 13;
          break;

        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json(_context5.t0);

        case 13:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 10]]);
};

module.exports = {
  getAllTask: getAllTask,
  createTask: createTask,
  getSingleTask: getSingleTask,
  updateTask: updateTask,
  deleteATask: deleteATask
};
//# sourceMappingURL=tasks.dev.js.map
