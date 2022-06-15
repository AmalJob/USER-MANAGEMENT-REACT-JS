const express=require('express')
const notes=require('./data/notes')
const dotenv=require('dotenv')

const app =express()
dotenv.config()

app.get('/',(req,res)=>{
    res.send("Api is running")
})

app.get('/api/notes',(req,res)=>{
    res.json(notes)
})
app.get('/api/notes/:id',(req,res)=>{
    res.json(notes)
})

const PORT=process.env.PORT || 5000;

app.listen(PORT,console.log(`Server Started on Port ${PORT}`));
