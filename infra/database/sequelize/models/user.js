const { Sequelize, DataTypes } = require('sequelize');
const connection = require('../connection');

const User = connection.define('User', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nickName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
}, {
    freezeNameTable: true,
    tableName: 'user'
})

User.sync();
User.sync({ alter: true});

console.log(User === connection.models.User);

module.exports = User;