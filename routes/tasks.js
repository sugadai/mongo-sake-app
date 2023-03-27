const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router();
const {
    getAllTask,
    createTask,
    getSingleTask,
    updateTask,
    deleteATask,
} = require('../controllers/tasks');

router.get('/',getAllTask);
router.post('/',createTask);
router.get('/:id',getSingleTask);
router.patch('/:id',updateTask);
router.delete('/:id',deleteATask);

module.exports = router;