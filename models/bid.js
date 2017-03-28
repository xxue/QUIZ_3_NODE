'use strict';
module.exports = function(sequelize, DataTypes) {
  var Bid = sequelize.define('Bid', {
    price: DataTypes.INTEGER,
    AuctionId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Bid.belongsTo(models.Auction);
      }
    }
  });
  return Bid;
};
