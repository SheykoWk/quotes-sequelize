const quoteControllers = require("./quotes.controllers");

const getAllQuotes = (req, res) => {
    //* try {
    //*     const data = await quoteControllers.findAllQuotes()
    //*     res.status(200).json(data)
    //* } catch (error) {
    //*     res.status(400).json({message: error.message})
    //* }
    quoteControllers.findAllQuotes()
        .then((data) => {
            res.status(200).json(data);
        })
        .catch((err) => {
            res.status(400).json({ message: err.message });
        });
};

const getQuoteById = (req, res) => {
    const id = req.params.id
    quoteControllers.findQuoteById(id)
        .then(data => {
            if(data){
                res.status(200).json(data)
            }else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message });
        })
}

const postQuote = (req, res) => {
    const { quote, author, year } = req.body
    quoteControllers.createQuote({quote, author, year})
        .then((data) => {
            res.status(201).json(data)
        })
        .catch(err => {
            res.status(400).json({ message: err.message });
        })
}

const patchQuote = (req, res) => {
    const id = req.params.id
    const {quote, author, year} = req.body 
    quoteControllers.updateQuote(id, {quote, author, year})
        .then((data) => {
            if(data) {
                res.status(200).json({message: 'Quote updated succesfully with id: ' + id})
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message }); 
        })
}

const deleteQuote = (req, res) => {
    const id = req.params.id 
    quoteControllers.deleteQuote(id)
        .then(data => {
            if(data){
                res.status(204).json({message: 'Deleted Succesfully'})
            } else {
                res.status(404).json({message: 'Invalid ID'})
            }
        })
        .catch(err => {
            res.status(400).json({ message: err.message }); 
        })
}

module.exports = {
    getAllQuotes,
    getQuoteById,
    postQuote,
    patchQuote,
    deleteQuote
}


