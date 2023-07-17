"use strict";

var express = require('express');

var _require = require('express/lib/response'),
    append = _require.append;

var router = express.Router();

var _require2 = require('../controllers/tasks'),
    getAllTask = _require2.getAllTask,
    createTask = _require2.createTask,
    getSingleTask = _require2.getSingleTask,
    updateTask = _require2.updateTask,
    deleteATask = _require2.deleteATask;

router.get('/', getAllTask);
router.post('/', createTask);
router.get('/:id', getSingleTask);
router.patch('/:id', updateTask);
router["delete"]('/:id', deleteATask);
module.exports = router;
//# sourceMappingURL=tasks.dev.js.map
