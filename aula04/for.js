// for -> para

//  declaração ; condição; incremento
// for (var i = 1; i <= 15; i++) {
//     console.log("contador: " + i)
// }

for (var i = 1; i <= 30; i++) {
    if (i == 7) {
        continue
    }
    if (i == 14) {
        continue
    }
    console.log("valor atual: " + i)
}

// USANDO O FOR!!!!
// 1- faça um laço que imprima o seu nome 15 vezes;
for (var i = 1; i <= 15; i++) {
    console.log("Meu nome é PAULO SANTOS x" + i)
}

// 2- faça um laço que imprima o calculo da tabuada que foi escolhido pelo usuario.
var numeroUsuario = 4
for (var i = 1; i <= 10; i++) {
    var resultado = (numeroUsuario * i)
    console.log(numeroUsuario + " x " + i + " = " + resultado)

}