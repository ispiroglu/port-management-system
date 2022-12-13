const client = require('../pool').pool;

const getAll = async (request, response) => {
    console.log(request);
    var query = 'select * from ship'
    console.log('Query: select * from ship');
    console.log(client);
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
    //request.params
}

module.exports = {
    getAll,
    getFiltered
}