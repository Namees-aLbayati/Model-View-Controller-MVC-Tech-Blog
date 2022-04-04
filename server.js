const path = require('path');
const express = require('express');
const routes=require('./controllers/api')

const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');


const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(routes)

const PORT = process.env.PORT || 3001;



// handlebars setup
const hbs = exphbs.create({});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');








sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});