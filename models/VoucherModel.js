const sequelize = require('../controllers/databaseConnection/db');
const { DataTypes } = require('sequelize');


//defining voucher entity and setting timestamp to false 
const VoucherModel = sequelize.define('Vouchers', {
        voucherId: {
            type: DataTypes.BIGINT,
            primaryKey: true,
        },
        Memo: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        VoucherDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    }, 
    {
        timestamps: false
})

module.exports = VoucherModel;