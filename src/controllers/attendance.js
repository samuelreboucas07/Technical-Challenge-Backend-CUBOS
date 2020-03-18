var uniqid = require('uniqid');

const Moment = require('moment');
const MomentRange = require('moment-range');
const moment = MomentRange.extendMoment(Moment);

module.exports = {
    async registerOnlyDate(req, res, next){
        //SAVE IN ONLY ARRAY MANY INTERVALS, DOES NOT LEAVE OPTIMIZED DELETE AND GET.
        req.app.db.get('setTimes')
        .push({
            id: uniqid(), 
            date: req.body.date, 
            startTime: req.body.startTime,
            endTime: req.body.endTime
        })
        .write()
        res.json({status: 'Horário cadastrado com sucesso'})
    },

    async registerDaily(req, res, next){
        req.app.db.get('setTimes')
        .push({
            id: uniqid(),
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            daily: req.body.daily
        })
        .write()
        res.json({status: 'Horário cadastrado com sucesso'})
    },

    async registerWeekly(req, res, next){
        req.app.db.get('setTimes')
        .push({
            id: uniqid(),
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            weekly: req.body.weekly
        })
        .write()
        res.json({status: 'Horário cadastrado com sucesso'})
    },

    async deleteById (req, res, next){
        req.app.db.get('setTimes')
            .remove({
                id: req.params.id, 
                })
        .write()
        res.json({status: 'Horário removido'})
    },

    async getScheduledTimes (req, res, next){
        const consultationSchedule = req.app.db.get('setTimes')
                                    .value()
        res.json({status: 'Horário retornado com sucesso', schedulesTimes: consultationSchedule})

    },

    async getAvailableTimesByInterval (req, res, next){
        const scheduledTimes = [];
        range = moment().range(moment(req.params.startDate, 'DD-MM-YYYY'), moment(req.params.endDate, 'DD-MM-YYYY')),
        array = Array.from(range.by("days"));
        array.map(m => {
            const timesConsultation = req.app.db.get('setTimes')
                          .filter(time => time.date == m.format('DD-MM-YYYY') || time.daily == true || time.weekly.includes(m.format('dddd')))
                          .value()
            if(timesConsultation.length > 0){
                var intervals = [];
                timesConsultation.map((scheduled, index) => {
                    intervals.push({startTime: scheduled.startTime, endTime: scheduled.endTime})
                })
                scheduledTimes.push({day: m.format('DD-MM-YYYY'), intervals: intervals}) 
            }
       });
       res.json({status: 'Horário retornado com sucesso', schedulesTimes: scheduledTimes})
    }
}