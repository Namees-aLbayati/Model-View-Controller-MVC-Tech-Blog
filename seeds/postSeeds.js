const Posting=require('../models/Posting');
const postSeeds=[{
    title:"book shelf project",
    description:"using css html js jquery bootstrap and express-node server side"
,user_id:1
},{
    title:"weather app",
    description:"using css html js jquery bootstrap and API External"
,user_id:2
}];
const seedPost=()=> Posting.bulkCreate(postSeeds);
module.exports=seedPost;