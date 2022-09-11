const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', function(req, res, next) {
  console.log('search');
  res.sendFile(path.join(__dirname, '../build/search.html'));
});

module.exports = router;
