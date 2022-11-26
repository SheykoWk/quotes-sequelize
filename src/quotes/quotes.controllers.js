const Quotes = require('../models/quotes.models')


const findAllQuotes = async () => {
    const data = await Quotes.findAll()
    return data
}

const findQuoteById = async (id) => {
    const data = await Quotes.findOne({
        where: {
            id: id
        }
    })
    return data
}

const createQuote = async (obj) => {
    const data = await Quotes.create({
        quote: obj.quote,
        author: obj.author,
        year: obj.year
    })
    return data
}

const updateQuote = async (id, obj) => {
    const data = await Quotes.update(obj, {
        where: {
            id: id
        }
    })
    return data[0]
}

const deleteQuote = async (id) => {
    const data = await Quotes.destroy({
        where: {
            id: id
        }
    })
    return data
}

module.exports = {
    findAllQuotes,
    findQuoteById,
    createQuote,
    updateQuote,
    deleteQuote
}
