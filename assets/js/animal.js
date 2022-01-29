export class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
        let _nombre = nombre;
        let _edad = edad;
        let _img = img;
        let _comentarios = comentarios;
        let _sonido = sonido;
        this.getNombre = () => _nombre;
        this.getEdad = () => _edad;
        this.getImg = () => _img;
        this.getComentarios = () => _comentarios;
        this.setComentarios = (nuevo_comentario) => _comentarios = nuevo_comentario;
        this.getSonido = () => _sonido;
    }
    get nombre() {
        return this.getNombre();
    }
    get eda() {
        return this.getEdad();
    }
    get img() {
        return this.getImg()
    }
    get comentarios() {
        return this.getComentarios();
    }
    set comentario(nuevo_comentario) {
        this.setComentarios(nuevo_comentario)
    }
    get sonido() {
        return this.getSonido();
    }
}