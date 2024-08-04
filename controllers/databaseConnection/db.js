const { Sequelize } = require('sequelize');

class DatabaseConnection {
    constructor() {
        this.sequelize = new Sequelize('DB_A&V', 'postgres', '123', {
            dialect: 'postgres'
        })
        this.sequelize.sync({alter:true})
        this.connect();
    }
    async connect() {
        try {
            await this.sequelize.authenticate();
            console.log('connected');
        } catch(err) {
            console.log('error connecting to database');
        }
    }
}

module.exports = new DatabaseConnection().sequelize;