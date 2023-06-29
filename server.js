require('dotenv').config();
const express = require('express');
const FruitRouter = require('./controllers/fruit');
const methodOverride = require('method-override');
const app = express();


//middleware
app.use(express.static("public"));
app.use(express.urlencoded()); //allows the the req.body to be read from the form
//will have a prefix of /fruit on top of what is defined as a path on Fruitrouter
app.use(methodOverride('_method'));
app.use("/fruit", FruitRouter)


const PORT = process.env.PORT;


app.listen(PORT, () => console.log(`app listening on port ${PORT}`))