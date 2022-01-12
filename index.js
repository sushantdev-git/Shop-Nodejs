const path = require('path')

const express = require('express')
const bodyParser = require('body-parser')

const app = express();

const adminData=  require('./routes/admin'); //handling routes in another file.
const storeRoutes = require('./routes/store')

app.use(bodyParser.urlencoded({extended:false})); // added a body parser to to parse the body of incoming request.

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public'))); //adding path for static files so we can access them in html files.

app.use('/admin', adminData.routes) //we can also strip route with common path, all the routes with /admin will go for adminRoutes
app.use(storeRoutes)

app.use((req,res,next) => { //handling if any routes don't match
    res.status(404).render('404', {pageTitle: 'Page not found'})
})

app.listen(3000)