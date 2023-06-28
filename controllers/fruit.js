const express = require('express');
const Fruit = require('../models/fruit');

//routing middleware that allows the routes defined on this file to be used on our server.js file
// as app.use('/fruits', FruitRouter)
const router = express.Router();

//controllers
router.get('/', async (req, res) => {
    const allFruits = await Fruit.find({})
    res.render(
        'fruits/index.ejs',
        { fruits: allFruits }
    )
});


router.get('/new', (req, res) => {
    res.render('fruits/new.ejs')
})

module.exports = router;