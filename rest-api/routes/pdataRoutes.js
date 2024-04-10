//we have to create routes
const express = require('express');
//const app = express();
const pdRoute = express.Router();
const createError = require('http-errors');//Import createError
let pData = require('../node_backend/model/patientdata');//this contain schema of pateintdata

//adding new appointment
pdRoute.route('/new-appointment').post(async (req, res, next) => {
    const url = req.url;
    console.log(url);
    try {
        const data = await pData.create(req.body);
        res.json(data);
    }
    catch (error) {
        return next(error);
    }
    //create it is used in mongodb
})//post

//get all apointment from database
pdRoute.route('/').get(async (req, res, next) => {
    try {
        const data = await pData.find().exec();//Use .exec() to execute the query
        res.json(data);
    }
    catch (error) {
        return next(error);
    }
})// get  find is used in mongodb to find the data from database
//get

//get appointment by id or name



//export module
module.exports = pdRoute;







//We use async/await to handle promises more cleanly.
// We use try/catch blocks to catch any errors that occur during asynchronous operations.
// We use await pData.create(req.body) and await pData.find().exec() to wait for the promises to resolve.
// With these changes, your code should work as expected without the "Model.create() no longer accepts a callback" error.