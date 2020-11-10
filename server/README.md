
To get this server working you need to get a mongodb database and obtain the url key associated with it.

To use this key you will need to create a .env file with the following two variables;

![Alt text](./readme-photos/enviornment.png)

The TOKEN_SECRET is the salt used to hash passwords and is just a random string and the DB_CONNECT is used in the index.js to connect to your database.

Go to https://www.mongodb.com/cloud/atlas and create your database.

Once you have the free version created connect to database by adding your current ip address to the database access:

![Alt text](./readme-photos/DatabaseAccess.png)

Now go to connect to the database under clusers

![Alt text](./readme-photos/Connect.png)

Now select connect to your app

![Alt text](./readme-photos/ConnectToApp.png)

In the url provided replace the username and password with your username and password

![Alt text](./readme-photos/password.png)

You can use the name test for to replace <dbname> in 
  
![Alt text](./readme-photos/name.png)

now add this url to the DB_CONNECT variable in the .env file you have created.

The server should run when you type npm run start.
