// const { connect } = require("../controller/admin");
var db = require("../common/database");
var q = require("q");
var conn = db.getConnection();

function addUser(user) {
    if (user) {
        var defer = q.defer();

        var query = conn.query('INSERT INTO user SET ?', user, function (err, result) {
            if (err) {
                defer.reject(err);
            } else {
                defer.resolve(result);
            }
        });

        return defer.promise;
    }

    return false;
}

function checkUser(user) {
    if (user) {
        // var defer = q.defer();
        var email = user.email.toString();
        var password = user.password;
        var query = "SELECT password FROM user WHERE email=" + "\""  + email + "\"";
        var connect = conn.query(query, function (err, result) {
            if(err) throw err;
            if(result.length === 0){
                console.log("Email ko ton tai");
            }else{
                if(user.password == result[0].password){
                    console.log("Đăng nhập thành công");
                }
            }
        });
        // return defer.promise;
    }else{
        console.log("Fail");
        return false;
    }
}

module.exports = {
    addUser: addUser,
    checkUser : checkUser
}