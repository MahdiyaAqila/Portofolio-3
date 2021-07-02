var express = require('express');
var app = express();
var database = require('./config/database');
var cors = require('cors');
var port = process.env.PORT || 3005;

//connect to database
database.connect((err) => {
    if (err) throw err;
});
//allow api for cross-origin resource sharing
app.use(cors());

//allow api for parsing json
app.use(express.json());

//allow api to receice data from a client app
app.use(express.urlencoded({
    extended:true
}));

//http://localhost:3005/tweets - GET, POST
//http://localhost:3005/tweets/user/:id - GET
//http://localhost:3005/tweets/:id - DELETE
//http://localhost:3005/authenticate - POST for login and signup session
/*
app.get('/tweets',(req,res)=>{
    let sql = 'SELECT * FROM tweet';
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
    });
});
*/
app.use('/', [
    require('./routes/tweet'),
    require('./routes/auth'),
]);

app.listen(port,() => {
    console.log(`This server listening at http://localhost:${port}`);
});
 