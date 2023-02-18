
const getAllHotel = require('../cotrollers/hotel.js');
const express = require("express")
const router = express.Router();





//GET ALL
router.get("/", getAllHotel);



module.exports = router