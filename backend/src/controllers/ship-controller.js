const db = require('../database/db-operations');
const predefined = require('../database/predefined-operations');

const getAll = async (request, response) => {
    try {
        var queryResult = await db.getAll('ship');
        console.log(queryResult);
        response.status(200).json(queryResult);
    } catch (error) {
        console.error(error);
        response.status(400).json(error);
    }
}

const getFiltered = async (request, response) => {
    try{
        var queryResult = await db.getFiltered('ship', request.query);
        console.log(queryResult);
        response.status(200).json(queryResult);
    } catch (error) {
        console.log(error);
        response.status(400).json(error);
    }
}

const insert = async (request, response) => {
    try {
        var queryResult = await db.shipInsert(request.body);
        console.log(queryResult);
        response.status(200).json(queryResult);
    } catch (error) {
        console.log(error);
        response.status(400).json(error);
    }
}

const deletes = async (request, response) => {
    try {
        var queryResult = await db.deletes('ship', request.query);
        console.log(queryResult);
        response.status(200).json(queryResult);
    } catch (error) {
        console.log(error);
        response.status(400).json(error);
    }
}

const update = async (request, response) => {
    try {
        var queryResult = await db.update('ship', request.body);
        console.log(queryResult);
        response.status(200).json(queryResult);
    } catch (error) {
        console.log(error);
        response.status(400).json(error);
    }
}

const getPrivateAndTaxfree = async (request, response) => {
    try {
        var queryResult = await predefined.exceptPrivateButTaxfreeShips();
        console.log(queryResult);
        response.status(200).json(queryResult);
    } catch (error) {
        console.log(error);
        response.status(400).json(error);
    }
}

const getHasWorker = async (request, response) => {
    try {
        var queryResult = await predefined.havingShipsThatHaveMinOneWorker();
        console.log(queryResult);
        response.status(200).json(queryResult);
    } catch (error) {
        console.log(error);
        response.status(400).json(error);
    }
}

const getShipPowerLengthFilter = async (request, response) => {
    try {
        var queryResult = await predefined.getShipPowerLengthFilter(request.body.motorPower, request.body.shipLength);
        console.log(queryResult);
        response.status(200).json(queryResult);
    } catch (error) {
        console.log(error);
        response.status(400).json(error);
    }
}

const getAvgWorkerAge = async (request, response) => {
    try {
        var queryResult = await predefined.getAvgWorkerAge(request.body.shipType);
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
    update,
    getPrivateAndTaxfree,
    getHasWorker,
    getShipPowerLengthFilter,
    getAvgWorkerAge
}