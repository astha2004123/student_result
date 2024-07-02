var express = require('express');
var router = express.Router();
var student = require('../controller/student-controller');

/* GET home page. */
router.post('/add_student',student.insert);
router.post('/',student.login);
router.get('/logout',student.logout);
router.post('/update_student/:id',student.update);
router.get('/delete_student/:id',student.delete);

module.exports = router;
