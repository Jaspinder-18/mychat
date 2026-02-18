const express = require('express');
const { sendMessage, getMessages, deleteChat } = require('../controllers/chatController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/').post(protect, sendMessage);
router.route('/:userId').get(protect, getMessages);
router.route('/delete/:userId').put(protect, deleteChat);

module.exports = router;
