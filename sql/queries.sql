--database sorgular
select * from ship_owner;
select * from employee;
select * from owner_ship;
select * from ship_worker;
select * from crew;
select * from ship;

--4. Arayüzden en az birer tane insert, update ve delete işlemi gerçekleştirilebilmelidir.
--yasi cok yuksek olan calisanlar guncellendi
UPDATE ship_worker SET age = 45 WHERE citizenid=28968473514;
UPDATE ship_worker SET age = 39 WHERE citizenid=17168473679;
UPDATE ship_worker SET age = 51 WHERE citizenid=45049542164;
UPDATE ship_worker SET age = 28 WHERE citizenid=3964312266;
--DELETE ship_worker WHERE citizenid='91653654058' 
--INSERT INTO ship_worker (citizenId, fname, lname, age, has_license) values ('91653654058', 'Lurline', 'Harker', 57, false);

--6. Arayüzden çağrılan sorgulardan en az biri “view” olarak tanımlanmış olmalıdır.
create view private_ship_owners
as 
select ship_owner.fname, ship_owner.lname
from ship_owner,ship, owner_ship
where ship.shiptype='private' and ship_owner.citizenid=owner_ship.citizenid and ship.shipid=owner_ship.shipId

select * 
from private_ship_owners

--8 Union Except Intersect
--50 yasindan buyuk VE ticari gemide calisan personellerin isim soyisim bilgileri
select fname, lname
from ship_worker
where age > 50
INTERSECT 
select fname, lname
from crew, ship_worker, ship
where crew.citizenid =ship_worker.citizenid and crew.shipid = ship.shipid and ship.shiptype='merchant'

-- 30 yasindan genc olan YA DA ozel gemisi olan kisilerin isim soyisim bilgileri
select fname, lname
from ship_owner
where age<30
UNION
select fname, lname
from ship_owner, owner_ship, ship
where ship_owner.citizenid=owner_ship.citizenid and owner_ship.shipid=ship.shipid and ship.shiptype='private'

--Ozel olan ancak vergiye tabi olmayan gemilerin isimleri
--tek tablo uzerinde yaptim guncellenebilir (?)
select shipname
from ship
where ship.shiptype='private'
EXCEPT
select shipname
from ship
where ship.taxrate != 1.0

--9. Sorgularınızın en az biri aggregate fonksiyonlar içermeli, having ifadesi kullanılmalıdır.
--liman baskanlıgında lisans verebilecek calisan sayisi
select count(*)
from employee
where position='public servant'

--en az 2 tane murettebatı olan gemiler
select crew.shipid
from ship,crew,ship_worker
where ship_worker.citizenid = crew.citizenid and crew.shipid=ship.shipid 
group by crew.shipid
having count(*)>1

--10. Arayüzden girilen değerleri parametre olarak alıp ekrana sonuç döndüren 3 farklı SQL
--fonksiyonu tanımlamış olmalısınız. Bu fonksiyonların en az birinde “record” ve “cursor”
--tanımı-kullanımı olmalıdır.

--Girilen turdeki gemide (merchant or private) calisan murettabatlarin ortalama yasini bulan fonksiyon
CREATE OR REPLACE FUNCTION avgAge(typeofship varchar) RETURNS integer as' 
DECLARE 
	averageAge integer;
BEGIN
	SELECT AVG(ship_worker.age) INTO averageAge
	FROM ship_worker,crew,ship
	WHERE ship_worker.citizenid = crew.citizenid and crew.shipid=ship.shipid and ship.shiptype=typeofship;
	
	RETURN averageAge;
END;
'LANGUAGE plpgsql;

select avgAge('private')
--drop function avgAge(varchar)

--motor gucu ve uzunlugu girilen degerlerin uzerinde olan gemi adedini donduren fonksiyon
CREATE OR REPLACE FUNCTION numOfShipsEnteredSpesifications(powerOfMotor numeric,lengthOfShip numeric) RETURNS integer as' 
DECLARE 
	num integer;
BEGIN
	SELECT count(*) INTO num
	FROM ship
	WHERE ship.motorpower>powerOfMotor and ship.shiplength>lengthOfShip;
	RETURN num;
END;
'LANGUAGE plpgsql;

select numOfShipsEnteredSpesifications(10,8)
--drop fonk numOfShipsEnteredSpesifications(numeric,numeric)

--Bu fonksiyonların en az birinde “record” ve “cursor”
--tanımı-kullanımı olmalıdır. (EKLENECEK)

--11. 2 adet trigger tanımlamalı ve arayüzden girilecek değerlerle tetiklemelisiniz. Trigger’ın
--çalıştığına dair arayüze bilgilendirme mesajı döndürülmelidir.

--liman baskanliginda sadece mesai saatlerinde lisans verilmesine izin veren trigger
CREATE TRIGGER licensingTrigger
BEFORE INSERT or UPDATE
on owner_ship
FOR EACH ROW EXECUTE PROCEDURE licensingTriggerFunc();

CREATE FUNCTION licensingTriggerFunc()
RETURNS TRIGGER AS $$
BEGIN
IF ( to_char(now(), 'DY') in ('SAT', 'SUN') OR to_char(now(), 'HH24') not between '09' and '17') THEN 
RAISE EXCEPTION 'You can give license only at work days/hours' ;
RETURN null; 
ELSE
	RETURN new;
END IF;
END;
$$ LANGUAGE 'plpgsql';

--1 trigger daha eklenecek
