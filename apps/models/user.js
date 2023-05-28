// const { connect } = require("../controller/admin");
var db = require("../common/database");
var q = require("q");
var conn = db.getConnection();

function addUser(user){
    if(user){
        var defer = q.defer();

        var query = conn.query('INSERT INTO user SET ?', user, function(err, result){
            if(err){
                defer.reject(err);
            }else{
                defer.resolve(result);
            }
        });

        return defer.promise;
    }

    return false;
}

module.exports = {
    addUser: addUser
}