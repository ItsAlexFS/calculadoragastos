const express = require("express")
const { getMovimientos, addMovimientos, deleteMovimientos } = require("../controllers/movimientosController")

const router = express.Router()

router.get("/", getMovimientos)
router.post("/", addMovimientos)
router.delete("/:id", deleteMovimientos)

module.exports = router
