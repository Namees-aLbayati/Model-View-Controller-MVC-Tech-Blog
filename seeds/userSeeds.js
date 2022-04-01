const User=require('../models/User');
const userData=[{
    username:'namees mohammed',
    email:"nameesmohammed12@gmail.com",
    password:"123456789"
},{
    username:'Aelia layth',
    email:"aelia@gmail.com",
    password:"123456789"
},{
    username:'Elias layth',
    email:"no3ealbas5@gmail.com",
    password:"123456789"
}];
const userSEEDS=()=>User.bulkCreate(userData);
module.exports=userSEEDS;