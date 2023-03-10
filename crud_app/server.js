//http server

const express = require('express');
const dotenv = require('dotenv')
const morgan = require('morgan')
const bodyparser = require('body-parser')
const path = require('path')
const connectDB = require('./server/database/connection')

const app = express();

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080

//log requests on the console with morgan 
app.use(morgan('tiny'));

//connect DB
connectDB();

//pass request to body-parser 
app.use(bodyparser.urlencoded({extended: true}))

//set view engine 
app.set("view engine", "ejs") 
// app.set("views", path.resolve(__dirname, "views/ejs"))

//load assets 
app.use('/CSS', express.static(path.resolve(__dirname, "assets/CSS")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js")))

// app.get('/', (req, res) => {
//     res.render('index')
// })

// app.get('/add_user', (req, res) => {
//     res.render('add_user')
// })

// app.get('/update_user', (req, res) => {
//     res.render('update_user')
// })

//load router 
app.use('/', require('./server/route/router'))
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})

