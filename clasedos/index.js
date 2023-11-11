
console.log('Hola desde el index de la clase dos');

let nombre = 'Juan';
let apellido = 'Perez';

console.log(nombre + ' ' + apellido);


console.log(`Hola ${nombre} ${apellido}`);


function Suma() {
    let a = 5;
    let b = 100;

    let resultado = a + b;

    return console.log(`El resultado de la suma es ${resultado}`);
}


Suma();


let titulo = document.getElementById('titulo');

titulo.innerText = 'Cambiamos el titulo para probar datos';

titulo.style.color = 'red';

console.log(titulo);

titulo = document.getElementById('titulo').innerText;

console.log(titulo);


console.log(titulo);
