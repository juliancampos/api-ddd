const express = require('express')
const bodyParser = require('body-parser')
const server = express();

const routes = require('../routes')


server.use(bodyParser.json());
routes(server)


module.exports = server