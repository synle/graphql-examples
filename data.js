var csv = require('csvtojson');
var csvFilePath ='./transactions.csv';

var data = [];

csv()
    .fromFile(csvFilePath)
    // .fromString(csvStr)
    .on('json', function (jsonObj) {
        data.push(jsonObj);
    });

module.exports = data;
