# Refera - Fullstack Code Challenge

This project was proposed by the refera group as a challenge. The goal of this challenge is to create a web application to manage maintanence orders from Refera, following the Acceptance criteria. Application frontend needs to have a page to list all orders and the backend contains a simple REST API service and has a connection to a database.

## Contents
- [go to How to run the program?](#how-to-run-the-program)
- [go to How the program work?](#how-the-program-work)
- [go to Server](#server)
- [go to WEB](#web)
- [go to Contact](#contact)

# How to run the program?
  1. The first step is to clone the project somewhere on your machine: `git clone https://github.com/bielpatricio/refera_fullstack_challenge.git`;
  2. For the next step it is necessary to have docker running and preferably open;
  3. Now access the terminal inside the project folder;
  4. Enter the server folder (`cd refera_fullstack_challenge/server`), open the code (`code .`) and copy the .env.example file to a new file .env;
  6. Run the following command: `docker compose up --build && docker compose up` if you want run in docker;
  7. Now that the backend is running, in a net terminal go to the project's initial folder, go to the web folder (`cd web`);
  8. Type the following command to install all dependencies: `npm install`;
  9. Now type the following command: `npm run dev`;
  
  Now front and back is running on your machine.
  To access the application, just go to a browser and access the page: http://localhost:3000/<br>
  If you check the database go to a one database management system and connect the database with the information of .env (user, password, database_name) 

## How the program work?
   - A main page was built that will list some orders. To optimize the loading time, a paging system was implemented in the API, so if the amount of data in the database is very big, it doesn't take to long to load the page, so the program will show every 10 orders. To access the other orders, you need to click on the lower right button and that way you will access the next 10 orders in the database, and to go back to the previous 10 orders just click on the lower left button that will appear on the screen. To order the results by each column it was necessary to change the backend too, because when you sort in the frontend we still don't have access to all data from the database, so when you click to order by column, the backend do this order to return to frontend the right data. So when you click in the column you order not just the 10 data that is showing on the front, but referring to the entire database.
  -  Still on the initial screen we have some functionalities available, one of them is to click on the button `Open new order` that will open a modal to create a new order in the database, all fields are mandatory. In the `select categories` category options that exist in the database will appear, to create more options or delete some, just make an HTTP request referring to the category routes that are listed below, and you will have available to create your order with the new category.
  -  To show more knowledge of reactJS, a route system was created on the front-end, where when you click on one of the orders on the home page, you are redirected to a page where you will have detailed information about the selected order. In addition to the information, the page also has a button in the upper right corner (inside the field) that allows you to delete the order. To return to the initial page, one of the options is to click on the Refera icon in the upper left corner, it will always redirect to the application's initial page.
  
## Server
  The back-end was created in django, a system used by the company Refera. The server runs on port 8000. The backend was created to support the challenge requirements:
  
  1. RESTful API allowing CRUD and list operations on the orders
     - Endpoint to create/retrieve/update/delete order
     - Endpoint to list order
  2. RESTful API allowing CRUD operations on the categories
    - Endpoint to create/retrieve/update/delete category
    - Endpoint to list categories
  3. Database to store data from the following resources
    - Order
    - Category
  4. Suport to Paginantion on frontend
  5. Suport to Order data on frontend
   
  ### Order
   For the order, 5 routes were created:
   
    1. List all the orders in the database, 
      where the page variable can be passed in the params that will pick up the orders according to Pagination
      -> `http://localhost:8000/orders?page=2`, (GET)
    
    2. Get order by id, which will get the details of a specific order -> `http://localhost:8000/orders/12`, (GET)
    
    3. Create order, which will create a new order -> `http://localhost:8000/orders`, (POST)
      3.1 body ->
      
      ```
      
      {
            "id": 18,
            "category_id": 6,
            "name": "Caio Victor",
            "phone": "83995412369",
            "estateAgency": "Desenvolvimento",
            "description": "Desenvolvendo app para o sistema de monitoramento de bugs",
            "company": "Refera",
            "deadline": "2024-02-01T00:00:00Z"
        }
        
        ```
  
    4. Delete order by id, which will delete the order -> `http://localhost:8000/orders/12`, (DELETE)
    
    5. Update order, which will change the specified new order -> `http://localhost:8000/orders`, (PATCH)
      5.1 body ->
      
      ```
      
      {
            "id": 18,
            "category_id": 2,
            "name": "Caio Victor Amaral",
            "phone": "83995412369",
            "estateAgency": "Desenvolvimento",
            "description": "Desenvolvendo app",
            "company": "Refera",
            "deadline": "2024-08-01T00:00:00Z"
        }
        
        ```
        

### Category
   For the category, also 5 routes were created:
   
    1. List all the orders in the database, 
      where the page variable can be passed in the params that will pick up the orders according to Pagination 
      -> `http://localhost:8000/categories?page=2`, (GET)
    
    2. Get category by id, which will get the details of a specific category -> `http://localhost:8000/categories/4`, (GET)
    
    3. Create category, which will create a new category -> `http://localhost:8000/categories`, (POST)
      3.1 body ->
      
      ```
      
      {
            "category": "tecnologia"
        }
        
        ```
  
    4. Delete category by id, which will delete the category -> `http://localhost:8000/categories/12`, (DELETE)
    
    5. Update category, which will change the new specified category -> `http://localhost:8000/categories`, (PATCH)
      5.1 body ->
      
      ```
      
      {
          "category": "Tecnologia"
      }
        
        ```    


## WEB
  The front-end stop was made in reactJS and styled-components, as mentioned before there are two routes to '/' to the home page where the orders are listed and the create order is done, and the route '/:orderId', where orderId represents the Id of the selected order, this page will show the details of the order. The layout was created based on the challenge specification diagram. The material-ui library was used for the icons. All requests are made in the OrdersContext file, in this context the request information is saved and made available to all other files and pages. The web page run on port 3000.
  
 ## Improvements
 
 ### Authentication
  Could use the Django administration to controler the access and permissions od the users. So, when access the application, you need log in to see how access you have inside the app. 
 ### Structure the in database account for Real estate agency, Company and Contact registration data

  #### Entity Relationship diagram

<img src="https://user-images.githubusercontent.com/32223762/209262057-0511e31e-44d1-45f6-a7a5-42464dabeeda.png" width="600" title="Dbeaver">

  Database Changes:
  - New Tables: EstateAgency, Company and Contact
  - Removing the columns "estateAgency", "name", "phone" and "company" in Orders table.
  - Creating new columns "category_id", "company_id", "estate_agency_id" and "contact_id" in Orders table as foreign keys.
 

#### For each new etity
  - Create a new app folder where we have our models, views, serializers, of the company (This need be done for Real estate agency, Company and Contact registration data).
  - Run `$ python manage.py makemigration` to create the migrations, and `$  python manage.py migrate` to execute in the current database.
 **PS:** Before execute the changes create a SQL script to convert the previous Orders columns, to the new entities without losing any previous information.  

 
### Below are some screenshots of the running application.
  
 <!-- <p align="center" style="display: flex; align-items: center; justify-content: center;"> --> 
 <img src="https://user-images.githubusercontent.com/32223762/209338489-7465648f-7c6b-4fa5-b6a7-78f0e81ce097.png" width="700" title="Postman">
  [Initial page order by id desc, each line of the table is a link to the Details page of the order that is in the line]
<br>
  <br>
 <!-- <p align="center" style="display: flex; align-items: center; justify-content: center;"> --> 
  <img src="https://user-images.githubusercontent.com/32223762/209338539-3a58ca8d-7203-4bcc-8b8a-dbd8b5ae6e3a.png" width="700" title="Postman">
  [Initial page order by name asc, each line of the table leads to the Details page of the order that is in the line]
  <br>
  <br>
<!-- <p align="center" style="display: flex; align-items: center; justify-content: center;"> -->
  <img src="https://user-images.githubusercontent.com/32223762/209338194-3b11cc02-534a-4e2b-9975-62ab145e96ca.png" width="700" title="Postman">
 [Modal to create orders]
<br>
  <br>
<!-- <p align="center" style="display: flex; align-items: center; justify-content: center;"> -->
  <img src="https://user-images.githubusercontent.com/32223762/209338650-54bb17f5-72b6-4e67-b22e-0fc6ba8a956c.png" width="700" title="Postman">
[Detail page of the selected order]

<br>
  <br>

### Here are some prints of Postman and Dbeaver:

<!-- <p align="center" style="display: flex; align-items: center; justify-content: center;"> -->
  <img src="https://user-images.githubusercontent.com/32223762/209236553-0a0924bf-db93-4dd6-a42c-e2db149a65f8.png" width="600" title="Dbeaver">


<!-- <p align="center" style="display: flex; align-items: center; justify-content: center;"> -->
  <img src="https://user-images.githubusercontent.com/32223762/209234082-ba1e11b3-0ac0-44d1-8726-2c14d9269426.png" width="800" title="Dbeaver">
  
  
<!-- <p align="center" style="display: flex; align-items: center; justify-content: center;"> -->
  <img src="https://user-images.githubusercontent.com/32223762/209234082-ba1e11b3-0ac0-44d1-8726-2c14d9269426.png" width="700" title="Dbeaver">
  
  
<!-- <p align="center" style="display: flex; align-items: center; justify-content: center;"> -->
  <img src="https://user-images.githubusercontent.com/32223762/209234345-61719fd4-a7a4-4caf-8893-4eb314284510.png" width="700" title="Postman">
  
  
<!-- <p align="center" style="display: flex; align-items: center; justify-content: center;"> -->
![image](https://user-images.githubusercontent.com/32223762/209345271-ad53ca95-dc61-48dc-82bc-9c48270eb18f.png)

  
  
<!-- <p align="center" style="display: flex; align-items: center; justify-content: center;"> -->
  <img src="https://user-images.githubusercontent.com/32223762/209234729-0f3540ba-81a8-499a-afd0-30f1aa5e4f0f.png" width="700" title="Postman">
  
  
<!-- <p align="center" style="display: flex; align-items: center; justify-content: center;"> -->
  <img src="https://user-images.githubusercontent.com/32223762/209234896-5a323c28-b71d-4de5-bac1-78ae892fa1df.png" width="700" title="Postman">
  
<!-- <p align="center" style="display: flex; align-items: center; justify-content: center;"> -->
  <img src="https://user-images.githubusercontent.com/32223762/209234781-3719b338-e812-4a68-ad84-19b08983b854.png" width="700" title="Postman">
<br>
  <br>

### Some references:

https://www.django-rest-framework.org/tutorial/quickstart/#urls
https://medium.com/djangotube/django-sqlite-to-postgresql-database-migration-e3c1f76711e1
https://www.cloudbees.com/blog/using-docker-compose-for-python-development
https://www.digitalocean.com/community/tutorials/how-to-use-postgresql-with-your-django-application-on-ubuntu-20-04
https://docs.djangoproject.com/en/4.1/topics/auth/

# Contact

Gabriel Patrício - gabrieltp087@gmail.com - [https://github.com/bielpatricio/](https://github.com/bielpatricio) -[https://www.linkedin.com/in/gabriel-patricio/](https://www.linkedin.com/in/gabriel-patricio/)

<p align="right"><a href="#refera---fullstack-code-challenge">back to top</a></p>
