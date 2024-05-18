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
.use('/tiposcurso', require('./tiposcurso/index.js'))
.use('/horarios', require('./horarios/index.js'))
module.exports = app