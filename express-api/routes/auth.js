var express = require('express');
var app = express();
var database = require('../config/database');
var authValidation =  require('../validation/auth');

app.post('/authenticate',(req, res) => {
     let requestBody = getCredentialsFromHeader(req);
     const { error } = authValidation(requestBody)

     if (error) {
         res.json({
             id :"",
             message: error.details[0].message 
         })
     } else {
        let sql = `SELECT id FROM users WHERE email = '${requestBody.email}' AND password = '${requestBody.password}'`;


         database.query(sql, (err, result) => {
            if (err) {
                res.status(400).send(err);
                return;
            }
    
            if (result.length) res.json(result[0]);
            else res.json({
                id: "",
                message: "email atau password salah"
            });
        });
        
    }
});

function getCredentialsFromHeader(req){
    let authorization = req.header('authorization');
    let authData = authorization.split(" ");
    let token = Buffer.from(`${authData[1]}`,'base64').toString('utf8');
    let credentials = token.split(":");
    
    return{
        email: credentials[0],
        password : credentials[1]
    }
}

module.exports = app;