const senha = 10 //const -> CONSTANTE

// debugger
// debug

// var contador = 0
// function fnExemplo() {
//     // console.log("oi eu sou uma function!")
//     let contador = 1
//     while (contador <= 3) {
//         console.log("contagem: " + contador)
//         contador++
//     }

// }


var testeValor = 5
let testeValorLet = 10

// ...
// ...
// ...
// ...

var testeValor = 10
testeValorLet = 20


function fnCalculoImportante() {
    // let só existe nesse contexto
    console.log("Aqui eu tenho um calculo importante!")
    valorImportante = 10

    console.log("valorImportante: " + valorImportante)
}

function fnCalculoImportanteUrgente() {
    // só existe nesse contexto
    console.log("Aqui eu tenho um calculo importante!")
    let resultado
    let valorImportante = 90

    if (valorImportante == 90) {
        resultado = "Deu certo!"
    }

    console.log(resultado);

    console.log("valorImportante: " + valorImportante)
}


console.log(resultado);







