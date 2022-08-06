const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017/"

const router = express.Router();
module.exports = router;
router.post('/addCities', (req, res, next) => {
    console.log("Add Cities");
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var database = db.db("cities");
        console.log(req.body);
        var object = req.body;
        database.collection("cities").insertOne(object, (err, res) => {
            if (err) throw err;
            console.log("Document is inserted");
            db.close();
        });
        res.status(201).json({ message: "success" });
    });   
});

