const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const port = 5000 ;
const clientRoutes=require('./client.js');
const seed=require('./seed.js');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const session=require('express-session');
const flash=require('connect-flash');
const {locals}=require('./middleware');
const authRoutes=require('./authRoutes');
const passport=require('passport');
const LocalStrategy=require('passport-local');
const MongoDBStore = require('express-mongodb-session')(session);
const dburl='mongodb://127.0.0.1:27017/agumentik';
const cors=require('cors');


app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

mongoose.connect('mongodb://127.0.0.1:27017/agumentik')
    .then(() => {console.log('DB Connected');
    // seed(); 
}).catch((err) => console.log(err));

const User = require('./models/user');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

const store = new MongoDBStore({
    uri: dburl,
    collection: 'mySessions',
    expires:60*60*1000*7*24
  });
  
  // Catch errors
  store.on('error', function(error) {
    console.log(error);
  });
  

app.use(session({
  secret: 'Secret Daily Journal',
  resave: true,
  saveUninitialized: true,
  cookie: {},
  store:store
}))
app.use(passport.session());
app.use(flash());
app.use(locals);

app.use(clientRoutes);
app.use(authRoutes);
app.use(cors());

app.get('/',(req,res)=>{
    res.render("home");
});


app.listen(port, () => 
{
    console.log(`server running at port ${port}`);
});