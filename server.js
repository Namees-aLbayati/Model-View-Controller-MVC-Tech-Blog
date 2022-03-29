const path = require('path');
const express = require('express');
const session=require('express-session');
const routes=require('./controllers/api')

const exphbs = require('express-handlebars');
const SequelizeStore=require('connect-session-sequelize')(session.Store)
const sequelize = require('./config/connection');


const app = express();
app.use(routes)

const PORT = process.env.PORT || 3001;
// session setup
const sess={
    secret:"wow!!if i will let you know,so that will be not a secret anymore",
    cookie:{
maxAge:86400
    },
    resave:false,
    saveUninitialized: true,
    store:new SequelizeStore({
        db:sequelize
    })

};

app.use(session(sess))

// handlebars setup
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));






sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});