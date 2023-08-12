const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const db =mysql.createConnection({
    host: "localhost",
    users: "root",
    database:"submit"

})
app.post('/submit', (req,res) =>{
    const sql = "INSERT INFO login ('name', 'email', 'contact' , ) VALUES (?)"
    const values =[
        req.body.name,
        req.body.email,
        req.body.contact,
    ]
    db.query(sql, [values], (err, data) =>{
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})
app.listen(8081, ()=>{
    console.log("listening");
})