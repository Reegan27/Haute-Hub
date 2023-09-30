const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const cors = require('cors')

connectDb()
const app = express();


app.use(cors());
app.use(express.json())
app.use('/api/users', require("./routes/userRoutes"))
app.use('/api/product',require('./routes/productRoutes'))

app.use(errorHandler)

const port = process.env.PORT;


app.listen(port, ()=> {
    console.log(`Server running on port ${port}`)
})