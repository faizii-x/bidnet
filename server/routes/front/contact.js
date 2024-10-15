const express = require('express');
const router = express.Router();
const { contact } = require('../../controllers/front/contact');

router.post('/submit', contact);

module.exports = router;