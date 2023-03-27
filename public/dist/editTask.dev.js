"use strict";

// const { format } = require("express/lib/response");
var params = window.location.search;
var id = new URLSearchParams(params).get("id"); // console.log(id)

var taskIdDOM = document.querySelector('.task-edit-id');
var taskNameDOM = document.querySelector('.task-edit-name');
var editFormDOM = document.querySelector('.single-task-form');
var formAlertDOM = document.querySelector('.form-alert');
var taskCompletedDOM = document.querySelector('.task-edit-completed'); // 一つの特定のタスクを取得する

var showTask = function showTask() {
  var _ref, task, _id, completed, name;

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
          _id = task._id, completed = task.completed, name = task.name;
          taskIdDOM.textContent = _id;
          taskNameDOM.value = name;

          if (completed) {
            taskCompletedDOM.checked = true;
          }

          _context.next = 14;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 11]]);
};

showTask(); //タスクの編集

editFormDOM.addEventListener('submit', function _callee(e) {
  var taskName, _ref2, task;

  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          e.preventDefault();
          _context2.prev = 1;
          taskName = taskNameDOM.value;
          taskCompleted = taskCompletedDOM.checked;
          _context2.next = 6;
          return regeneratorRuntime.awrap(axios.patch("/api/v1/tasks/".concat(id), {
            name: taskName,
            completed: taskCompleted
          }));

        case 6:
          _ref2 = _context2.sent;
          task = _ref2.data;
          formAlertDOM.style.display = "block";
          formAlertDOM.textContent = "編集に成功しました。";
          formAlertDOM.classList.add("text-success");
          _context2.next = 18;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](1);
          console.log(_context2.t0);
          formAlertDOM.style.display = "block";
          formAlertDOM.innerHTML = "無効です。もう一度やり直して下さい。";

        case 18:
          setTimeout(function () {
            formAlertDOM.style.display = "none";
            formAlertDOM.classList.remove("text-success");
          }, 3000);

        case 19:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 13]]);
});
//# sourceMappingURL=editTask.dev.js.map
