1)Packages used:{
    "bcryptjs": for becrypting the password,
    "chalk": for highlighting the console,
    "dotenv": to secure the keys,
    "joi":I'm using Joi in this boilerplate, that make the validation really easy.,
    "jsonwebtoken": For generating the token,
    "mongoose": to make connection with mongodb,
    "nodemon": for running the server,
    "typescript": superset of js(send in a seperate file in a new pr)
    "eslint":for a better code structure
  },
 2) folder Structure:{
    all the process api and logics are present in user.routes.js of routes.js folder
    all the query related to data base is present in DataService.js
    all the schema present in model folder
    1)movie.model.js=>related to movie
    2)user.model.js=>related to user
  }
  3)apis:{
    1.login:http://localhost:5000/login=>{
      method:"post"
      {
    "email":"admin@gmail.com",
    "password":"password"
      }
    }
    2.signup:=>http://localhost:5000/signup=>{
      method:"post"
     {
    "email":"manager@gmail.com",
    "firstName":"manager",
    "password":"password",
    "role":"manager"
    }
    }
    3.for Adding movie:=>http://localhost:5000/movies=>{
       method:"post"
       require token and admin
      {
    "title": "spiderman4",
    "genre": "comedy",
    "rating":5
}
    }

4.to get all movie=>http://localhost:5000/movies=>{
  method:"get"
}
 5.to get movie based on title or genre=> http://localhost:5000/search?q=(GENRE OR TITLE)=>{
  method:get
 }
6.to update a movie =>http://localhost:5000/movies?id=movieId{
method;"put"
role must be "Admin"
{
    "title": "harry potter",
    "genre": "thirriler",
    "rating":4.5
}
}
7.to dELETE a movie =>http://localhost:5000/movies?id=MOVIEiD{
method;"DELETE"
role must be "Admin"
  }


  CREDENTIAL:
  1.for admin role{
    ADMIN=>admin@gmail.com
    password:password
    or you can create you own by signup
  }
  2.for normal role{
manager=>manager@gmail.com
password:password 
    or you can create you own by signup
  }

  procudure to follow=>{
    take a pull from master
     npm install
     npm start
     your app will be running at 5000
    
  }

  