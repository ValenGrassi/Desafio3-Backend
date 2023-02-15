import fs from "fs";

export class ProductManager {
    constructor() {
        this.products = [
            ({title:"producto 1", description: "Este es un producto prueba", price: 200, thumbnail: "Sin imagen", code: 111, stock: 25, id: 1}),
            ({title:"producto 2", description: "Este es un producto prueba", price: 200, thumbnail: "Sin imagen", code: 112, stock: 25, id: 2}),
            ({title:"producto 3", description: "Este es un producto prueba", price: 200, thumbnail: "Sin imagen", code: 113, stock: 25, id: 3}),
            ({title:"producto 4", description: "Este es un producto prueba", price: 200, thumbnail: "Sin imagen", code: 114, stock: 25, id: 4}),
            ({title:"producto 5", description: "Este es un producto prueba", price: 200, thumbnail: "Sin imagen", code: 115, stock: 25, id: 5}),
            ({title:"producto 6", description: "Este es un producto prueba", price: 200, thumbnail: "Sin imagen", code: 116, stock: 25, id: 6}),
            ({title:"producto 7", description: "Este es un producto prueba", price: 200, thumbnail: "Sin imagen", code: 117, stock: 25, id: 7}),
            ({title:"producto 8", description: "Este es un producto prueba", price: 200, thumbnail: "Sin imagen", code: 118, stock: 25, id: 8}),
            ({title:"producto 9", description: "Este es un producto prueba", price: 200, thumbnail: "Sin imagen", code: 119, stock: 25, id: 9}),
            ({title:"producto 10", description: "Este es un producto prueba", price: 200, thumbnail: "Sin imagen", code: 120, stock: 25, id: 10})

        ];
    }

    getProducts(){
        return this.products;
    }
    
    getProductById(id){ 
        const producto = this.products.find(prod => prod.id === id)
        if (producto != undefined){
            console.log(producto)
        } else {
            throw new Error("Not found")
        }
        return producto;
    }
}

class Product{
    title
    description
    price
    thumbnail
    code
    stock
    id

    constructor({title,description,price,thumbnail,code,stock, id = ""}){
        this.title = title
        if (title == undefined){
            throw new Error("el titulo es obligatorio")
        }
        this.description = description
        if (description == undefined){
            throw new Error("la descripcion es obligatoria")
        }
        this.price = price
        if (price == undefined){
            throw new Error("el precio es obligatorio")
        }
        this.thumbnail = thumbnail
        if (thumbnail == undefined){
            throw new Error("la foto es obligatoria")
        }
        this.code = code
        if (code == undefined){
            throw new Error("el codigo es obligatorio")
        }
        this.stock = stock
        if (stock == undefined){
            throw new Error("el stock es obligatorio")
        }
        this.id = id
    }
}


