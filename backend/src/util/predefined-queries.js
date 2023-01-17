const INTERSECT_OLD_MERCHANT_WORKERS = `select fname, lname, age
from ship_worker
where age > 50
INTERSECT 
select fname, lname, age
from crew, ship_worker, ship
where crew.citizenid =ship_worker.citizenid and crew.shipid = ship.shipid and ship.shiptype='merchant'
`;

const UNION_PRIVATE_SHIP_OWNERS_OR_YOUNG_SHIP_OWNERS = `
select citizenid, fname, lname
from ship_owner
where age<30
UNION
select ship_owner.citizenid, fname, lname
from ship_owner, owner_ship, ship
where ship_owner.citizenid=owner_ship.citizenid and owner_ship.shipid=ship.shipid and ship.shiptype='private'
`;

const EXCEPT_PRIVATE_BUT_TAXFREE_SHIPS = `
select shipid, shipname, shiptype
from ship
where ship.shiptype='private'
EXCEPT
select shipid, shipname, shiptype
from ship
where ship.taxrate != 0.0
`;

const HAVING_SHIPS_THAT_HAVE_MIN_ONE_WORKER = `
select crew.shipid
from ship,crew,ship_worker
where ship_worker.citizenid = crew.citizenid and crew.shipid=ship.shipid 
group by crew.shipid
having count(*)>1
`;

const AGGR_PUBLIC_SERVANT_COUNT = `
select count(*)
from employee
where position='public servant'
`;

const VIEW_PRIVATE_SHIP_OWNERS = `
select *
from private_ship_owners
`;

module.exports = {
  INTERSECT_OLD_MERCHANT_WORKERS,
  UNION_PRIVATE_SHIP_OWNERS_OR_YOUNG_SHIP_OWNERS,
  EXCEPT_PRIVATE_BUT_TAXFREE_SHIPS,
  HAVING_SHIPS_THAT_HAVE_MIN_ONE_WORKER,
  AGGR_PUBLIC_SERVANT_COUNT,
  VIEW_PRIVATE_SHIP_OWNERS,
};
