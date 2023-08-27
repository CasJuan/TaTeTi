const x = 'X';
const o = 'O';

let estadoJuego = 'P1';


const cuadrados = document.querySelectorAll(".cuadrado");

cuadrados.forEach((cuadrado,i) => {
    cuadrado.addEventListener("click", () => {
        cuadrado.innerText = estadoJuego === 'P1' ? x :o ;
        estadoJuego = estadoJuego === 'P1' ? 'P2' :'P1';
        revisarGanador();
    })
})

function revisarGanador(){
    const tablero = Array.from(cuadrados).map( cuadrado => cuadrado.textContent);
    console.log(tablero);

    //Revisar Horizontales
    for(let i = 0; i <= 9; i += 3){
        if( tablero[i] &&
            tablero[i] === tablero[i+1] && 
            tablero[i] === tablero[i+2]){
            return ganar([i,i+1,i+2]);
        }
    }

    //Revisar Verticales
    for(let i = 0; i <= 3; i ++){
        if( tablero[i] &&
            tablero[i] === tablero[i+3] && 
            tablero[i] === tablero[i+6]){
            return ganar([i,i+3,i+4]);
        }
    }

    //Revisar Oblicuas
    if( tablero[0] &&
        tablero[0] === tablero[4] && 
        tablero[0] === tablero[8]){
        return ganar([0,4,8]);
    }
    if( tablero[2] &&
        tablero[2] === tablero[4] && 
        tablero[2] === tablero[6]){
        return ganar([1,4,6]);
    }
}

function ganar(){
    console.log('Ganador',posicionGanadora)
}