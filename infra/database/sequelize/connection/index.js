const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('helloWorld', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres'
});


sequelize.authenticate()
.then(() => {
    console.log('connected');
//    sequelize.close();
//    console.log('disconnected');
})
.catch((error) => {
    console.error(error)
})

module.exports = sequelize;
