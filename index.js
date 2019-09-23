const express = require('express')
const bodyParser = require('body-parser')
const request = require('request')

const app = express()

app.get('/', (req, res) => {
    res.send('Hey there!')
})

const port = 3000

app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})