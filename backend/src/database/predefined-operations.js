const client = require('./pool').pool;
const predefinedQuery = require('../util/predefined-queries');

async function intersectOldMerchantWorkes() {
    let query = predefinedQuery.INTERSECT_OLD_MERCHANT_WORKERS;
    var response = await client.query(query);
    return {
        query: query,
        rows: response.rows,
        columns: response.fields
    }
}

async function unionPrivateShipOwnersOrYoungShipOwners() {
    let query = predefinedQuery.UNION_PRIVATE_SHIP_OWNERS_OR_YOUNG_SHIP_OWNERS;
    var response = await client.query(query);
    return {
        query: query,
        rows: response.rows,
        columns: response.fields
    }
}

async function exceptPrivateButTaxfreeShips() {
    let query = predefinedQuery.EXCEPT_PRIVATE_BUT_TAXFREE_SHIPS;
    var response = await client.query(query);
    return {
        query: query,
        rows: response.rows,
        columns: response.fields
    }
}

async function havingShipsThatHaveMinOneWorker() {
    let query = predefinedQuery.HAVING_SHIPS_THAT_HAVE_MIN_ONE_WORKER;
    var response = await client.query(query);
    return {
        query: query,
        rows: response.rows,
        columns: response.fields
    }
}

async function servantCount() {
    let query = predefinedQuery.AGGR_PUBLIC_SERVANT_COUNT;
    var response = await client.query(query);
    return {
        query: query,
        rows: response.rows,
        columns: response.fields
    }
}

async function getPrivateShipOwners() {
    let query = predefinedQuery.VIEW_PRIVATE_SHIP_OWNERS;
    var response = await client.query(query);
    return {
        query: query,
        rows: response.rows,
        columns: response.fields
    }
}

module.exports = {
    intersectOldMerchantWorkes,
    unionPrivateShipOwnersOrYoungShipOwners,
    exceptPrivateButTaxfreeShips,
    havingShipsThatHaveMinOneWorker,
    servantCount,
    getPrivateShipOwners
}