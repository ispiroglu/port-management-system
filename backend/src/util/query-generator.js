const generator = require('sql-query-generator');
generator.use('postgres');

function selectWhere(table, params) {
    return generator.select(table, '*').where(params).text;
}

function insert(table, params) {
    return generator.insert(table, params).text;
}

function deletes(table, params) {
    return generator.deletes(table).where(params).text;
}

function update(table, params) {
    return generator.update(table, params.new).where(params.target).text;
}

function formatQuery(query, params) {
    for(let i = 0; i < Object.values(params).length; i++) {
        let delim = '$' + (i + 1);
        query = query.split(delim).join(Object.values(params)[i]);
    }
    return query
}

module.exports = {
    selectWhere,
    insert,
    deletes,
    update,
    formatQuery
}