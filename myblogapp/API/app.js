import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import rs from 'randomstring';


const app = express();

//To link application level middleware
import bloggerRouter from './router/blogger.router.js';

//To read a body content load the configuration body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({"extended":"true"}));



// to load cross origin resource sharing
app.use(cors());

//Application Level Middileware
app.use("/blogger", bloggerRouter);

app.listen(3001);
console.log("Server invoked at linked http://localhost:3001");
