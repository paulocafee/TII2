// if -> condições
// switch case -> condições

// while -> laços (enquanto)

// opção 1
var contador = 1

while (contador <= 3) {
    console.log("contador: " + contador) // 1 -> 2 -> 3
    contador = contador + 1 // 2 -> 3
}

// opção 2
contador = 1
while (true) {
    console.log("contador: " + contador) // 1 -> 2 -> 3

    if (contador == 3) {
        break
    }

    contador = contador + 1 // 2 -> 3
}

// 1- faça um laço que imprima o seu nome 15 vezes;
contador = 1
while (contador <= 15) {
    console.log("Meu nome é PAULO x" + contador)

    contador = contador + 1
}

// 2- faça um laço que imprima o calculo da tabuada que foi escolhido pelo usuario.

contador = 1
var numeroUsuario = 7

while (contador <= 10) {
    
    var resultado = (numeroUsuario * contador)
    console.log(numeroUsuario + " x " + contador + " = " + resultado)
    
    contador = contador + 1

}

