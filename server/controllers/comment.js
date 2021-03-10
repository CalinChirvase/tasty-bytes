const commentRouter = require('express').Router()
const User = require('../models/user')
const Comment = require('../models/comment')
const jwt = require('jsonwebtoken')

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return null
}

// create a comment
commentRouter.post('/', async (request, response) => {
    const body = request.body
    const token = getTokenFrom(request)
    const decodedToken = jwt.verify(token, process.env.SECRET)
    if (!token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }
    const user = await User.findById(decodedToken.id)
    const comment = new Comment({
        content: body.content,
        blog: body.blog,
        user: user._id
    })

    const savedComment = await comment.save()
    user.comments = user.comments.concat(savedComment._id)
    response.json(savedComment)
})

// get all comments
commentRouter.get('/', async (_request, response) => {
    const comments = await Comment.find({}).populate('user', {username: 1, name: 1}).populate('blogs')
    response.json(comments)
})

module.exports = commentRouter