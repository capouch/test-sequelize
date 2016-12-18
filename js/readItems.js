// var Sequelize = require('sequelize');

// var sequelize = new Sequelize('postgres://brianc:anything@localhost:5432/wchs');

// Got some work cut out for myself here
var Item = require ('../sequelize/item.js');

Item.findAll().then(function(projects) {
  // projects will be an array of all Project instances
  projects.forEach(function(item) {
    console.log(item["description"] + ' Price: ' + item["price"] + '\n')
  })
});
