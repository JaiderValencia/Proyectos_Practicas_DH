//requerimos a express
const express = require('express')

//Crear aplicación express
const app = express();

//Requerimos a path
const path = require('path')

//almacenamos la dirección de la carpeta public con una dirección absoluta
const publicPath = path.resolve(__dirname, "./public");

//le indicamos a express que debe usar nuestros archivos estaticos
app.use(express.static(publicPath))

//le indicamos a express que debe hacer cuando se ingresa a la carpeta raíz
app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"))
})

//conectamos con el puerto 3000
app.listen(3000, () => {
    console.log("conectado")
})