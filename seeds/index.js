const userSeeds=require('../seeds/userSeeds');
const postSeeds=require('../seeds/postSeeds');
const commentSeeds=require('../seeds/commentSeeds');
const sequelize=require('../config/connection');
const seedAll=async()=>{
    await sequelize.sync({force:false});
    await userSeeds();
    console.log('user seeded');
    await postSeeds();
    console.log('post seeded');
    await commentSeeds();
    console.log('comment seeded');
    console.log('well done namees')
    process.exit(0)
};
seedAll();