const { createConnection, Connection } = require('typeorm');

const connection = createConnection({
	type: 'postgres',
	host: 'localhost',
	port: '5432',
	username: 'postgres',
	password: '123456',
	database: 'helloWorld',
	entities: ['../entities/*.js']
});