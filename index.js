var colorVerde = document.querySelector('.color-verde')
var colorRojo = document.querySelector('.color-rojo');
var colorAmarillo = document.querySelector('.color-amarillo');
var colorAzul = document.querySelector('.color-azul');

//EVENTOS Y FUNCIONES CAMBIO DE COLOR VERDE
colorVerde.addEventListener('mousedown',cambioVerdeClaro);
colorVerde.addEventListener('click',cambioVerdeOscuro)
colorVerde.addEventListener('mouseleave',cambioVerdeOscuro)

function cambioVerdeClaro(e){
    colorVerde.style.backgroundColor = '#adebad'
}

function cambioVerdeOscuro(e){
    colorVerde.style.backgroundColor = '#33cc33'
}

//EVENTOS Y FUNCIONES CAMBIO DE COLOR ROJO
colorRojo.addEventListener('mousedown',cambioRojoClaro);
colorRojo.addEventListener('click',cambioRojoOscuro)
colorRojo.addEventListener('mouseleave',cambioRojoOscuro)

function cambioRojoClaro(e){
    colorRojo.style.backgroundColor = '#ff9999'
}

function cambioRojoOscuro(e){
    colorRojo.style.backgroundColor = '#ff0000'
}

//EVENTOS Y FUNCIONES CAMBIO DE COLOR AMARILLO
colorAmarillo.addEventListener('mousedown',cambioAmarilloClaro);
colorAmarillo.addEventListener('click',cambioAmarilloOscuro)
colorAmarillo.addEventListener('mouseleave',cambioAmarilloOscuro)

function cambioAmarilloClaro(e){
    colorAmarillo.style.backgroundColor = '#ffff99'
}

function cambioAmarilloOscuro(e){
    colorAmarillo.style.backgroundColor = '#ffff00'
}

//EVENTOS Y FUNCIONES CAMBIO DE COLOR AZUL
colorAzul.addEventListener('mousedown',cambioAzulClaro);
colorAzul.addEventListener('click',cambioAzulOscuro)
colorAzul.addEventListener('mouseleave',cambioAzulOscuro)

function cambioAzulClaro(e){
    colorAzul.style.backgroundColor = '#99c2ff'
}

function cambioAzulOscuro(e){
    colorAzul.style.backgroundColor = '#0066ff'
}