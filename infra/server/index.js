const http = require('http')
const server = require('./config')
require('../database/sequelize/connection')

const start = () => {
	http.createServer(server).listen(3000, () => {
		console.log('servidor ddd iniciado ... :)')
	})
}

module.exports = { start }
