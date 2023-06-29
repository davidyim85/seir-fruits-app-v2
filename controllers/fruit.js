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


router.post('/', async (req, res) => {
    //example of the req.body OBJECT that comes in
    // {
    //     name: 'mango',
    //     color: 'green',
    //     readyToEat: 'on'
    // }
    console.log(req.body)
    if(req.body.readyToEat === 'on'){
        req.body.readyToEat = true;
    }else {
        req.body.readyToEat = false;
    }
    //this ternary will update the readyToEat property value similiar to how the 
    // conditional above does it
    // req.body.readyToEat = req.body.readyToEat === 'on' ? true : false
    
    //after it goes through conditional,
    //the req.body OBJECT will look like below
    // {
    //     name: 'mango',
    //     color: 'green',
    //     readyToEat: true
    // }
    
    await Fruit.create(req.body);
    res.redirect('/fruit');
})


router.get('/:id', async (req, res) => {
    const id = req.params.id;
    const fruit = await Fruit.findById(id);
    res.render("fruits/show.ejs", { fruit })
})


router.delete('/:id', async (req, res) => {
    const id = req.params.id;
    await Fruit.findByIdAndDelete(id);
    res.redirect('/fruit')
})


router.get('/:id/edit', async (req, res) => {
    const id = req.params.id;
    const fruit = await Fruit.findById(id);
    res.render('fruits/edit.ejs', { fruit })
})

router.put('/:id', async (req, res) => {
    const id = req.params.id;
    req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;
    await Fruit.findByIdAndUpdate(id, req.body);
    res.redirect('/fruit')
})



module.exports = router;