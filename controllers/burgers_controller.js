var express= require('express');
var burger= require('../models/burger.js');

var router= express.Router();

router.get("/",function(req,res){
    burger.displayall(function(data){
        res.render("index",{data: data});
    });
});

router.post("/api/burgers",function(req,res){
    burger.insert(req.body.name,function(data){
        res.send();
    });
});

router.put("/api/burgers/:id",function(req,res){
    var burgerID= req.params.id;
    burger.update(burgerID,function(result){
        if(result.changedRows==0){
            return res.status(404).end();
        }
        else{
            res.status(200).end();
        }
    });
});

module.exports= router;