'use strict';
module.exports = function(sequelize, DataTypes) {
  var Auction = sequelize.define('Auction', {
    title: {type: DataTypes.STRING, unique: true},
    details: DataTypes.TEXT,
    reserve_price: DataTypes.INTEGER,
    current_price: DataTypes.INTEGER,
    end_date: DataTypes.DATE,
    state: DataTypes.STRING,
    watch: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
          Auction.hasMany(models.Bid);
      }
    }
  });
  return Auction;
};
