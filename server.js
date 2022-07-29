const express = require('express');
const app = express();
const mysql = require("mysql");
const PORT = process.env.PORT || 8000;
const cors = require('cors');

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "19981225",
    database: "first",
});

app.use(cors());
app.use(express.json());

app.listen(PORT,() => {
    console.log(`running on port ${PORT}`);
});

//client에 db 전송
app.get("/contents", (req, res) => {
    const sqlQuery = "SELECT * FROM board";
    db.query(sqlQuery, (err, result) => {
        res.send(result);
    });
});

app.get("/navbar", (req, res) => {
    const sqlQuery = "SELECT * FROM items";
    db.query(sqlQuery, (err, result) => {
        res.send(result);
    });
});

app.use(express.static(path.join__dirname, 'views/build'));

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'views/build/index.html'));
})