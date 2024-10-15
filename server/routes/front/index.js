const express = require('express');
const router = express.Router();
const contactRoutes = require('./contact');
const estimateRoutes = require('./estimate');

router.use('/contact', contactRoutes);
router.use('/estimate', estimateRoutes);

module.exports = router;