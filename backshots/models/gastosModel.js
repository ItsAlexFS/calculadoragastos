const mongoose = require("mongoose")

const gastosSchema = mongoose.Schema({
    descripcion: {
        type: String,
        required: [true, "Porfavor teclea una descripcion del gasto"]
    },
    importe: {
        type: Number,
        required: [true, "Porfavor teclea el importe del gasto"]
    },
}, 
    {timestamps: true}

)

module.exports = mongoose.model("Gasto", gastosSchema)