const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    console.log("Soy el principal");
    
})

module.exports = app