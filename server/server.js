const express = require('express')
const cors = require('cors')
const path =require('path')

var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'a8a5a1e54a02458e95e3a55263344410',
  captureUncaught: true,
  captureUnhandledRejections: true,
})
// rollbar.log('Hello World!')

const app = express()


app.use(express.json())
app.use(cors())
app.use(express.static('public'))
rollbar.info('site is visited')
// console.log(__dirname + '../public/index.html')

app.get('/', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/index.html'))

})
app.get('/css', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/styles.css'))
})
app.get('/js', (req,res) => {
    res.status(200).sendFile(path.join(__dirname, '../public/main.js'))
    
})

app.get('/rollbar', (req,res) => {
    res.sendStatus(200)
    rollbar.log('Pikachu was clicked!')
    
})

app.get('/button', (req,res) => {
    res.sendStatus(200)
    rollbar.log('Imagine clicking a useless button')
    
})




app.listen(4000, console.log(`App running on 4000`))