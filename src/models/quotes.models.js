//* {
//*     id: 1,
//*     author: 'Sahid',
//*     quote: 'Dudas?',
//*     year: '2022'
//* }
const { DataTypes } = require('sequelize')

const db = require('../utils/database')

const Quotes = db.define('quotes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    quote: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        defaultValue: 'Anonymous'
    },
    year: {
        type: DataTypes.INTEGER
    }
}, {
    timestamps: false //? No agrega las columnas created_at y updated_at
}) 


module.exports = Quotes
