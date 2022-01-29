import { Aguila, Leon, Lobo, Oso, Serpiente } from './animales.js'

import { mandarDatos } from './main.js'

let animales = [];
let img = document.getElementById('preview')
let audio = document.getElementById('player')
const registrar = document.getElementById('btnRegistrar');
let nombre = document.getElementById('animal');
registrar.addEventListener('click', async() => {
    let edad = document.getElementById('edad');
    let comentario = document.getElementById('comentarios')
    let animal;

    if (nombre.value && edad.value && comentario.value) {
        let datos = await mandarDatos.mostrar;

        if (nombre.value == 'Leon') {
            animal = new Leon(nombre.value, edad.value, datos.animales[0].imagen, comentario.value, datos.animales[0].sonido);
        } else if (nombre.value == 'Lobo') {
            animal = new Lobo(nombre.value, edad.value, datos.animales[1].imagen, comentario.value, datos.animales[1].sonido);
        } else if (nombre.value == 'Oso') {
            animal = new Oso(nombre.value, edad.value, datos.animales[2].imagen, comentario.value, datos.animales[2].sonido);
        } else if (nombre.value == 'Serpiente') {
            animal = new Serpiente(nombre.value, edad.value, datos.animales[3].imagen, comentario.value, datos.animales[3].sonido);
        } else if (nombre.value == 'Aguila') {
            animal = new Aguila(nombre.value, edad.value, datos.animales[4].imagen, comentario.value, datos.animales[4].sonido)
        }
        nombre.selectedIndex = 0;
        edad.selectedIndex = 0;
        comentario.value = ""
        img.innerHTML = `<img src=""style="background-position: center top; background-size: contain; background-repeat: no-repeat;" height="200px>`;
        animales.push(animal)
        mostrarTabla();
    } else {
        alert('Asegurese De Ingresar Todos Los Datos');
    }
});

document.getElementById('animal').addEventListener('change', function cambiarImg() {
    let nombre = document.getElementById('animal')
    if (nombre.value == 'Leon') {
        img.innerHTML = `<img src="assets/imgs/Leon.png" alt="imagen leon" width="auto" height="100%">`
    } else if (nombre.value == 'Lobo') {
        img.innerHTML = `<img src="assets/imgs/Lobo.jpg" alt="imagen lobo" width="auto" height="100%">`
    } else if (nombre.value == 'Oso') {
        img.innerHTML = `<img src="assets/imgs/Oso.jpg" alt="imagen Oso" width="auto" height="100%">`
    } else if (nombre.value == 'Serpiente') {
        img.innerHTML = `<img src="assets/imgs/Serpiente.jpg" alt="imagen Serpiente" width="auto" height="100%">`
    } else if (nombre.value == 'Aguila') {
        img.innerHTML = `<img src="assets/imgs/Aguila.png" alt="Aguila" width="auto" height="100%">`
    }
})


//Mostraremos los datos seleccionados por el usuario para poder interactuar

const mostrarTabla = () => {
    let animalesTemplate = document.getElementById('Animales');
    animalesTemplate.innerHTML = "";

    animales.forEach((animal, index) => {
        animalesTemplate.innerHTML += `
        <div class="m-2">
            <div data-fighter="${animal.getNombre()}">
                <div>
                    <div class="" style="width: 10rem;">
                        <img src="assets/imgs/${animal.getImg()}" alt="imagen animal" width="100%" height="200" onclick="verDatos(${index})" data-toggle="modal" data-target="#datos" />
                        <div class="py-1" style="background-color: grey;">
                            <div class="m-1" id="audio" onclick="sonido(${index})"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    })
};

window.sonido = (entry) => {
    let animal = animales[entry];
    let sonido = animal.getSonido();
    audio.src = `assets/sounds/${sonido}`;
    audio.play();
}

window.verDatos = (entry) => {
    let datos = animales[entry];
    let modal = document.getElementById('datosAnimal');

    modal.innerHTML = `
        <div>
            <div>
                <img src="assets/imgs/${datos.getImg()}" width="100%" height="500" />
            </div>
            <div class="text-center mt-2">
                <p class="text-white">Edad: ${datos.getEdad()}</p>
            </div>
            <div class="text-center mt-2 text-white">
                <p>Comentarios:</p>
                <p>${datos.getComentarios()}</p>
            </div>
        </div>`
}