const Sequelize = require('sequelize');

const sequelize = new Sequelize('yourlocalstore', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;