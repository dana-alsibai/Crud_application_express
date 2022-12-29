const express = require('express')
// const app = express() this is create a new app 

const route = express.Router() // allows to create different router 
const services = require('../services/render')
const controller = require('../controller/controller')

/**
 * @description Root Route
 * @method GET
 */
route.get('/', services.homeRoutes)

/**
 * @description add users
 * @method GET /add_user
 */
route.get('/add_user', services.add_user)


/**
 * @description update users
 * @method GET /update_user
 */
route.get('/update_user', services.update_user)

//API ROUTE 
//to create and add new user 
route.post('/api/users', controller.create)

route.get('/api/users', controller.find)

//to update 
route.put('/api/users/:id', controller.update)

route.delete('/api/users/:id', controller.delete)

module.exports = route