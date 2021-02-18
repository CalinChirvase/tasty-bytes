const Blog = require('../models/blog')
const User = require('../models/user')

const initialBlogs = [
    {
        title: 'The Best Blog',
        author: 'Blogger McBlogg',
        content: 'Hello this is a good blog!',
        likes: 9001
    },
    {
        title: 'The Real Best Blog',
        author: 'Blogger OBlogger',
        content: 'Not much',
        likes: 5
    }
]

const nonExistingId = async () => {
    const blog = new Blog(
        { 
            title: 'notone',
            author: 'noone', 
            content: 'nope',
            likes: 1 
        })
    await blog.save()
    await blog.remove()

    return blog._id.toString()
}

const blogsInDb = async () => {
    const blogs = await Blog.find({})
    return blogs.map(blog => blog.toJSON())
}

const usersInDb = async () => {
    const users = await User.find({})
    return users.map(u => u.toJSON())
}

module.exports = {
    initialBlogs, nonExistingId, blogsInDb, usersInDb
}