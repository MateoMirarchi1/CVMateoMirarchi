// 0. Iniciar el juego
alert('Inicia el juego!')
alert('Elige tu ataque')

// 1. Elegir ataque de los jugadores
let player = prompt('Escribe 0 para piedra, 1 para papel y 2 para tijera')

if (player == 0) {
    alert('Elegiste piedra')
} else if (player == 1) {
    alert('Elegiste papel')
} else if (player == 2) {
    alert('Elegiste tijera')
}

// 2. Elegir ataque ALEATORIO del enemigo
let enemigo = Math.round(Math.random() * 2)

if (enemigo == 0) {
    alert('El enmigo eligió piedra')
} else if (enemigo == 1) {
    alert('El enmigo eligió papel')
} else if (enemigo == 2) {
    alert('El enmigo eligió tijera')
}


// 3. Mostrar el resultado

if (player == enemigo) {
    alert('Empate')
} else if (player == 0 && enemigo == 2) {
    alert('GANASTE')
} else if (player == 1 && enemigo == 0) {
    alert('GANASTE')
} else if (player == 2 && enemigo == 1) {
    alert('GANASTE')
} else {
    alert ('PERDISTE')
}

