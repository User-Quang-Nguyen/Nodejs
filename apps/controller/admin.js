var express = require("express");
var router = express.Router();
var user_md = require("../models/user");

router.get("/signup", function(req, res){
    res.render("signup", {data: req.params});
});

router.post("/signup", function(req, res){
    var user = req.body;

    user = {
        first_name : user.first_name,
        last_name : user.last_name,
        email : user.email,
        password : user.password
    };

    console.log(req.params);

    var result = user_md.addUser(user);
    if(!result){
        res.render("signup", {data: {error: "Error!"}});
    }else{
        res.json({message: "Success!"});
    }
});

module.exports = router;