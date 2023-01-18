# Liman Başkanlığı Bilgi Sistemi:

Bu projede kullanılan teknolojiler aşağıdaki gibidir:
* Node
* Angular
* Postgresql

Projeyi ayağa kaldırabilmek için Node - NPM, Nodemon ve Angular uygulamalarının kurulduğuna emin olunuz.

Projenin üzerinde çalışacağı Database şemasının kurulabilmesi için ```sql/init_database.sql``` database üzerinde çalıştırmanız gerekmektedir. 

Sonrasında projeyi ayağa kaldırabilmek adına aşağıdaki komutları uygulayabilirsiniz. 

# Backend
backend klasörü içerisinde

```npm install``` 
komutunu çalıştırdığınız durumda gerekli paketleri kendisi kuracaktır.

Bu noktada backend uygulamasının çalışabilmesi için ```sql/credentials.env``` dosyasını oluşturmanız gerekmektedir.

Bu dosyanın formatı varsayılan ayarlarla oluşturulmuş postgresql veritabanı için aşağıdaki gibi olmalıdır.

```
DB_USER="DatabaseUser"
DB_HOST="localhost"
DB_PORT="5432"
DB_NAME="DatabseName"
DB_PASSWORD="DatabsePassword"
```

bu ayarları yaptıktan sonra programı çalıştırabilmek için tek yapmanız gereken Backend klasörü içerisinde ```
npm start``` komutunu çalıştırmak olacaktır.

# Frontend

Frontend klasörü içerisinde gerekli paketlerin kurulabilmesi için ```npm install``` komutunun çalıştırılması gerekmektedir.

Bu komut çalıştırıldıktan sonra ```ng serve``` komutu ile websitemiz ```localhost:4200``` adresinde ayağa kalkacaktır. 
