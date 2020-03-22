## Crud Operations

Please download & install Postman to test the api 
https://www.postman.com/

Install the dependencies by typing the following command 

npm i --save

I have configured babel as well to make sure we can use import statements which are a type of es6 module.

To start the application just type the following command

npm start

Crud stands for Create Read Update and Delete. These operations are done to our database where our data is being saved 

Initially server file is configured with express and mongoose connection 

then we create 3 folders 

1) Model
    This is where we design schema for our mongo db database 

2) Routes
    In this folder we will define Routes from where we can do all the operations. This is basically URl, with appropriate operation(get, put, post and delete).

    Post - Can be used to create a new entry in the db.(Create)
    Get - Can be used to retrive something from database (Read)
    Put - is used to update an entry in the db(Update)
    Delete - is used to delete an entry in the database.(Delete)