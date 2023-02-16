const express = require('express')
const app = express()
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const postsRoute = require('./routes/posts')
mongoose.set("strictQuery", false)


mongoose.connect('mongodb://localhost/userAuth',()=>{
    console.log('connected')
})

app.use(express.json())
app.use('/api/user', authRoute)
app.use('/api/posts',postsRoute)

app.listen(3000)