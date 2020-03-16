var uniqid = require('uniqid');

const Moment = require('moment');
const MomentRange = require('moment-range');
 
const moment = MomentRange.extendMoment(Moment);

module.exports = {
    async registerOnlyDate(req, res, next){
        if(req.app.db.get('setTimes').find({date: req.body.date}).value() != undefined)
        {
            req.app.db.get('setTimes')
            .find({date: req.body.date})
            .assign({interval: interval.push(req.body.interval)})
            .value()
        } else{
            req.app.db.get('setTimes')
            .push({id: uniqid(), 
                date: req.body.date, 
                interval: req.body.interval
                })
            .write()
        }
        res.json({status: 'Horário cadastrado com sucesso'})

    },

    async registerDaily(req, res, next){

    },

    async registerWeekly(req, res, next){

    },

    async delete (req, res, next){

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