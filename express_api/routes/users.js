var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt');
// パスワードのハッシュ化の回数
const saltRounds = 10;

/* ユーザー登録 */
router.get('/auth/register', function(req, res, next) {
  
});

module.exports = router;
