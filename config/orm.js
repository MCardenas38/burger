var connection= require("./connection.js");

var orm = {
    selectAll: function(table,cb){
        var query= "SELECT * FROM "+table;
        connection.query(query,function(err,result){
            if(err) throw err; 
            cb(result);
        });
    },
    insertOne: function(name,cb){
        var query= "INSERT INTO burgers(burger_name) VALUES ('"+name+"');";
        connection.query(query,function(err,result){
            if(err) throw err;
            cb(result);
        });
    },
    updateOne: function(id,cb){
        var query= "UPDATE burgers SET devoured = TRUE WHERE ?";
        connection.query(query,{id: id},function(err,result){
            if(err) throw err;
            cb(result);
        });
    }
};


module.exports= orm; 