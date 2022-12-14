const generator = require('sql-query-generator');
generator.use('postgres');

function selectWhere(table, params) {
    return generator.select(table, '*').where(params).text;
}

module.exports = {
    selectWhere
}