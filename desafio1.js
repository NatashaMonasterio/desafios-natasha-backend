class Usuario {
    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = [];
        this.mascotas = [];
    }

    getFullName(){
        console.log(`Hola soy ${this.nombre} ${this.apellido}` )
    }

    addMascota(nuevaMascota){
        this.mascotas.push(nuevaMascota)
    }

    countMascotas () {
       console.log(`Tengo en total: ${this.mascotas.length} mascotas`)
    }

    addBook (Nombre, autor){
        this.libros.push({Nombre: Nombre , Autor: autor})
    }
    
    getBookNames() {
        let nameLibros = [];
        this.libros.map((nombreLibro)=>{ 
            nameLibros.push(nombreLibro.Nombre) 
        })
        console.log("Mis libros favoritos son: ", nameLibros)
    }
}

let usuario = new Usuario ('Natasha', 'Monasterio')

usuario.getFullName()
usuario.addMascota('Jazmin')
usuario.addMascota('Safiro')
usuario.countMascotas()
usuario.addBook("Harry Poter", "Pedro")
usuario.addBook("El libro de la selva", "Juan")
usuario.getBookNames()

