import mongoose from "mongoose"

const UserSchema =new mongoose.Schema({
 fullName:{
    type:String,
    require:true,
 },
 sonOfName:{
    type:String,
    require:true,
 },
 email:{
    type:String,
    require:true,
 },
 number:{
    type:Number,
    require:true,
 },
 gender:{
    type:String,
    require:true,
 },
 currentAddress:{
    type:String,
    require:true,
 },
 address:{
    type:String,
    require:true,
 },
 country:{
    type:String,
 },
 state:{
    type:String,
 },
 distict:{
    type:String,
 },
 nativeDistrict:{
    type:String,
 },
 occupation:{
    type:String,
    require:true,
 },
 yourName:{
    type:String,
    require:true,
 },

})

export const User = mongoose.model("Users",UserSchema)