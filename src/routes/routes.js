const express = require('express');
const router = express.Router();
const attendanceCtrl = require('./../controllers/attendance');

router.post('/registerOnlyDate', attendanceCtrl.registerOnlyDate);
router.post('/registerDaily', attendanceCtrl.registerDaily);
router.post('/registerWeekly', attendanceCtrl.registerWeekly);
router.post('/deleteById/:id', attendanceCtrl.deleteById);
router.get('/getScheduledTimes', attendanceCtrl.getScheduledTimes);
router.get('/getAvailableTimesByInterval/:startDate/:endDate', attendanceCtrl.getAvailableTimesByInterval);

module.exports = router;

