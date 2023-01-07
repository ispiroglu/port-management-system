const client = require('./pool').pool;
const generator = require('../util/query-generator');

async function getAll(tableName) {
    var query = `SELECT * FROM ${tableName}`;
    var response = await client.query(query);
    return {
        query: query,
        rows: response.rows
    }
}

async function getFiltered(tableName, params) {
    var query = generator.selectWhere(tableName, params);
    var response = await client.query(query, Object.values(params));
    return {
        query: generator.formatQuery(query, params),
        rows: response.rows
    }
}

async function insert(tableName, params) {
    var query = generator.insert(tableName, params);
    var response = await client.query(query, Object.values(params));
    return {
        query: generator.formatQuery(query, params),
        rows: response.rows
    }
}

async function deletes(tableName, params) {
    var query = generator.deletes(tableName, params);
    var response = await client.query(query, Object.values(params));
    return {
        query: generator.formatQuery(query, params),
        row: response.rows
    }
}

async function update(tableName, params) {
    var query = generator.update(tableName, params);
    var response = await client.query(query, [Object.values(params.new), Object.values(params.target)].flat());
    return {
        query: generator.formatQuery(query, [Object.values(params.new), Object.values(params.target)].flat()),
        row: response.rows
    }
}

module.exports = {
    getAll,
    getFiltered,
    insert,
    deletes,
    update
}