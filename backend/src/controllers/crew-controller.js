const db = require('../database/db-operations');

const getAll = async (request, response) => {
    try {
        var queryResult = await db.getAll('crew');
        console.log(queryResult);
        response.status(200).json(queryResult);
    } catch (error) {
        console.error(error);
        response.status(400).json(error);
    }
}

const getFiltered = async (request, response) => {
    try{
        var queryResult = await db.getFiltered('crew', request.query);
        console.log(queryResult);
        response.status(200).json(queryResult);
    } catch (error) {
        console.log(error);
        response.status(400).json(error);
    }
}

const insert = async (request, response) => {
    try {
        var queryResult = await db.crewInsert(request.body);
        console.log(queryResult);
        response.status(200).json(queryResult);
    } catch (error) {
        console.log(error);
        response.status(400).json(error);
    }
}

const deletes = async (request, response) => {
    try {
        var queryResult = await db.deletes('crew', request.query);
        console.log(queryResult);
        response.status(200).json(queryResult);
    } catch (error) {
        console.log(error);
        response.status(400).json(error);
    }
}

const update = async (request, response) => {
    try {
        var queryResult = await db.update('crew', request.body);
        console.log(queryResult);
        response.status(200).json(queryResult);
    } catch (error) {
        console.log(error);
        response.status(400).json(error);
    }
}

module.exports = {
    getAll,
    getFiltered,
    insert,
    deletes,
    update
}