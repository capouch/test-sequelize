var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://brianc:anything@localhost:5432/wchs');

var Item = sequelize.define('items', {
  item_id: {
    type: Sequelize.INTEGER,
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
  freezeTableName: true, quoteIdentifiers: false, timestamps: false
});

Item.sync({force: true}).then(function () {
  // Table created
  return Item.create({
    item_id: '323',
    category: 3,
    price: 4.5,
    description: 'This is what I call my thing',
    source: 'ood'
  });
});
