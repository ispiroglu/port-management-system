require('dotenv').config({ path: '../sql/credentials.env' });
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors({
    origin: '*'
}));

app.use(bodyParser.json());

const crew = require('./src/controllers/crew-controller');
const employee = require('./src/controllers/employee-controller');
const member = require('./src/controllers/member-controller');
const owner= require('./src/controllers/owner-controller');
const ownership= require('./src/controllers/ownership-controller');
const ship = require('./src/controllers/ship-controller');

app.get('/crew/getAll', crew.getAll);
app.get('/crew/getFiltered', crew.getFiltered);

app.get('/employee/getAll', employee.getAll);
app.get('/employee/getFiltered', employee.getFiltered);

app.get('/member/getAll', member.getAll);
app.get('/member/getFiltered', member.getFiltered);

app.get('/owner/getAll', owner.getAll);
app.get('/owner/getFiltered', owner.getFiltered);

app.get('/ownership/getAll', ownership.getAll);
app.get('/ownership/getFiltered', ownership.getFiltered);

app.get('/ship/getAll', ship.getAll);
app.get('/ship/getFiltered', ship.getFiltered);
app.post('/ship/insert', ship.insert);
app.delete('/ship/delete', ship.deletes);
app.put('/ship/update', ship.update);


app.listen(port, () => {
    console.log('Listening at port ' + port);
});