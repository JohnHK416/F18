'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
    var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database */
mongoose.connect('mongodb://CEN3031:CEN3031TA@ds161322.mlab.com:61322/assignment3');

/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */

  var newArray;
 fs.readFile('listings.json', 'utf8', function(err, data){

  if (err) {
    console.log(err);
    return;
  }

  else {
    newArray = JSON.parse(data).entries;

    var arraySize = newArray.length;

    for(var i = 0; i < arraySize; i++){
     var iterateData = new Listing(newArray[i]);
     iterateData.save(function(err){
       
       if (err) throw err;
    console.log('Listing saved successfully!');
 });
    }

    }
 });

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */