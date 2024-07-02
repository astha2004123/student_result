var express = require('express');
var router = express.Router();
var admin = require('../controller/admin-controller');

/* GET home page. */
router.post('/',admin.login);
router.get('/logout',admin.logout);

module.exports = router;
