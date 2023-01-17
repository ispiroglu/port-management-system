const client = require('./pool').pool;
const predefinedQuery = require('../util/predefined-queries');

async function intersectOldMerchantWorkes() {
    let query = predefinedQuery.INTERSECT_OLD_MERCHANT_WORKERS;
    var response = await client.query(query);
    let columns = response.fields
    const columnNames = columns.map(columns => columns.name);
    return {
        query: query,
        rows: response.rows,
        columns: columnNames
    }
}

async function unionPrivateShipOwnersOrYoungShipOwners() {
    let query = predefinedQuery.UNION_PRIVATE_SHIP_OWNERS_OR_YOUNG_SHIP_OWNERS;
    var response = await client.query(query);
    let columns = response.fields
    const columnNames = columns.map(columns => columns.name);
    return {
        query: query,
        rows: response.rows,
        columns: columnNames
    }
}

async function exceptPrivateButTaxfreeShips() {
    let query = predefinedQuery.EXCEPT_PRIVATE_BUT_TAXFREE_SHIPS;
    var response = await client.query(query);
    let columns = response.fields
    const columnNames = columns.map(columns => columns.name);
    return {
        query: query,
        rows: response.rows,
        columns: columnNames
    }
}

async function havingShipsThatHaveMinOneWorker() {
    let query = predefinedQuery.HAVING_SHIPS_THAT_HAVE_MIN_ONE_WORKER;
    var response = await client.query(query);
    let columns = response.fields
    const columnNames = columns.map(columns => columns.name);
    return {
        query: query,
        rows: response.rows,
        columns: columnNames
    }
}

async function servantCount() {
    let query = predefinedQuery.AGGR_PUBLIC_SERVANT_COUNT;
    var response = await client.query(query);
    let columns = response.fields
    const columnNames = columns.map(columns => columns.name);
    return {
        query: query,
        rows: response.rows,
        columns: columnNames
    }
}

async function getPrivateShipOwners() {
    let query = predefinedQuery.VIEW_PRIVATE_SHIP_OWNERS;
    var response = await client.query(query);
    let columns = response.fields
    const columnNames = columns.map(columns => columns.name);
    return {
        query: query,
        rows: response.rows,
        columns: columnNames
    }
}

async function getAvgWorkerAge(shipType) {
    let query = `select avg_age('${shipType}')`;
    var response = await client.query(query);
    return {
        query: query,
        result: response.rows[0].avg_age
    }
}

async function getShipPowerLengthFilter(power, length) {
    let query = `select num_of_filtered_ships_by_power_and_length(${power},${length})`;
    var response = await client.query(query);
    return {
        query: query,
        result: response.rows[0].num_of_filtered_ships_by_power_and_length
    }
}

module.exports = {
    intersectOldMerchantWorkes,
    unionPrivateShipOwnersOrYoungShipOwners,
    exceptPrivateButTaxfreeShips,
    havingShipsThatHaveMinOneWorker,
    servantCount,
    getPrivateShipOwners,
    getAvgWorkerAge,
    getShipPowerLengthFilter
}