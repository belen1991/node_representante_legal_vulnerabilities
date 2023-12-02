const express = require('express')
const body_parser = require('body-parser')

const config = require('./config')
const routes = require('./network/routes')
const db = require('./db')

var app = express()
const server = require('http').Server(app)

db( config.DB_URL )

app.use( body_parser.json() )
app.use( body_parser.urlencoded({extended: false}) )
app.use('/', express.static('public'))

routes( app )

server.listen(config.PORT, () => {
    console.log(`La aplicacion se encuentra arriba en http://localhost:${config.PORT}/`)
});
