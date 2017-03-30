const express = require('express');
const router = express.Router();

const { Auction, Bid } = require('../models/index');

router.get('/new', function (req, res) {
  res.render('auctions/new');
})

router.post('/new', function (req, res, next){
  const params = req.body;
    Auction
      .create({
      title: params.title,
      details: params.details,
      end_date: new Date(params.date),
      reserve_price: params.reserveprice
      })
      .then(auction => {res.render('auctions/show', {auction})});
});

router.get('/', function(req, res, next) {
  Auction
   .findAll({order: [['id', 'ASC']]})
   .then(
     auctions => {
       res.render('auctions/index', {auctions})
     }
   )
});

router.get('/auctions/:id', function(req, res, next) {
  const {id} = req.params;
  Auction
    .findById(id)
    .then((auction, bid) => res.render('auctions/show', {auction, bid}))
    .catch(err => next(err))
});

router.post('/auctions/:id', function(req, res, next) {
  const {id} = req.params;
  const params = req.body;
  Auction
    .findById(id)
    .then( auction => Bid.create({price: params.price, AuctionId: id}))
    .then(function(){
      if (!this.current_price || this.current_price < params.price) {
        Auction.update({current_price: params.price}, { where: {id: id}})
        }
      })
    .then((auction, bid) =>  res.render('auctions/show', {auction, bid}))
    .catch(err => next(err))
});

router.get('/watch', function(req, res, next) {
  Auction
   .findAll({
     where: {
       watch: true
     },
     order: [['id', 'ASC']]
   })
   .then(
     auctions => {
       res.render('auctions/watch', {auctions})
     }
   );
});

module.exports = router;
