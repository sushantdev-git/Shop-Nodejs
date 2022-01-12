const express = require('express');
const path = require('path')

const router = express.Router();
const products = require('./admin').products

// router.get('/' ,(req,res,next) => { //always put root route at bottom else it will match with the route.
//     console.log(products)
//     res.sendFile(path.join(__dirname, '../views', 'shop.html')) //dirname is absolute path for this directory in os.
// })


router.get('/', (req, res, next) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  });

module.exports = router;