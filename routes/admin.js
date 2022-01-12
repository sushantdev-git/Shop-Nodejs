const express = require('express');
const path = require('path')

const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    res.render('addProduct', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  });
  
// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {// this middleware only run for post request.
    products.push({ title: req.body.title });
    res.redirect('/');
});

exports.routes = router;
exports.products = products