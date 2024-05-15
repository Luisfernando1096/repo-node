const express = require('express');
const app = express()
const db = require('../../database/configdb.js')

app.get('/', (req, res) => {
    const sql = 'SELECT * FROM cursos'
    db.query(sql, (error, resultSet) => {
        if (error) {
            console.log("Error: ", error);
            res.json({
                estado: false,
                mensaje: error,
                datos: null
            })
        }

        console.log("ResultSet: ", resultSet);
        res.json({
            estado: true,
            mensaje: "Datos cargados correctamente",
            datos: resultSet
        })
    })
});

app.post('/', (req, res) => {
    const {
        curso,
        precio,
        idTipoCurso,
        fechaInicio,
        lugar,
        modalidad,
        fechaFinalizacion,
        instructor
    } = req.body

    const sql = 'INSERT INTO cursos SET curso = ?, precio = ?, idTipoCurso = ?, fechaInicio = ?, lugar = ?, modalidad = ?, fechaFinalizacion = ?, instructor = ?'
    db.query(sql, [curso, precio, idTipoCurso, fechaInicio, lugar, modalidad, fechaFinalizacion, instructor], (error, resultSet) => {
            if (error) {
                console.log("Error: ", error);
                res.json({
                    estado: false,
                    mensaje: error,
                    datos: null
                })
            }

            res.json({
                estado: true,
                mensaje: "Registro insertado correctamente",
                datos: resultSet
            })
        })
});

app.put('/:id', (req, res) => {
    const {
        curso,
        precio,
        idTipoCurso,
        fechaInicio,
        lugar,
        modalidad,
        fechaFinalizacion,
        instructor
    } = req.body

    const { id } = req.params
    const sql = `UPDATE cursos SET curso = ?, precio = ?, idTipoCurso = ?, fechaInicio = ?, lugar = ?, modalidad = ?, fechaFinalizacion = ?, instructor = ? WHERE idCurso = ${id}`
    console.log("SQL - CONSULTA: ", sql);
    db.query(sql, [curso, precio, idTipoCurso, fechaInicio, lugar, modalidad, fechaFinalizacion, instructor], (error, resultSet) => {
        if (error) {
            console.log("Error: ", error);
            res.json({
                estado: false,
                mensaje: error,
                datos: null
            })
        }

        res.json({
            estado: true,
            mensaje: "Registro actualizado correctamente",
            datos: resultSet
        })
    })
});

app.delete('/:id', (req, res) => {
    const { id } = req.params
    const sql = `DELETE FROM cursos WHERE idCurso = ${id}`
    console.log("SQL - CONSULTA: ", sql);
    db.query(sql, [id], (error, resultSet) => {
        if (error) {
            console.log("Error: ", error);
            res.json({
                estado: false,
                mensaje: error,
                datos: null
            })
        }

        res.json({
            estado: true,
            mensaje: "Registro eliminado correctamente",
            datos: resultSet
        })
    })
});


module.exports = app