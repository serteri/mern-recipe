import express from "express"
import cors from 'cors'
import mongoose from 'mongoose'
import {userRouter} from './routes/users.js'
import {recipesRouter} from './routes/recipes.js'
const app = express()

app.use(express.json())  //middleware

app.use(cors()) //middleware

app.use("/auth", userRouter); //middleware
app.use("/recipes", recipesRouter); //middleware


mongoose.connect("mongodb+srv://serteri:Altay2205@recipes.5hekbpr.mongodb.net/recipes?retryWrites=true&w=majority")


app.listen(3001,()=>{
    console.log("Server started")
})