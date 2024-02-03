const express = require('express');
const { body, validationResult } = require('express-validator');
const Router = express.Router();
const fetchUser = require('../middleware/fetchUser')
const SellBook = require('../models/SellBook')
const RentBook = require('../models/RentBook')

// Test route. /store/test
Router.use('/test', (req, res) => { res.send("This endpoint is working fine!").status(200) });

// Route 1: /store/createsell Login required!
Router.post('/createsell', fetchUser, [
    body('bookname', 'Please provide a valid book name!').exists(),
    body('author', 'Please provide a valid author name!').exists(),
    body('condition', 'Please provide the condition of the book!').isNumeric().isIn([1, 2, 3, 4, 5]),
    body('price', 'Please provide a price!').exists().isNumeric()

], async (req, res) => {
    try {
        // Checking if book details fits the criteria
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() })
        }


        // Creating a book item for sale. 
        const bookDetails = {
            bookname: req.body.bookname,
            author: req.body.author,
            condition: req.body.condition,
            price: req.body.price,
            user_id: req.user.id
        }

        if (req.body.genre) {
            bookDetails.genre = req.body.genre
        }

        const book = await SellBook.create(bookDetails);

        // if book is null(couldn't make entry in db), return error
        if (!book) { return res.status(422).json({ success: false, error: "Error creating item in database." }) };

        res.status(200).json({ success: true, message: "Book listed for sale successfully" });


    } catch (error) {
        // Returning error if something goes wrong
        console.log(error.message);
        return res.status(500).json({ success: false, error: "Internal server error!" });
    }
})

//Route 2: /store/reqrent Login required
Router.post('/reqrent', fetchUser, [
    body('bookname', 'Please provide a valid book name!').exists(),
    body('author', 'Please provide a valid author!').exists(),
    body('duration', 'Please provide a price!').exists().isNumeric()
], async (req, res) => {
    try {
        // Checking if book details fits the criteria
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() })
        }


        // Creating a book item for sale. 
        const bookDetails = {
            bookname: req.body.bookname,
            author: req.body.author,
            duration: req.body.duration,
            user_id: req.user.id
        }

        if (req.body.genre) {
            bookDetails.genre = req.body.genre
        }

        const book = await RentBook.create(bookDetails);

        // if book is null(couldn't make entry in db), return error
        if (!book) { return res.status(422).json({ success: false, error: "Error creating item in database." }) };

        res.status(200).json({ success: true, msg: "Book rent request listed successfully" });

    } catch (error) {
        // Returning error if something goes wrong
        console.log(error.message);
        return res.status(500).json({ success: false, error: "Internal server error!" });
    }
})

// Route 3: /store/fetchsell No login required
Router.post('/fetchsell', async (req, res) => {
    try {
        const page = req.body.page ? req.body.page : 1;
        const limit = req.body.limit ? req.body.limit : 10;

        try {
            const books = await SellBook.find().skip((page - 1) * limit).limit(limit);
            res.status(200).json({ success: true, books: books });
        } catch (error) {
            console.log(error.message);
            return res.status(422).json({ success: false, error: "Failed fetching books from db" })
        }
    } catch (error) {
        // Returning error if something goes wrong
        console.log(error.message);
        return res.status(500).json({ success: false, error: "Internal server error!" });
    }
})

// Route 4: /store/fetchrent No login required
Router.post('/fetchrent', async (req, res) => {
    try {
        const page = req.body.page ? req.body.page : 1;
        const limit = req.body.limit ? req.body.limit : 10;

        try {
            const books = await RentBook.find().skip((page - 1) * limit).limit(limit);
            res.status(200).json({ success: true, books: books });
        } catch (error) {
            console.log(error.message);
            return res.status(422).json({ success: false, error: "Failed fetching books from db" });
        }

    } catch (error) {
        // Returning error if something goes wrong
        console.log(error.message);
        return res.status(500).json({ success: false, error: "Internal server error!" });
    }
})

// Route 5: /store/fetchonesell
Router.post('/fetchonesell', [body('id', 'Please provide an id of book to fetch').exists()], async (req, res) => {
    try {
        // Checking if body fits the criteria
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }

        try {
            const book = await SellBook.findById(req.body.id);
            if (!book) { return res.status(422).json({ success: false, error: "Not Found" }) }
            res.status(200).json({ success: true, book });
        } catch (error) {
            console.log(error.message);
            return res.status(422).json({ success: false, error: "Not Found" })
        }

    } catch (error) {
        // Returning error if something goes wrong
        console.log(error.message);
        return res.status(500).json({ success: false, error: "Internal server error!" });
    }
})

// Route 5: /store/fetchonerent
Router.post('/fetchonerent', [body('id', 'Please provide an id of book to fetch').exists()], async (req, res) => {
    try {
        // Checking if body fits the criteria
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ error: errors.array() });
        }

        try {
            const book = await RentBook.findById(req.body.id);
            if (!book) { return res.status(422).json({ success: false, error: "Not Found" }) }
            res.status(200).json({ success: true, book });
        } catch (error) {
            console.log(error.message);
            return res.status(422).json({ success: false, error: "Not Found" })
        }

    } catch (error) {
        // Returning error if something goes wrong
        console.log(error.message);
        return res.status(500).json({ success: false, error: "Internal server error!" });
    }
})

