'use strict';

// load faker package
const faker = require('faker');

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// var statevalue = ["draft","published","reserve met","won","canceled","reserve not met"];

module.exports = {
  up: function (queryInterface, Sequelize) {
    const auctions = Array.from(
      {length: 10},
      (value, index) => ({
        title: faker.commerce.productName(),
        details: faker.lorem.sentences(5),
        reserve_price:  Math.floor(faker.commerce.price()),
        end_date:new Date(),
        // state: statevalue[Math.floor(Math.random()*statevalue.length)],
        createdAt: new Date(),
        updatedAt: new Date()
      })
    );
      return queryInterface.bulkInsert('Auctions', auctions, {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
