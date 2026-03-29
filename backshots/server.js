const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5001
const cors = require('cors')
const errorHandler = require('./middleware/errorMiddleware')

connectDB()

const app = express()

app.use(cors({
    origin: "https://remarkable-sunburst-68987e.netlify.app"
}))

app.use(express.json())
app.use('/api/movimientos', require('./routes/movimientosRoutes'))

app.use(errorHandler)

app.listen(port, () => console.log(`Servidor en el puerto ${port}`))
