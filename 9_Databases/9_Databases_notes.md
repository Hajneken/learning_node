# Databases 

normalized data: data that does not repeat itself 

JavaScript stores data as objects

SQL table can be stored as objects (array of objects)

```JS
[
    {id: 1, name:"Hynek"},
    {id: 2, name:"Gyros"}
]
```

---
sidenote: installing MySQL on Ubuntu 

1. sudo apt update
2. sudo apt install mysql-server
3. sudo systemctl start mysql.service

last step starts the service 

enter the mysql prompt: 
1. sudo mysql
2. ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
3. exit

[source](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-20-04)

---

nosql := database systems that do not use SQL language and techniques for storing

# MongoDB 

pacakge for dealing with mongodb : [mongoose](https://mongoosejs.com/)