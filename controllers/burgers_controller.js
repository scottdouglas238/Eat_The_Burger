const express = require("express");
const burgers = require("../models/burger.js");
const burger = require("../models/burger.js");
const router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data){
        let hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    })
})



router.post("/api/burgers", function(req, res){
    burger.insertOne(
        "burger_name", "devoured", req.body.burger_name, "0", function(result){
        res.json({ id: result.insertID })
    });
});
router

module.exports = router;
