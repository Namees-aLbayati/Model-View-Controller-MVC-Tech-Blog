const Comment=require('../models/Comment');
const seedComment=[{
    comment:"nice work with shelfBook",
    user_id:1,
    post_id:1
},{
    comment:"i like weather app its usefull",
    user_id:2,
    post_id:2
}];
const commentSeeds=()=>Comment.bulkCreate(seedComment);
module.exports=commentSeeds;