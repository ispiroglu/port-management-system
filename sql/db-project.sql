drop table if exists ship
CREATE TABLE ship (
  shipId numeric(2) not null,
  shipType varchar(15) not null,
  shipName varchar(15),
  licensePlate varchar(10),
  shipLength numeric(2) not null,
  motorPower numeric(2) not null,
  taxRate numeric(2,1) not null,
  primary key(shipId)
);
drop table shipowner
CREATE TABLE shipOwner(
  citizenId numeric(11) not null,
  fname varchar(15) not null,
  lname varchar(15) not null,
  company varchar(15),
  age int, 
  primary key (citizenId)
);

CREATE TABLE employee(
 citizenId numeric(11) not null,
 employeeId numeric(5) not null,
 fname varchar(15) not null,
 lname varchar(15) not null,
 employeePosition varchar(25) not null,
 primary key (employeeId)
);
drop table employee

CREATE TABLE ownership(
	shipId numeric(2) not null,
	citizenId numeric(11) not null,
	licensedAt date not null,
	licensedBy numeric(5) not null,
	--lisansı verenin employeeIdsi licensedBy olacak
	primary key (shipId,citizenId),
	foreign key (licensedBy) references employee(employeeId)
);

CREATE TABLE ship_member(
citizenId numeric(11) not null,
fname varchar(15) not null,
lname varchar(15) not null,
age int not null,
has_License boolean not null,
primary key (citizenId)
);

CREATE TABLE crew(
citizenId numeric(11) not null,
shipId numeric(2) not null,
primary key (shipId,citizenId)
);

select * from ship
select * from ship_owner
select * from employee
select * from ownership
select * from ship_member
select * from crew