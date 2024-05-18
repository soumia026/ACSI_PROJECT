const express = require('express')
const cors = require('cors');


const app = express()

// body parser
app.use(express.json())

// cors
app.use(cors());
// dotenv configuration
require('dotenv').config()

// general exports
require('colors')
const morgan = require('morgan')
const connectDB = require('./db')
const errorHandler = require('./middlewares/errorMiddleware')
// route exorts
const userRoutes = require('./routes/userRoutes')
const adminRoutes = require('./routes/adminRoutes')
const productRoutes = require('./routes/productRoutes')

// http logger
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// main routes
app.get('/', (req, res) => {
    res.send('API is running...')
})

app.use('/api/users', userRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/product', productRoutes)

 
// error handling
app.use(errorHandler)

connectDB()

const PORT = 4000 

app.listen(PORT, () => {
    console.log(`Port connected: ${PORT}`.underline.cyan);
})