// Route 6: /store/editsell/:id Login required.
Router.post('/editsell/:id', [
    body('bookname', 'Please provide a valid book name!').exists(),
    body('author', 'Please provide a valid author name!').exists(),
    body('condition', 'Please provide the condition of the book!').isNumeric().isIn([1, 2, 3, 4, 5]),
    body('price', 'Please provide a price!').exists().isNumeric()
], fetchUser, async (req, res) => {
    try {
        const sellID = req.params.id;
        if (!sellID) {
            return res.status(404).json({ success: false, error: "Please provide a valid id!" })
        }
        
        // Checking if body meets the required criteria.
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, error: errors.array() })
        }
        
        const { bookname, author, condition, price } = req.body;
        const user_id = req.user.id;
        const newSell = { bookname, author, condition, price };

        // Checking if the item is present.
        const findSell = await SellBook.findById(sellID).select()
        if (!findSell) {
            return res.status(400).json({ success: false, error: "The item does not exists." })
        } else if (findSell.user_id != user_id) {//Checking if the item belongs to the user.
            return res.status(401).json({ success: false, error: "You are not the owner of the item!" })
        }

        const updatedSell = await SellBook.findByIdAndUpdate(sellID, { $set: newSell }, { new: true })
        res.status(200).json({ success: true, updatedSell})

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ success: false, error: "Internal server error!" })
    }
})

// Route 7: /store/editrent/:id Login required.
Router.post('/editrent/:id', [
    body('bookname', 'Please provide a valid book name!').exists(),
    body('author', 'Please provide a valid author!').exists(),
    body('duration', 'Please provide a price!').exists().isNumeric()
], fetchUser, async (req, res) => {
    try {
        const rentID = req.params.id;
        if (!rentID) {
            return res.status(404).json({ success: false, error: "Please provide a valid id!" })
        }
        
        // Checking if body meets the required criteria.
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, error: errors.array() })
        }
        
        const { bookname, author, duration} = req.body;
        const user_id = req.user.id;
        const newRent = { bookname, author, duration };

        // Checking if the item is present.
        const findRent = await RentBook.findById(rentID).select()
        if (!findRent) {
            return res.status(400).json({ success: false, error: "The item does not exists." })
        } else if (findRent.user_id != user_id) {//Checking if the item belongs to the user.
            return res.status(401).json({ success: false, error: "You are not the owner of the item!" })
        }

        const updateRent = await RentBook.findByIdAndUpdate(rentID, { $set: newRent }, { new: true })
        res.status(200).json({ success: true, updateRent})

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ success: false, error: "Internal server error!" })
    }
})

//Route 8: /store/deletesell Login required
Router.delete('/deletesell/:id', fetchUser, async (req, res) => {
    try {
        const sellID = req.params.id;
        const user_id = req.user.id;

        // Checking if the item is present.
        const findSell = await SellBook.findById(sellID).select()
        if (!findSell) {
            return res.status(400).json({ success: false, error: "The item does not exists." })
        } else if (findSell.user_id != user_id) {//Checking if the item belongs to the user.
            return res.status(401).json({ success: false, error: "You are not the owner of the item!" })
        }

        //Deleting the item.
        await SellBook.findByIdAndDelete(sellID);
        res.status(200).json({ success: true, message: 'The item has been deleted successfully.' })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ success: false, error: "Internal server error!" })
    }
})


//Route 9: /store/deleterent Login required
Router.delete('/deleterent/:id', fetchUser, async (req, res) => {
    try {
        const rentID = req.params.id;
        const user_id = req.user.id;

        // Checking if the item is present.
        const findRent = await RentBook.findById(rentID).select()
        if (!findRent) {
            return res.status(400).json({ success: false, error: "The item does not exists." })
        } else if (findRent.user_id != user_id) {//Checking if the item belongs to the user.
            return res.status(401).json({ success: false, error: "You are not the owner of the item!" })
        }

        //Deleting the item.
        await RentBook.findByIdAndDelete(rentID);
        res.status(200).json({ success: true, message: 'The item has been deleted successfully.' })

    } catch (error) {
        console.log(error.message)
        res.status(500).json({ success: false, error: "Internal server error!" })
    }
})


//Route 10: /store/fetchusersell Login required
Router.post('/fetchusersell',fetchUser, async (req, res) => {
    try {
        const page = req.body.page ? req.body.page : 1;
        const limit = req.body.limit ? req.body.limit : 10;
        const user_id = {user_id: req.user.id};
        try {
            const books = await SellBook.find(user_id).skip((page - 1) * limit).limit(limit);
            res.status(200).json({ success: true, books: books });
        } catch (error) {
            console.log(error.message);
            return res.status(422).json({ success: false, error: "Failed fetching books from db" });
        }

    } catch (error) {
        // Returning error if something goes wrong
        console.log(error.message);
        return res.status(500).json({ success: false, error: "Internal server error!" });
    }
})

//Route 11: /store/fetchuserrent Login required
Router.post('/fetchuserrent',fetchUser, async (req, res) => {
    try {
        const page = req.body.page ? req.body.page : 1;
        const limit = req.body.limit ? req.body.limit : 10;
        const user_id = {user_id: req.user.id};
        try {
            const books = await RentBook.find(user_id).skip((page - 1) * limit).limit(limit);
            res.status(200).json({ success: true, books: books });
        } catch (error) {
            console.log(error.message);
            return res.status(422).json({ success: false, error: "Failed fetching books from db" });
        }

    } catch (error) {
        // Returning error if something goes wrong
        console.log(error.message);
        return res.status(500).json({ success: false, error: "Internal server error!" });
    }
})



module.exports = Router;