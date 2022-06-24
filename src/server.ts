import express from "express";
import cors from "cors";
import {sample_gears, sample_users } from "./data";
import jwt from 'jsonwebtoken';


const app = express();
app.use(express.json());
app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}));


app.get("/api/gears", (req, res) => {
    res.send(sample_gears);
})

app.get("/api/gears/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    res.send(gears);
})

app.get("/api/gears/:gearId", (req, res) => {
    const gearId = req.params.gearId;
    const gear = sample_gears.find(gear => gear.id == gearId);
    res.send(gears);
})



app.post("/api/users/Login", (req,res)=> {
    const {email, password} =req.body;
    const user = sample_users.find(user => user.email === email &&
        user.password === password);

        if(user){
            res.send(generateTokenReponse(user))
        }else{
            res.status(400).send("User name or password is not valid");
        }
    
})

const generateTokenReponse = (user:any)=>{
    const token = jwt.sign({
        email:user.email, isAdmin: user.isAdmin
    },"SomeRandomText",{
        expiresIn:"30d"
    })

}



const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})

function gears(gears: any) {
    throw new Error("Function not implemented.");
}
