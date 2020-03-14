const express = require('express');
const router = express.Router();
const attendanceCtrl = require('./../controllers/attendance');

router.post('/registerRules', attendanceCtrl.register);
router.post('/deleteRules', attendanceCtrl.delete);
router.get('/getScheduledTimes', attendanceCtrl.getScheduledTimes);
router.get('/getAvailableTimesByInterval', attendanceCtrl.getAvailableTimesByInterval);

module.exports = router;

