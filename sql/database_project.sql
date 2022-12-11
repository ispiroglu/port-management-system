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
  company varchar(40),
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

CREATE TABLE owner_ship(
	shipId numeric(2) not null,
	citizenId numeric(11) not null,
	licensedAt date not null,
	licensedBy numeric(5) not null,
	--lisansı verenin employeeIdsi licensedBy olacak
	primary key (shipId,citizenId),
	foreign key (licensedBy) references employee(employeeId)
);

--------------------------------
--droplanacak
CREATE TABLE ship_member(
citizenId numeric(11) not null,
fname varchar(15) not null,
lname varchar(15) not null,
age int not null,
--has_License boolean not null,
primary key (citizenId)
);
--------------------------------------

CREATE TABLE crew(
citizenId numeric(11) not null,
shipId numeric(2) not null,
has_License boolean not null,
primary key (shipId,citizenId)
);

select * from ship
select * from ship_owner
select * from employee
select * from owner_ship
--select * from ship_member
select * from crew

INSERT INTO ship VALUES (1, 'merchant', 'Silversea', 'KJ5678',8,15,10);
INSERT INTO ship VALUES (2, 'merchant', 'Seabourn', 'TK9824',8,18,15);
INSERT INTO ship VALUES (3, 'private', 'Viking Ocean', 'SJ2308',4,6,1);
INSERT INTO ship VALUES (4, 'merchant', 'Windstar', 'AB5296',14,15,10);
INSERT INTO ship VALUES (5, 'private', 'Amadeus', 'DN28914',4,8,1);
INSERT INTO ship VALUES (6, 'private', 'Hurtigruten', 'MR0043',5,10,4);
INSERT INTO ship VALUES (7, 'merchant', 'Titanic', 'PR2390',10,12,7);
INSERT INTO ship VALUES (8, 'private', 'Scenic', 'QR5479',8,10,4);
INSERT INTO ship VALUES (9, 'private', 'Paul Gauguin', 'MG5994',7,12,7);
INSERT INTO ship VALUES (10, 'merchant', 'Oceania', 'LY6748',12,15,10);

INSERT INTO employee VALUES (38484435414, 10000, 'Eric', 'Barton','supervisor');
INSERT INTO employee VALUES (40358609500, 10001, 'Nicole', 'Griffin','financial advisor');
INSERT INTO employee VALUES (42343612106, 10002, 'Kristin', 'Doyle','public servant');
INSERT INTO employee VALUES (13291589772, 10003, 'Arthur', 'Hernandez','secretary');
INSERT INTO employee VALUES (28467447800, 10004, 'John', 'Mccormick','public servant');
INSERT INTO employee VALUES (21994752188, 10005, 'Cristina', 'Evans','secretary');
INSERT INTO employee VALUES (75873603290, 10006, 'Rebecca', 'Lewis','public servant');
INSERT INTO employee VALUES (97112906016, 10007, 'Michael', 'Reynolds','public servant');
INSERT INTO employee VALUES (30887826776, 10008, 'John', 'Williams','security officer');
INSERT INTO employee VALUES (98745849442, 10009, 'Sarah', 'Lang','assistant manager');


-- 8-9, 6mden uzun private tekneler ve birer tane belgesi olan murettebata sahipler.
-- 1-2-4-7-10 merchant tekneler onlarin da en az bir tane murettebatı var.
INSERT INTO crew VALUES (93941898898, 1,TRUE);
INSERT INTO crew VALUES (59471527684, 2,TRUE);
INSERT INTO crew VALUES (63524385602, 4,TRUE);
INSERT INTO crew VALUES (12538759268, 4,FALSE);
INSERT INTO crew VALUES (68290710092, 7,TRUE);
INSERT INTO crew VALUES (84124748222, 10,FALSE);
INSERT INTO crew VALUES (39970407076, 10,TRUE);
INSERT INTO crew VALUES (38415791626, 1,FALSE);
INSERT INTO crew VALUES (12657239498, 8,TRUE);
INSERT INTO crew VALUES (97381976864, 9,TRUE);



INSERT INTO ship_owner VALUES (37683052026,  'Valerie', 'Thompson','Marketing Harmony',43);
INSERT INTO ship_owner VALUES (86439117908,  'Jason', 'Jackson','InStyle',28);
INSERT INTO ship_owner VALUES (64158485102,  'Christopher', 'Stewart','Agency Trivia',19);
INSERT INTO ship_owner VALUES (60665993048,  'Christina', 'Gibson','Pentagon Marine',58);
INSERT INTO ship_owner VALUES (69121788372,  'Adam', 'Perez','Stalion Logistics',37);
INSERT INTO ship_owner VALUES (17468489018,  'Joseph', 'Davis','Engineering FX',34);
INSERT INTO ship_owner VALUES (26361299266,  'Lauren', 'Prince','NewEra Advertising',62);
INSERT INTO ship_owner VALUES (44790676700,  'Miranda', 'Taylor','Terra Trade',44);
INSERT INTO ship_owner VALUES (17260834450,  'Melissa', 'Hart','Lantern Transportation',53);
INSERT INTO ship_owner VALUES (28544257490,  'Randall', 'Hampton','InnerCity Communication',22);


--sadece public servant (devlet memuru) olan calisanlar tarafından lisans alabilirler
--citizenID uzerinden ship ownerlarla baglı
-- lisenced by uzerinden employeelerle baglı
--ay gun yıl 
INSERT INTO owner_ship VALUES (1,37683052026,'07-01-2022',10002);
INSERT INTO owner_ship VALUES (2,64158485102,'08-01-2022',10004);
INSERT INTO owner_ship VALUES (3,69121788372,'09-01-2022',10007);
INSERT INTO owner_ship VALUES (4,26361299266,'03-10-2022',10002);
INSERT INTO owner_ship VALUES (5,17260834450,'05-15-2022',10006);
INSERT INTO owner_ship VALUES (6,86439117908,'07-09-2022',10004);
INSERT INTO owner_ship VALUES (7,60665993048,'10-16-2022',10006);
INSERT INTO owner_ship VALUES (8,17468489018,'11-04-2022',10006);
INSERT INTO owner_ship VALUES (9,44790676700,'12-09-2022',10007);
INSERT INTO owner_ship VALUES (10,28544257490,'12-21-2022',10004);
