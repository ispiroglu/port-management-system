const client = require('../pool').pool;
const generator = require('../util/query-generator');

const getAllShips = async (request, response) => {
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
    var query = generator.selectWhere('ship', request.query);
    console.log(query);
    try {
        await client.query(query, Object.values(request.query), (error, results) => {
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

module.exports = {
    getAll: getAllShips,
    getFiltered
}