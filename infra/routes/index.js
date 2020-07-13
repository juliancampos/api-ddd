const userDomain = require('../../domain/useDomain/user');
//const taskDomain = require('../../domain/useDomain/task');
const resultRequest = require('../utils/result-request');

module.exports = (app) => {
	app.route('/')
		.get((req, resp) => resp.status(200).send('ok'))

	app.route('/user')
		.get((req, resp) => resultRequest(req, resp, userDomain.getUser))
		.post((req, resp) => resultRequest(req, resp, userDomain.postUser))
		
	app.route('/user/:id')
		.put((req, resp) => resultRequest(req, resp, userDomain.updateUser))

//	app.route('/task')
//		.get((req, resp) => resultRequest(req, resp, taskDomain.getTask))
}
