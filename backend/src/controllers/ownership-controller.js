const db = require('../database/db-operations');

const getAll = async (request, response) => {
    try {
        var queryResult = await db.getAll('owner_ship');
        console.log(queryResult);
        response.status(200).json(queryResult);
    } catch (error) {
        console.error(error);
        response.status(400).json(error);
    }
}

const getFiltered = async (request, response) => {
    try{
        var queryResult = await db.getFiltered('owner_ship', request.query);
        console.log(queryResult);
        response.status(200).json(queryResult);
    } catch (error) {
        console.log(error);
        response.status(400).json(error);
    }
}

module.exports = {
    getAll,
    getFiltered
}