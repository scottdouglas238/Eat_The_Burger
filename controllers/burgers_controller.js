const express = require("express");
const burgers = require("../models/burger.js");
const burger = require("../models/burger.js");
const { updateOne } = require("../config/orm.js");
const router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data){
        let hbsObject = {
            burgers: data
        };
        // console.log(hbsObject);
        res.render("index", hbsObject);
    })
})

router.post("/api/burgers", function(req, res){
    burger.insertOne(
        "burger_name", "devoured", req.body.burger_name, "0", function(result){
        res.json({ id: result.insertID })
    });
});

router.put("/api/burgers/:id", function(req, res){
    console.log(req.params.id)
    let condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.updateOne({
        devoured: 1
    }, condition, function(result){
        if(result.changedRows === null){
            console.log("lkasdfewr")
            return res.status(404).end();
        }else{
            res.status(200).end();
        }
    }
    )
})
// "DELETE FROM ?? WHERE ?? = ?";
router.delete("/api/burgers/:id", function(req, res){
    console.log(req.params.id)
    const column = "id";
    const value = req.params.id;
    console.log(req.params.id)
    burger.delete(column, value, function(result){
        res.status(200).end();
    })
})
module.exports = router;
