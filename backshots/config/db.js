const mongoose = require ("mongoose")

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connect: ${conn.connection.host}`.cyan.underline)
    } catch (mistake){
        console.error(mistake)
        process.exit(1)
    }
}

module.exports= connectDB
