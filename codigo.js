const boton = document.getElementById('btnEmpezar')
const rojo = document.getElementById('rojo')
const verde = document.getElementById('verde')
const amarillo = document.getElementById('amarillo')
const azul = document.getElementById('azul')
const negro = document.getElementById('negro')

const colores = [
    rojo,
    verde,
    amarillo,
    azul,
    negro
]

colores.rojo.addEventListener('click', elegirColor);
colores.verde.addEventListener('click', elegirColor);
colores.amarillo.addEventListener('click', elegirColor);
colores.azul.addEventListener('click', elegirColor);
colores.negro.addEventListener('click', elegirColor);

let secuencia = []
let inNivel = 0
let actNivel = 0
const ultNivel = 10
const numColores = 5
const espera = 750
const espMedia = 1500
const apagaColor = 200


function iniciarJuego {
    
}

function elegirColor(color) {
    alert("Has elegido el " + color)
}