const express= require('express');
require('dotenv').config();

const app=express();
app.use(express.json());

const PORT= process.env.PORT||3000;

let students=[
    {id:1, name:'John', age:20},
    {id:2, name:'Jane', age:22},
    {id:3, name:'Bob', age:21}
]

//VIEWING STUDENTS; route used is GET
app.get('/api/students', (req,res)=>{
    res.json(students);
})

 