const {Model,DataTypes}=require('sequelize');
const sequelize=require('../config/connection');
class Posting extends Model{};
Posting.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    user_id:{
        type:DataTypes.INTEGER,
        references:{
            model:"user",
            key:"id"
        }
    }
    

},{


sequelize,
timestamps:true,
freezTableName:true,
modelName:'posting'

});
module.exports=Posting;