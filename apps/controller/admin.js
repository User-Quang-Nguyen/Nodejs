var express = require("express");
var router = express.Router();
var user_md = require("../models/user");

router.get("/", function(req, res) {
    res.json({"message":"this is admin page"});
});

router.get("/login", function(req, res){
    res.render("login2", {data: {}});
});

router.post("/login", function(req, res){
    var user = req.body;

    user = {
        email : user.email,
        password : user.password
    };

    console.log(req.params);

    var result = user_md.addUser(user);
    if(!result){
        res.render("login", {data: {error: "Error!"}});
    }else{
        res.json({message: "Success!"});
    }
});

module.exports = router;