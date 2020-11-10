

To get the server connected to a mongodb database you need to create a database at https://www.mongodb.com/cloud/atlas

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

Now create a .env file in the server directory and define the following two variables

![Alt text](./readme-photos/enviornment.png)

The TOKEN_SECRET is used to hash passwords and the DB_CONNECT is used in the index.js to connect to your database

Now enter npm run start to start up the server and you should be able to write to your database.
