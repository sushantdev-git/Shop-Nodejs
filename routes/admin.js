const express = require('express');
const path = require('path')

const router = express.Router();


router.get('/add-product' ,(req,res,next) => {
    res.sendFile(path.join(__dirname, '../views', 'addProduct.html'))
})

router.post('/add-product' ,(req,res,next) => { // this middleware only run for post request.
    console.log(req.body)
    res.redirect('/')
})

module.exports = router;