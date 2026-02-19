const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
    getVaultMedia,
    deleteVaultMedia,
    uploadMedia,
    upload
} = require('../controllers/vaultController');

router.route('/')
    .get(protect, getVaultMedia);

router.post('/upload', protect, upload.single('file'), uploadMedia);

// Use POST for deletion to easily handle public_ids with slashes/folders
router.post('/delete', protect, deleteVaultMedia);

module.exports = router;
