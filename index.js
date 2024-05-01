const express = require("express")
const app = express()

const apiroutes = require('./src/routes/index.js')
app.use('/cursos/v1', apiroutes);

app.set("port", 8010)
app.listen(app.get("port"), ()=>{
    console.log(app.get("port"))
    console.log("estoy listo..., hola");
})