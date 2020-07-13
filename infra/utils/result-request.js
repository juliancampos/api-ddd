const repository = require('../database/sequelize/repository')

module.exports = async (req, resp, action) => {
	const result = await action(req, repository)
		.then(result => resp.status(200).send(result))
		.catch(error => {
			console.log(error)
			resp.status(500).send(error)
		})
	
	return result;
}