const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    console.log("Soy el principal");
    res.json({
        estado: true,
        mensaje: "Mensaje",
        datos: []
    }
    );
    
})
.use('/cursos', require('./cursos/index.js'))
module.exports = app