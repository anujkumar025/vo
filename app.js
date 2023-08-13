var mysql = require("mysql2");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

//adding this comment to check
const db = mysql.createPool({
    host: "localhost", 
    user:"root",
    password:'',
    database:"first",
    port: 3307
});


const app = express()
app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}));

const PORT = 5000;

app.post("/register", (req, res) => {
    const {name, email, password} = req.body;
    const sql = "select email from user where email=?";
    db.query(sql, [email], (err, result) => {
        if(err) console.log(err);
        else if(result.length === 0){
            const timestamp = new Date();
            const q1 = "INSERT INTO `user` (`user_id`, `username`, `email`, `password`, `registration_date`) VALUES (?, ?, ?, ?, ?)";
            db.query(q1, [null, name, email, password, timestamp],  (er, result1) => {
                if(er) console.log(er);
                else{
                    res.send({message : "Successfully Registered. Please login now"});
                }
            })
        }
        else{
            res.send({message : "User already Registered!"});
        }
    })
});

app.listen(PORT, ()=>{
    console.log("started at port 5000");
})
