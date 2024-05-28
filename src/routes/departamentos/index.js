const express = require('express');
const app = express();
const db = require('../../database/configdb.js');

// Obtener todos los departamentos
app.get('/', (req, res) => {
    const sql = 'SELECT * FROM departamentos';
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

// Insertar un nuevo departamento
app.post('/', (req, res) => {
    const { departamento, codigo } = req.body;

    const sql = 'INSERT INTO departamentos (departamento, codigo) VALUES (?, ?)';
    db.query(sql, [departamento, codigo], (error, resultSet) => {
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

// Actualizar un departamento existente
app.put('/:id', (req, res) => {
    const { departamento, codigo } = req.body;
    const { id } = req.params;

    const sql = `UPDATE departamentos SET departamento = ?, codigo = ? WHERE idDepartamento = ${id}`;
    db.query(sql, [departamento, codigo], (error, resultSet) => {
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

// Eliminar un departamento
app.delete('/:id', (req, res) => {
    const { id } = req.params;
    const sql = `DELETE FROM departamentos WHERE idDepartamento = ${id}`;
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
