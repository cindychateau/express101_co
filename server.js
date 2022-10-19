//npm init -y -> Nos crea el package.json
//npm install express -> Instalación de Express

const express = require('express');
const app = express();

/* Nos ayudan a interpretar y decodificar el JSON */
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

app.get("/api", (req, res) => {
    res.json({message: "Hola mundo!"});
});

const estudiantes = [
    {nombre: "Elena", apellido: "De Troya"},
    {nombre: "Juana", apellido: "De Arco"},
    {nombre: "Pedro", apellido: "Páramo"}
]

//Peticiones GET son para obtener información
app.get("/api/estudiantes", (req, res) =>{
    res.json(estudiantes);
});

app.get("/api/estudiantes/:id", (req, res) => {
    let id = req.params.id;
    res.json(estudiantes[id]);
});

//Peticiones POST son para crear nuevos registros
app.post("/api/estudiantes", (req, res) => {
    estudiantes.push(req.body);
    res.json(estudiantes);
});

//Peticiones DELETE son para eliminar registros
app.delete("/api/estudiantes/:id", (req, res) => {
    let id = req.params.id;
    estudiantes.splice(id, 1);
    res.json(estudiantes);
});

//Peticiones PUT son para actualizar registros
app.put("/api/estudiantes/:id", (req, res) => {
    let id = req.params.id;
    estudiantes[id] = req.body;
    res.json(estudiantes);
});

app.listen(8000, () => {
    console.log("Servidor está corrriendo");
});