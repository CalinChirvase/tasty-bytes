const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')


// create a user
usersRouter.post('/', async (request, response) => {
    const body = request.body

    if (body.password === undefined) {
        return response.status(400).json({ error: 'password missing'})
    } else if (body.password.length < 3) {
        return response.status(400).json({ error: 'password length must be at least 3 characters'})
    }

    const saltRounds = 10
    const passwordHash = await bcrypt.hash(body.password, saltRounds)

    const user = new User({
        username: body.username,
        name: body.name,
        blogs: [],
        comments: [],
        passwordHash: passwordHash,
    })

    const savedUser = await user.save()

    response.json(savedUser)
})

//get all users
usersRouter.get('/', async (request, response) => {
    const users = await User.find({}).populate('blogs').populate('comments')
    response.json(users)
})

// get a specific user
usersRouter.get('/:id', async (request, response) => {
    const user = await User.findById(request.params.id)
    if (user) {
        response.json(user)
    } else {
        response.status(404).end()
    }
})

module.exports = usersRouter