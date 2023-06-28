require('dotenv').config();
const express = require('express');
const FruitRouter = require('./controllers/fruit');
const app = express();


//middleware
app.use(express.static("public"))

//will have a prefix of /fruit on top of what is defined as a path on Fruitrouter
app.use("/fruit", FruitRouter)


const PORT = process.env.PORT;


app.listen(PORT, () => console.log(`app listening on port ${PORT}`))