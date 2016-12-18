var Item = require('sequelize/items.js')

// Create the table afresh each time
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
