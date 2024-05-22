const express = require("express")
const { productGet } = require("../Controller/e-CommerceController")

const route = express.Router()

route.get("/" , productGet )


module.exports = route