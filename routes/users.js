const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  res.send('respond with a resource');
});

router.get('/cool', (req, res) => {
  res.send('wow you are so cool');
});

module.exports = router;
