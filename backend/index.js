require('dotenv').config({ path: '../sql/credentials.env' });
const express = require('express');
const app = express();
const port = 3000;
const ship = require('./src/controllers/ship-controller');
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.get('/ship/getAll', ship.getAll);
app.get('/ship/getFiltered', ship.getFiltered);

app.listen(port, () => {
    console.log('Listening at port ' + port);
});