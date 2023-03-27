"use strict";

var tasksDOM = document.querySelector('.tasks');
var formDOM = document.querySelector('.task-form');
var taskInputDOM = document.querySelector('.task-input');
var formAlertDOM = document.querySelector('.form-alert'); // /api/v1/tasksからタスクを読み込む

var showTasks = function showTasks() {
  var _ref, tasks, allTasks;

  return regeneratorRuntime.async(function showTasks$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(axios.get("/api/v1/tasks"));

        case 3:
          _ref = _context.sent;
          tasks = _ref.data;
          //タスクがない時の表示
          console.log(tasks.length);

          if (!(tasks.length < 1)) {
            _context.next = 9;
            break;
          }

          tasksDOM.innerHTML = "<h5 class=\"empty-list\">\u30BF\u30B9\u30AF\u304C\u3042\u308A\u307E\u305B\u3093\u3002</h5>";
          return _context.abrupt("return");

        case 9:
          //タスクを出力
          allTasks = tasks.map(function (task) {
            var completed = task.completed,
                _id = task._id,
                name = task.name;
            return "<div class=\"single-task ".concat(completed && "task-completed", "\">\n            <h5>\n                <span><i class=\"far fa-check-circle\"></i></span>").concat(name, "\n            </h5>\n            <div class=\"task-links\">\n                <!-- \u7DE8\u96C6\u30EA\u30F3\u30AF -->\n                <a href=\"edit.html?id=").concat(_id, "\" class=\"edit-link\">\n                    <i class=\"fas fa-edit\"></i>\n                </a>\n                <button type=\"button\" class=\"delete-btn\" data-id=\"").concat(_id, "\">\n                    <i class=\"fas fa-trash\"></i>\n                </button>\n            </div>\n        </div>");
          }).join(""); // console.log(allTasks)

          tasksDOM.innerHTML = allTasks;
          _context.next = 16;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 13]]);
};

showTasks(); //タスクの新規作成

formDOM.addEventListener('submit', function _callee(event) {
  var name;
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          event.preventDefault();
          name = taskInputDOM.value;
          _context2.prev = 2;
          _context2.next = 5;
          return regeneratorRuntime.awrap(axios.post("/api/v1/tasks", {
            name: name
          }));

        case 5:
          showTasks();
          taskInputDOM.value = "";
          formAlertDOM.style.display = "block";
          formAlertDOM.textContent = "タスクを追加しました。";
          formAlertDOM.classList.add("text-success");
          _context2.next = 17;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](2);
          console.log(_context2.t0);
          formAlertDOM.style.display = "block";
          formAlertDOM.innerHTML = '無効です。もう一度やり直して下さい。';

        case 17:
          setTimeout(function () {
            formAlertDOM.style.display = "none";
            formAlertDOM.classList.remove("text-success");
          }, 3000);

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 12]]);
}); //タスクの削除

tasksDOM.addEventListener('click', function _callee2(event) {
  var element, id;
  return regeneratorRuntime.async(function _callee2$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          element = event.target;
          console.log(element.parentElement);

          if (!element.parentElement.classList.contains("delete-btn")) {
            _context3.next = 13;
            break;
          }

          id = element.parentElement.dataset.id; // console.log(id)

          _context3.prev = 4;
          _context3.next = 7;
          return regeneratorRuntime.awrap(axios["delete"]("/api/v1/tasks/".concat(id)));

        case 7:
          showTasks();
          _context3.next = 13;
          break;

        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](4);
          console.log(_context3.t0);

        case 13:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[4, 10]]);
});
//# sourceMappingURL=script.dev.js.map
