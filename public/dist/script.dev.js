"use strict";

var tasksDOM = document.querySelector('.tasks');
var formDOM = document.querySelector('.task-form');
var sakeinputDOM = document.getElementById('sake-input'); // const saketypeDOM = document.getElementById('saketype-input');

var formAlertDOM = document.querySelector('.form-alert');
var saketypeDOM = document.getElementById('saketype'); // /api/v1/tasksからタスクを読み込む

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

          if (!(tasks.length < 1)) {
            _context.next = 8;
            break;
          }

          tasksDOM.innerHTML = "<h5 class=\"empty-list\">\u9152\u306E\u30C7\u30FC\u30BF\u304C\u3042\u308A\u307E\u305B\u3093\u3002</h5>";
          return _context.abrupt("return");

        case 8:
          //タスクを出力
          allTasks = tasks.map(function (task) {
            var completed = task.completed,
                _id = task._id,
                saketype = task.saketype,
                sakename = task.sakename;
            return "<div class=\"single-task ".concat(completed && "task-completed", "\">\n            <h5>\n                <span><i class=\"far fa-check-circle\"></i></span>").concat(sakename, "\n                <span><i ></i></span>").concat(saketype, "\n            </h5>\n            <div class=\"task-links\">\n                <!-- \u7DE8\u96C6\u30EA\u30F3\u30AF -->\n                <a href=\"edit.html?id=").concat(_id, "\" class=\"edit-link\">\n                    <i class=\"fas fa-edit\"></i>\n                </a>\n                <button type=\"button\" class=\"delete-btn\" data-id=\"").concat(_id, "\">\n                    <i class=\"fas fa-trash\"></i>\n                </button>\n            </div>\n        </div>");
          }).join(""); // console.log(allTasks)

          tasksDOM.innerHTML = allTasks;
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

showTasks(); //タスクの新規作成

formDOM.addEventListener('submit', function _callee(event) {
  var sakename, saketype;
  return regeneratorRuntime.async(function _callee$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          event.preventDefault(); // console.log(sakeType.value);
          // console.log(sakeinputDOM,saketypeDOM)

          sakename = sakeinputDOM.value;
          saketype = saketypeDOM.value;
          _context2.prev = 3;
          _context2.next = 6;
          return regeneratorRuntime.awrap(axios.post("/api/v1/tasks", {
            sakename: sakename,
            saketype: saketype
          }));

        case 6:
          showTasks();
          sakeinputDOM.value = "";
          formAlertDOM.style.display = "block";
          formAlertDOM.textContent = "日本酒を追加しました。";
          formAlertDOM.classList.add("text-success");
          _context2.next = 18;
          break;

        case 13:
          _context2.prev = 13;
          _context2.t0 = _context2["catch"](3);
          console.log(_context2.t0);
          formAlertDOM.style.display = "block";
          formAlertDOM.innerHTML = '無効です。もう一度やり直して下さい。';

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
  }, null, null, [[3, 13]]);
}); //タスクの削除

tasksDOM.addEventListener('click', function _callee2(event) {
  var element, id;
  return regeneratorRuntime.async(function _callee2$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          element = event.target; // console.log(element.parentElement);

          if (!element.parentElement.classList.contains("delete-btn")) {
            _context3.next = 12;
            break;
          }

          id = element.parentElement.dataset.id; // console.log(id)

          _context3.prev = 3;
          _context3.next = 6;
          return regeneratorRuntime.awrap(axios["delete"]("/api/v1/tasks/".concat(id)));

        case 6:
          showTasks();
          _context3.next = 12;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](3);
          console.log(_context3.t0);

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[3, 9]]);
});
//# sourceMappingURL=script.dev.js.map
