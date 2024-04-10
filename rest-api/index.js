//here we are going to create connection code
const { error } = require('console');

let  express=require('express'),
 path=require('path'),
 mongoose=require('mongoose'),
 cors=require('cors'),
 bodyParser=require('body-parser'),
 createError=require('http-errors'),//createError module from http-errors to handle errors more conveniently. 
 mongoDb=require('./database/touchdb');
 mongoose.Promise=global.Promise;
 
 mongoose.connect(mongoDb.db)
 .then(()=>{console.log('MongoDB Connected successfully')})
 .catch((error)=>{console.error( error)});//This connection allows the Node.js application to interact with the MongoDB database.

//making PORT and server
const pdRoute=require('../rest-api/routes/pdataRoutes');//routes in this
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(cors());
//now create static path
app.use(express.static(path.join(__dirname,'new-appointment')));///////////****** */
//API Root
app.use('/api',pdRoute);
//PORT create
const port=process.env.PORT ||8000;
app.listen(port,()=>{
    console.log('Listening Port on:'+port);
});
//404 error handler
app.use((req,res,next)=>{
    next(createError(404));
});
 //
 app.use(function(err,req,res,next){
 console.error(err.message);
 if(!err.statusCode)err.statusCode=500;
 res.status(err.statusCode).send(err.message);
 })