const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const app = express();

const adminRoutes =  require('./routes/admin'); //handling routes in another file.
const storeRoutes = require('./routes/store')

app.use(bodyParser.urlencoded({extended:false})); // added a body parser to to parse the body of incoming request.

app.use('/admin',adminRoutes) //we can also strip route with common path, all the routes with /admin will go for adminRoutes
app.use(storeRoutes)

app.use((req,res,next) => { //handling if any routes don't match
    res.sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000)