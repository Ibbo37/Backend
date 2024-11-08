require('dotenv').config()
const express = require('express')
const app = express()

port = 4000
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/login',(req,res) => {
    res.send('<h1> Please Login At Mustak </h1>')
})

app.get('/youtube', (req,res) => {
    res.send('<h2>Hello Backend</h2>')
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})