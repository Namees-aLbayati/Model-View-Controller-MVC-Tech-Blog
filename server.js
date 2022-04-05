const path = require('path');
const express = require('express');
const routes=require('./controllers/api')
const session = require("express-session");

const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const SequelieStore = require("connect-session-sequelize")(session.Store);

// const helpers=require('./utils/Auth')

const app = express();

const sess = {
    secret: "this_is_my_secret",
    cookie: {},
    resave: false,
    logged_in:true,
    
    saveUninitialized: true,
    store: new SequelieStore({
        db: sequelize
    })
};

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes)

const PORT = process.env.PORT || 3001;



// handlebars setup
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');








sequelize.sync({ force:false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});