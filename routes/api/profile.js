const express = require('express');
const router = express.Router();

// @route Get api/profile/me
// @desc Get current users profile
// @access Private
router.get('/', (req, res) => res.send('Profile route'));

module.exports = router;
