var uniqid = require('uniqid');

const Moment = require('moment');
const MomentRange = require('moment-range');
 
const moment = MomentRange.extendMoment(Moment);

module.exports = {
    async registerOnlyDate(req, res, next){
        //SAVE IN ONLY ARRAY MANY INTERVALS, DOES NOT LEAVE OPTIMIZED DELETE.

        // if(req.app.db.get('setTimes').find({date: req.body.date}).value() != undefined)
        // {
        //     const setTimes = req.app.db.get('setTimes')
        //                      .find({date: req.body.date})
        //                      .value()
                        
        //                 setTimes.interval.push(req.body.interval)
                        
        //                 req.app.db.get('setTimes')
        //                 .find({date: req.body.date})
        //                 .assign({interval:  setTimes.interval})
        //                 .write()
        // } else{
            req.app.db.get('setTimes')
            .push({id: uniqid(), 
                date: req.body.date, 
                interval: req.body.interval
                })
            .write()
        // }
        res.json({status: 'Horário cadastrado com sucesso'})

    },

    async registerDaily(req, res, next){

    },

    async registerWeekly(req, res, next){

    },

    async delete (req, res, next){
        const consultationSchedule = req.app.db.get('setTimes')
                                    .filter({date: req.params.date})
                                    .value()
        console.log(consultationSchedule)
        
        res.json({status: 'Horário removido'})
    },

    async getScheduledTimes (req, res, next){
    
    },

    async getAvailableTimesByInterval (req, res, next){
        //     range = moment().range("2018-02-20", "2018-03-01"), /*can handle leap year*/ 
    //     array = Array.from(range.by("days"));
    //     array.map(m => {
    //         console.log(m.format("YYYY-MM-DD")); /*or any format you like*/
    //    });
    }
}