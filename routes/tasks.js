const express = require('express')
const router = express.Router()
const { getAllTasks, postTask, updateTask, getTask, deleteTask} = require('../controllers/tasks')

router.route('/').get(getAllTasks).post(postTask)
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask)


module.exports = router