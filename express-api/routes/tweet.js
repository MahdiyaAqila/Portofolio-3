var express = require('express');
var app = express();
var database = require('../config/database');
var moment = require('moment');
/*
app.get('/tweets', (req, res) => {
    let sql = `SELECT * FROM  tweet`;
    database.query(sql, (err,result) => {
        if (err) {
            res.status(400).json({
                message: err
            });
            return;
        }

        if (result.length) res.json(result);
        else res.json({});
    })
    //res.send("This is tweets page"); 
});
*/

//get all tweet
app.get('/tweets/user/:id', (req, res) => {
    let sql = `SELECT * FROM tweet WHERE user_id = ${req.params.id}`;
    database.query(sql, (err,result) => {
        if (err) {
            res.status(400).json({
                message: err
            });
            return;
        }

        if (result.length) res.json(result);
        else res.json({});
    })
})


//add tweet
app.post('/tweets', (req, res) =>{
    let sql = `INSERT INTO tweet (user_id,content,date_time) VALUES (
        '${req.body.user_id}',
        '${req.body.content}',
        '${moment().utc().format("YYYY-MM-DD hh:mm:ss")}'
    ) `;
    
    database.query(sql, (err,result) => {
        if (err) {
            res.status(400).json({
                message: err
            });
            return;
        }else{
            res.status(200).json({
                status:200,
                success: true
            });
        }

        /*if (result.length) res.json(result);
        else res.json({});*/
        //if there is no err

        
    });

});

// delete tweet

app.delete('/tweets/delete/:id', (req, res) =>{
    let sql = `DELETE FROM tweet WHERE id = ${req.params.id}`;

    database.query(sql, (err,result) => {
        if (err) {
            res.status(400).json({
                message: err
            });
            return;
        } else {
            res.status(200).json({
                status:200,
                success: true
            });
        }

        /*if (result.length) res.json(result);
        else res.json({});*/
        //if there is no err
    });
});

app.put('/tweets/update/:id', (req, res) =>{

    let sql = `UPDATE tweet SET content = '${req.body.content}' WHERE id = ${req.params.id}`;
    database.query(sql, (err,result) => {
        if (err) {
            res.status(400).json({
                message: err
            });
            return;
        } else {
            res.status(200).json({
                status:200,
                success: true
            });
        }

        /*if (result.length) res.json(result);
        else res.json({});
        //if there is no err
        */
    });
});


module.exports = app;