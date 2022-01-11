const express = require('express');
const path = require('path')

const router = express.Router();

router.get('/' ,(req,res,next) => { //always put root route at bottom else it will match with the route.
    res.sendFile(path.join(__dirname, '../views', 'shop.html')) //dirname is absolute path for this directory in os.
})

module.exports = router;