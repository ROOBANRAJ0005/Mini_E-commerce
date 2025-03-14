const express = require('express');
const { getOrder } = require('../controllers/orderController');
const router = express.Router();

router.route('/orders').post(getOrder);

module.exports = router;