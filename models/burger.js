var orm= require('../config/orm.js');

var burger= {
    displayall: function(cb){
        orm.selectAll("burgers",function(res){
            cb(res);
        });
    },
    insert: function(name,cb){
        orm.insertOne(name,function(res){
            cb(res);
        })
    },
    update: function(id,cb){
        orm.updateOne(id,function(res){
            cb(res);
        });
    }
};

module.exports= burger;