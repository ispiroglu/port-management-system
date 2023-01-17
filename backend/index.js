require("dotenv").config({ path: "../sql/credentials.env" });
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

app.use(bodyParser.json());

const crew = require("./src/controllers/crew-controller");
const employee = require("./src/controllers/employee-controller");
const member = require("./src/controllers/member-controller");
const owner = require("./src/controllers/owner-controller");
const ownership = require("./src/controllers/ownership-controller");
const ship = require("./src/controllers/ship-controller");

app.get("/crew/getAll", crew.getAll);
app.get("/crew/getFiltered", crew.getFiltered);
app.post("/crew/insert", crew.insert);
app.delete("/crew/delete", crew.deletes);
app.put("/crew/update", crew.update);

app.get("/employee/getAll", employee.getAll);
app.get("/employee/getFiltered", employee.getFiltered);
app.get("/employee/getServantCount", employee.getServantCount);
app.post("/employee/insert", employee.insert);
app.delete("/employee/delete", employee.deletes);
app.put("/employee/update", employee.update);

app.get("/member/getAll", member.getAll);
app.get("/member/getFiltered", member.getFiltered);
app.get("/member/getOldAndMerchant", member.getOldAndMerchant);
app.get("/member/getWorkerLicenseFilter", member.getWorkerLicenseFilter);
app.post("/member/insert", member.insert);
app.delete("/member/delete", member.deletes);
app.put("/member/update", member.update);

app.get("/owner/getAll", owner.getAll);
app.get("/owner/getFiltered", owner.getFiltered);
app.get("/owner/getYoungOrPrivate", owner.getYoungOrPrivateOwner);
app.get("/owner/getPrivate", owner.getPrivateShipOwners);
app.post("/owner/insert", owner.insert);
app.delete("/owner/delete", owner.deletes);
app.put("/owner/update", owner.update);

app.get("/ownership/getAll", ownership.getAll);
app.get("/ownership/getFiltered", ownership.getFiltered);
app.post("/ownership/insert", ownership.insert);
app.delete("/ownership/delete", ownership.deletes);
app.put("/ownership/update", ownership.update);

app.get("/ship/getAll", ship.getAll);
app.get("/ship/getFiltered", ship.getFiltered);
app.get("/ship/getPrivateTaxfree", ship.getPrivateAndTaxfree);
app.get("/ship/getHasWorker", ship.getHasWorker);
app.get("/ship/getPowerLengthFilter", ship.getShipPowerLengthFilter);
app.get("/ship/getAvgWorkerAge", ship.getAvgWorkerAge);
app.post("/ship/insert", ship.insert);
app.delete("/ship/delete", ship.deletes);
app.put("/ship/update", ship.update);

app.listen(port, () => {
  console.log("Listening at port " + port);
});
