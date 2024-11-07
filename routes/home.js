const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Você enviou um GET request');
});

router.post('/', (req, res) => {
  res.send('Você enviou um POST request');
})

router.patch('/', (req, res) => {
  res.send('Você enviou um PATCH request');
})

router.delete('/', (req, res) => {
  res.send('Você enviou um DELETE request');
})

module.exports = router;