import mongoose from 'mongoose';
// const mongoose = require("mongoose");  veya bu

const RecipesSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    ingredients:[{
        type:String,required:true,
    }],
    instructions:{type:String, required:true},
    imageUrl:{type:String, required:true},
    cookingTime:{type:Number, required:true},
    userOwner:{type:mongoose.Schema.Types.ObjectId,ref:"users", required:true},

})

export const RecipeModel = mongoose.model('recipes',RecipesSchema);