const { response } = require('express');
const db = require('../database/db-operations');
const predefined = require('../database/predefined-operations');

const getAll = async (request, response) => {
    try {
        var queryResult = await db.getAll('ship_owner');
        console.log(queryResult);
        response.status(200).json(queryResult);
    } catch (error) {
        console.error(error);
        response.status(400).json(error);
    }
}

const getFiltered = async (request, response) => {
    try{
        var queryResult = await db.getFiltered('ship_owner', request.query);
        console.log(queryResult);
        response.status(200).json(queryResult);
    } catch (error) {
        console.log(error);
        response.status(400).json(error);
    }
}

const insert = async (request, response) => {
    try {
        var queryResult = await db.insert('ship_owner', request.body);
        console.log(queryResult);
        response.status(200).json(queryResult);
    } catch (error) {
        console.log(error);
        response.status(400).json(error);
    }
}

const deletes = async (request, response) => {
    try {
        var queryResult = await db.deletes('ship_owner', request.query);
        console.log(queryResult);
        response.status(200).json(queryResult);
    } catch (error) {
        console.log(error);
        response.status(400).json(error);
    }
}

const update = async (request, response) => {
    try {
        var queryResult = await db.update('ship_owner', request.body);
        console.log(queryResult);
        response.status(200).json(queryResult);
    } catch (error) {
        console.log(error);
        response.status(400).json(error);
    }
}

const getYoungOrPrivateOwner = async (request, response) => {
    try {
        var queryResult = await predefined.unionPrivateShipOwnersOrYoungShipOwners();
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
    getYoungOrPrivateOwner
}