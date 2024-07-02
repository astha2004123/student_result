var express = require('express');
var router = express.Router();
var result = require('../controller/result.controller');

/* GET home page. */
router.post('/add_student_result', result.insert);
router.get('/view_result',result.view);
router.post('/update_result/:id',result.update);
router.get('/delete_result/:id',result.delete);
router.get('/view_student_result/:id',result.single_result);
router.get('/top_5',result.view5);

module.exports = router;
