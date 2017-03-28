var express = require('express');
var router = express.Router();
const faker = require('faker');

const { Auction } = require('../models/index');

router.get('/new', function (req, res) {
  res.render('auctions/new');
})

router.post('/new', function (req, res, next) {
    const params = req.body;
    res.render('/auctions/new', { params });
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

router.get('/:id', function(req, res, next) {
  const {id} = req.params;
  Auction
    .findById(id)
    .then(
      auction => res.render('auctions/show', {auction})
    )
    .catch(
       err => next(err)
   )
});



module.exports = router;
