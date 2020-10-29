'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const { handleJoke } = require('./handlers');
const { get } = require('request');

express()
  .use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  })
  .use(morgan('dev'))
  .use(express.static('public'))
  .use(bodyParser.json())
  .use(express.urlencoded({ extended: false }))
  .set('view engine', 'ejs')

  // endpoints

.get("/joke/:type" , (req,res) => {
const jokeType = req.params.type;
handleJoke(jokeType)
.then((result) => {

  res.status(200).json({status:200 , joke: result});
})
.catch((err) => {
  
  res.status(400).json({status:400 , error: err});

});

})



  .listen(8000, () => console.log(`Listening on port 8000`));
