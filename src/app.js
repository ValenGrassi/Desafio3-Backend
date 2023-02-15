import express from "express"
import { ProductManager } from "./manager/ProductManager.js"

const app = express()
const manager = new ProductManager

app.get("/products/:pid", (req,res) => {
    const idBuscado = parseInt(req.params.pid);
    const productos = manager.getProductById(idBuscado)
    res.json({
        requisitos: req.params,
        resultado: productos
    })
})

app.get("/products", (req,res) => {
    let productos = manager.getProducts()
    const limit = req.query.limit
    if (limit != undefined){
        productos = productos.slice(0, limit)
    }
    res.json(productos)
    
})

app.listen(8080, () => { console.log("conectado") })