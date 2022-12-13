drop sequence if exists shipIdSeq;
CREATE SEQUENCE shipIdSeq as integer;

drop sequence if exists shipWorkerIdSeq;
CREATE SEQUENCE shipWorkerIdSeq as integer;

drop table if exists ship cascade ;
CREATE TABLE ship (
  shipId numeric,
  shipType varchar(15) not null,
  shipName varchar(15),
  licensePlate varchar(10),
  shipLength numeric(2) not null,
  motorPower numeric(2) not null,
  taxRate numeric(2,1) not null,
  primary key(shipId)
);
drop table if exists ship_owner cascade ;
CREATE TABLE ship_owner(
  citizenId numeric(11) not null,
  fname varchar(15) not null,
  lname varchar(15) not null,
  company varchar(40),
  age int CHECK ( age > 18 ),
  primary key (citizenId)
);
drop table if exists employee cascade;
CREATE TABLE employee(
 citizenId numeric(11) not null,
 employeeId numeric not null,
 fname varchar(15) not null,
 lname varchar(15) not null,
 position varchar(25) not null,
 primary key (employeeId)
);

drop table if exists owner_ship cascade ;
CREATE TABLE owner_ship(
	shipId numeric not null,
	citizenId numeric(11) not null,
	licensedAt date not null,
	licensedBy numeric not null,
	primary key (shipId, citizenId),
	foreign key (licensedBy) references employee(employeeId)
);

drop table if exists ship_worker cascade ;
CREATE TABLE ship_worker
(
    citizenId numeric(11) primary key ,
    fname varchar(15) not null,
    lname varchar(15) not null,
    age int not null CHECK ( age > 18 ),
    has_license boolean not null
);

drop table if exists crew;
CREATE TABLE crew(
    id int primary key,
    citizenId numeric(11) not null,
    shipId numeric not null,
    foreign key (citizenId) references ship_worker (citizenId),
    foreign key (shipId) references ship(shipId)
);

select * from ship;
select * from ship_owner;
select * from employee;
select * from owner_ship;
select * from ship_worker;
select * from crew;


INSERT INTO ship VALUES (nextval('shipIdSeq'), 'merchant', 'Silversea', 'KJ5678',8,15,1.1);
INSERT INTO ship VALUES (nextval('shipIdSeq'), 'merchant', 'Seabourn', 'TK9824',8,18,5.0);
INSERT INTO ship VALUES (nextval('shipIdSeq'), 'private', 'Viking Ocean', 'SJ2308',4,6,1.0);
INSERT INTO ship VALUES (nextval('shipIdSeq'), 'merchant', 'Windstar', 'AB5296',14,15,1.0);
INSERT INTO ship VALUES (nextval('shipIdSeq'), 'private', 'Amadeus', 'DN28914',4,8,1.0);
INSERT INTO ship VALUES (nextval('shipIdSeq'), 'private', 'Hurtigruten', 'MR0043',5,10,4.0);
INSERT INTO ship VALUES (nextval('shipIdSeq'), 'merchant', 'Titanic', 'PR2390',10,12,7.0);
INSERT INTO ship VALUES (nextval('shipIdSeq'), 'private', 'Scenic', 'QR5479',8,10,4.0);
INSERT INTO ship VALUES (nextval('shipIdSeq'), 'private', 'Paul Gauguin', 'MG5994',7,12,7.0);
INSERT INTO ship VALUES (nextval('shipIdSeq'), 'merchant', 'Oceania', 'LY6748',12,15,1.0);

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

insert into ship_worker (citizenId, fname, lname, age, has_license) values ('91653654058', 'Lurline', 'Harker', 57, false);
insert into ship_worker (citizenId, fname, lname, age, has_license) values ('28968473514', 'Parrnell', 'Denver', 89, false);
insert into ship_worker (citizenId, fname, lname, age, has_license) values ('27478030959', 'Zacharie', 'Hugnot', 58, true);
insert into ship_worker (citizenId, fname, lname, age, has_license) values ('17168473679', 'Damara', 'Hadlow', 72, false);
insert into ship_worker (citizenId, fname, lname, age, has_license) values ('45049542164', 'Merrie', 'Archell', 83, false);
insert into ship_worker (citizenId, fname, lname, age, has_license) values ('58999065294', 'Braden', 'Walcar', 48, false);
insert into ship_worker (citizenId, fname, lname, age, has_license) values ('66322126673', 'Fannie', 'Skin', 28, true);
insert into ship_worker (citizenId, fname, lname, age, has_license) values ('15421050898', 'Bearnard', 'Keppel', 21, true);
insert into ship_worker (citizenId, fname, lname, age, has_license) values ('86627201433', 'Gwenny', 'Ranahan', 60, false);
insert into ship_worker (citizenId, fname, lname, age, has_license) values ('03964312266', 'Ambrosi', 'Jorczyk', 99, true);

INSERT INTO crew VALUES (nextval('shipWorkerIdSeq'), 91653654058, 1);
INSERT INTO crew VALUES (nextval('shipWorkerIdSeq'), 28968473514, 2);
INSERT INTO crew VALUES (nextval('shipWorkerIdSeq'), 27478030959, 4);
INSERT INTO crew VALUES (nextval('shipWorkerIdSeq'), 17168473679, 4);
INSERT INTO crew VALUES (nextval('shipWorkerIdSeq'), 45049542164, 7);
INSERT INTO crew VALUES (nextval('shipWorkerIdSeq'), 58999065294, 10);
INSERT INTO crew VALUES (nextval('shipWorkerIdSeq'), 66322126673, 10);
INSERT INTO crew VALUES (nextval('shipWorkerIdSeq'), 15421050898, 1);
INSERT INTO crew VALUES (nextval('shipWorkerIdSeq'), 86627201433, 8);
INSERT INTO crew VALUES (nextval('shipWorkerIdSeq'), 03964312266, 9);

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
