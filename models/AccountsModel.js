const sequelize = require("../controllers/databaseConnection/db");
const { DataTypes } = require('sequelize');


//defining account entity and setting timestamp to false 
const Account = sequelize.define('Accounts', {
        accountId: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        accountTitle: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        accountType: {
            type: DataTypes.STRING,
            allowNull: false
        },  
    }, {
        timestamps: false
    }
);
module.exports = Account;