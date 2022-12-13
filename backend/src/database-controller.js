const client = require('./pool').pool;

const getShips = (req, res) => {
    console.log('Query: select * from ship');
    try {
        client.query('SELECT * FROM ship', (error, results) => {
            if (error) {  
              throw error;
            }
            response.status(200).json(results.rows);
        })
    } catch (exception) {
        console.log('An exception occured: ');
        console.log(exception);
    }
}

module.exports = {
    getShips
}