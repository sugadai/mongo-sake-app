"use strict";

// const { format } = require("express/lib/response");
var params = window.location.search;
var id = new URLSearchParams(params).get("id"); // console.log(id)

var sakeIdDOM = document.querySelector('.task-edit-id');
var sakeNameDOM = document.querySelector('.task-edit-name');
var sakeTypeDOM = document.querySelector('.task-edit-type');
var editFormDOM = document.querySelector('.single-task-form');
var formAlertDOM = document.querySelector('.form-alert');
var sakeCompletedDOM = document.querySelector('.task-edit-completed'); // 一つの特定のタスクを取得する

var showTask = function showTask() {
  var _ref, task, _id, completed, saketype, sakename;

  return regeneratorRuntime.async(function showTask$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(axios.get("/api/v1/tasks/".concat(id)));

        case 3:
          _ref = _context.sent;
          task = _ref.data;
          // console.log(task)
          _id = task._id, completed = task.completed, saketype = task.saketype, sakename = task.sakename;
          sakeIdDOM.textContent = _id;
          sakeNameDOM.value = sakename;
          sakeTypeDOM.value = saketype;

          if (completed) {
            sakeCompletedDOM.checked = true;
          }

          _context.next = 15;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 15:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 12]]);
};

showTask(); //タスクの編集

editFormDOM.addEventListener('submit', function _callee(e) {
  var taskName, saketype, _ref2, task;

  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          e.preventDefault();
          _context2.prev = 1;
          taskName = sakeNameDOM.value;
          saketype = sakeTypeDOM.value;
          sakeCompleted = sakeCompletedDOM.checked;
          _context2.next = 7;
          return regeneratorRuntime.awrap(axios.patch("/api/v1/tasks/".concat(id), {
            sakename: taskName,
            saketype: saketype,
            completed: sakeCompleted
          }));

        case 7:
          _ref2 = _context2.sent;
          task = _ref2.data;
          formAlertDOM.style.display = "block";
          formAlertDOM.textContent = "編集に成功しました。";
          formAlertDOM.classList.add("text-success");
          _context2.next = 19;
          break;

        case 14:
          _context2.prev = 14;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0);
          formAlertDOM.style.display = "block";
          formAlertDOM.innerHTML = "無効です。もう一度やり直して下さい。";

        case 19:
          setTimeout(function () {
            formAlertDOM.style.display = "none";
            formAlertDOM.classList.remove("text-success");
          }, 3000);

        case 20:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 14]]);
});
//# sourceMappingURL=editTask.dev.js.map
