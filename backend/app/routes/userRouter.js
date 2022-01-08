module.exports = app => {
    const users = require("../controllers/userController.js");
  
    var router = require("express").Router();
  
    // Retrieve all lessons
    router.get("/user", users.findAll);
  
    
  
    app.use('/', router);
  };