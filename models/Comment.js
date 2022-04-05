const{Model,DataTypes}=require('sequelize');
const sequelize=require('../config/connection');
class Comment extends Model{};
Comment.init({
id:{
    type:DataTypes.INTEGER,
    allowNull:false,
    primaryKey:true,
    autoIncrement:true
},
comment:{
    type:DataTypes.STRING,
    allowNull:false,
},
post_id:{
    type:DataTypes.INTEGER,
    references:{
        model:"posting",
        key:"id"
    }
},
user_id:{
    type:DataTypes.INTEGER,
    references:{
        model:'user',
        key:"id"
    }
}
},{
sequelize,
freezeTableName:true,
timestamps:true,
modelName:"comment"




});
module.exports=Comment;