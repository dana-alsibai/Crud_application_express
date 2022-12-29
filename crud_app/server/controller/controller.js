var Userdb = require('../model/model');

//create an API 
//create and save user 

exports.create = (req, res) => {
    //validate the request
    if(!req.body){
        res.status(400).send({message: "Content can not be empty!"})
        return;
    }

    //new user 
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    //save data to database 

    user
    .save(user)
    .then(data => {
        res.send(data)
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "error while creating a user"
        })
    })

}

//retrieve and return all users / retrieve and return a single user
exports.find = (req, res) => {
    Userdb.find()
    .then(user => {
        res.send(user)
    })
    .catch(err => {
        res.status(500).send({message: err.message})
    })
}

//update a new user by user id 
exports.update = (req, res) => {
    if(!req.body){
        return res
        .status(400)
        .send({message: "Data cannot be empty"})
    }

    const id = req.params.id;
    Userdb.findByIdAndUpdate(id, req.body)
    .then(data => {
        if(!data){
            return res.status(404).send({message: "user not found"})
        }else {
            res.send(data)
        }
    })
    .catch(err => {
        res.status(500).send({message: "Error update user information"})
    })
}

//delete a user with an id 

exports.delete = (req, res) => {

}