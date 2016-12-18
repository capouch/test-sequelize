var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://brianc:anything@localhost:5432/wchs');

var Item = sequelize.define('items', {
  item_id: {
    type: Sequelize.STRING,
  },
  category: {
    type: Sequelize.INTEGER,
  },
  price: {
    type: Sequelize.DECIMAL,
  },
  description: {
    type: Sequelize.STRING,
  },
  source: {
    type: Sequelize.STRING
  }
}, {
  // Learn options: 'underscored' is another important one
  freezeTableName: true, quoteIdentifiers: false, timestamps: false
});

module.exports = Item;
