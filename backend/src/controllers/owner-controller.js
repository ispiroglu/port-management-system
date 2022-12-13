const client = require('../pool').pool;

const getAll = async (request, response) => {
    var query = 'select * from owner'
    console.log('Query: select * from owner');
    try {
        await client.query(query, (error, results) => {
            if(error) {
                throw error;
            }
            response.status(200).json(results.rows);
        })
    } catch (exception) {
        console.log(exception);
        response.status(400).json(exception);
    }
}

const getFiltered = async (request, response) => {

}

module.exports = {
    getAll,
    getFiltered
}