
module.exports = {
    async register (req, res, next){
        console.log('teste')
        res.json({status: 'comunicação controller funcionando'})
    },

    async delete (req, res, next){

    },

    async getScheduledTimes (req, res, next){

    },

    async getAvailableTimesByInterval (req, res, next){

    }
}