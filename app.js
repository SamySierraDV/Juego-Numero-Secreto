let listaNumerosSorteados = [];
let numeroMax = 10;
let numeroAleatorio = generarNumeroAleatorio(); 
let intentos = 1 ;
let botonIntentar = document.getElementsByClassName('container__boton');
let botonNuevoJuego = document.getElementById('reiniciar');
let input = document.getElementsByClassName('container__input');


function asignarTextoElementos(elemento, texto) {
    let  elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function generarNumeroAleatorio() {
    /*si el numero generado esta en la lista de numeros ya ordenados, entonces se genera un nuevo numero aleatorio*/
    let numeroGenerado = Math.floor(Math.random() * numeroMax) + 1;

    if (listaNumerosSorteados.length == numeroMax) {
        asignarTextoElementos('Ya se sortearon todos los numeros posibles');
    }
    else{ 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroAleatorio();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
             return numeroGenerado;
        }
}
}

function verificarIntento() {
   
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(numeroUsuario); 
/*if (numeroUsuario > 10 || numeroUsuario < 1) {
   alert('El número debe estar entre 1 y 10');*/
if (numeroUsuario === numeroAleatorio) {
    asignarTextoElementos('p' , `Felicitaciones, has acertado el número ${numeroAleatorio}, en ${intentos} intentos`);
    limpiarInput();
    document.getElementById('reiniciar').removeAttribute('disabled');
}
//cuando el usuario  no acertó el número
else {
    if(numeroUsuario > numeroAleatorio) {
    asignarTextoElementos('p' , `El numero secreto es menor, intenta de nuevo`);
} else{
    asignarTextoElementos('p' , `El numero secreto es mayor, intenta de nuevo`);
} 
intentos++;
limpiarInput();
}
}

function limpiarInput() {
    document.getElementById('valorUsuario').value = '';
    return;
}

function condicionesIniciales () {
    asignarTextoElementos('h1', 'Juego de número Secreto');
    asignarTextoElementos('p', 'Debes adivinar el número secreto');
    numeroAleatorio = generarNumeroAleatorio();
    intentos = 1;

}

function reiniciarJuego() {
    limpiarInput();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    
}



