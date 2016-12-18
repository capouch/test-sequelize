var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://brianc:anything@localhost:5432/wchs');

var User = sequelize.define('users', {
  firstName: {
    type: Sequelize.STRING,
    field: 'first_name' // Will result in an attribute that is firstName when user facing but first_name in the database
  },
  lastName: {
    type: Sequelize.STRING
  }
}, {
  freezeTableName: true, quoteIdentifiers: false // Model tableName will be the same as the model name
});

User.sync({force: true}).then(function () {
  // Table created
  return User.create({
    firstName: 'Brown',
    lastName: 'Chapstick'
  });
});
