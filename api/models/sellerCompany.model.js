const { connection } = require('../../database/index')
const { DataTypes } = require('sequelize')


const SellerCompany = connection.define('sellerCompany', {
    cif: {
        type: DataTypes.STRING,
        notNull: true,
        unique: true
    },

    name: {
        type: DataTypes.STRING,
        notNull: true,
        unique: true
    },

    location: {
        type: DataTypes.STRING,

    },

})

module.exports = SellerCompany