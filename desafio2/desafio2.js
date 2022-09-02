const fs = require('fs');

class Contenedor {
    constructor(archivo){
        this.archivo = archivo;
    }

    // * recibe objeto, lo guarda, devuelve el id asignado. 
    async save (articulo){
        const data = await fs.promises.readFile("./desafio2/productos.json", "utf-8")
        const productos = JSON.parse(data)
        const id = productos.length + 1
        articulo.id = id;
        productos.push(articulo)
        const prodString = JSON.stringify(productos)
        await fs.promises.writeFile("./desafio2/productos.json", prodString)
        return productos;
    }

    //* recibe un id, devuelve el objeto con ese id , o null si no esta.
    async getById (id){
        const data = await fs.promises.readFile("./desafio2/productos.json", "utf-8")
        const productos = JSON.parse(data)
        const prod = productos.find((prod)=> prod.id == id)
        if (prod){
            return prod
        } else {
            return "No existe un objeto con ese id"
        }
    }

    //* devuelve array con objetos presentes en el archivo
    async getAll() {
        const data = await fs.promises.readFile("./desafio2/productos.json", "utf-8")
        return JSON.parse(data)
    }

    //* elimina del archivo el objeto con el id buscado 
    async deleteById(id) {
        const data = await fs.promises.readFile("./desafio2/productos.json", "utf-8")
        const productos = JSON.parse(data)
        const borrado = productos.filter( (x) => x.id != id )
        return borrado;
    }

    //* elimina todos los objetos presentes en el archivo
    async deleteAll (){
        const data = await fs.promises.readFile("./desafio2/productos.json", "utf-8")
        const productos = JSON.parse(data)
        const prodString = JSON.stringify([])
        await fs.promises.writeFile("./desafio2/productos.json", prodString)
        return productos;
    }
}

async function start(){
    const db = new Contenedor("desafio2")

    //* recibe un objeto y lo guarda en el archivo
    db.save({title: "Remera basica negra", price: 1400})

    //* devuelve todo el array
    const prods = await db.getAll()
    console.log(prods)

    //* devuelve el objeto del id indicado
    const unicoProd = await db.getById(6)
    console.log(unicoProd) 

    //*borra el objeto indicado (id)
    const borradoId = await db.deleteById(4)
    console.log(borradoId)

    //* borrar todo el contenido de array  -- comentar para que lo demas funcione.
    const borradoAll = await db.deleteAll()
    console.log(borradoAll)
}   
start()