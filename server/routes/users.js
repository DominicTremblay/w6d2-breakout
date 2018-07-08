var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const users = {
    id: 1,
    name: "Frank Castle",
    email: "frank@punisher.com"
  }

  res.json([users]);
});

module.exports = router;
