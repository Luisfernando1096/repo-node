const express = require('express');
const app = express();
const db = require('../../database/configdb.js');

// Obtener todos los municipios
app.get('/', (req, res) => {
    const sql = 'SELECT * FROM municipios';
    db.query(sql, (error, resultSet) => {
        if (error) {
            console.log("Error: ", error);
            res.json({
                estado: false,
                mensaje: error,
                datos: null
            });
        } else {
            console.log("ResultSet: ", resultSet);
            res.json({
                estado: true,
                mensaje: "Datos cargados correctamente",
                datos: resultSet
            });
        }
    });
});

// Insertar un nuevo municipio
app.post('/', (req, res) => {
    const { municipio, codigo, idDepartamento } = req.body;

    const sql = 'INSERT INTO municipios (municipio, codigo, idDepartamento) VALUES (?, ?, ?)';
    db.query(sql, [municipio, codigo, idDepartamento], (error, resultSet) => {
        if (error) {
            console.log("Error: ", error);
            res.json({
                estado: false,
                mensaje: error,
                datos: null
            });
        } else {
            res.json({
                estado: true,
                mensaje: "Registro insertado correctamente",
                datos: resultSet
            });
        }
    });
});

// Actualizar un municipio existente
app.put('/:id', (req, res) => {
    const { municipio, codigo, idDepartamento } = req.body;
    const { id } = req.params;

    const sql = `UPDATE municipios SET municipio = ?, codigo = ?, idDepartamento = ? WHERE idMunicipio = ${id}`;
    db.query(sql, [municipio, codigo, idDepartamento], (error, resultSet) => {
        if (error) {
            console.log("Error: ", error);
            res.json({
                estado: false,
                mensaje: error,
                datos: null
            });
        } else {
            res.json({
                estado: true,
                mensaje: "Registro actualizado correctamente",
                datos: resultSet
            });
        }
    });
});

// Eliminar un municipio
app.delete('/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM municipios WHERE idMunicipio = ${id}`;
    db.query(sql, (error, resultSet) => {
        if (error) {
            console.log("Error: ", error);
            res.json({
                estado: false,
                mensaje: error,
                datos: null
            });
        } else {
            res.json({
                estado: true,
                mensaje: "Registro eliminado correctamente",
                datos: resultSet
            });
        }
    });
});

module.exports = app;
