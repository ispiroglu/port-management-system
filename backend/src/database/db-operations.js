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
    for(var i = 0; i < Object.values(params).length; i++) {
        var delim = '$' + (i + 1);
        query = query.split(delim).join(Object.values(params)[i]);
    }
    console.log(query);
    console.log(response.rows);
    return {
        query: query,
        rows: response.rows
    }
}

module.exports = {
    getAll,
    getFiltered
}