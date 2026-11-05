// 1. Crie um programa que leia três números e determine qual é o maior.


// var valor1 = 10
// var valor2 = 85
// var valor3 = 15
// // and &&

// if (valor1 > valor2 && valor1 > valor3) {
//     console.log("O valor 1 é o maior: ", valor1)
// }

// if (valor2 > valor1 && valor2 > valor3) {
//     console.log("O valor 2 é o maior: ", valor2)
// }

// if (valor3 > valor1 && valor3 > valor2) {
//     console.log("O valor 3 é o maior: ", valor3)
// }



// 2. Faça um programa que leia um número e verifique se ele está entre 1 e 100.

// var numero = 101

// if (numero >= 1 && numero <= 100) {
//     console.log("O numero escolhido esta entre 1 e 100")
// } else {
//     console.log("O numero escolhido NÃO esta entre 1 e 100")
// }

// 3. Crie um programa que leia uma letra e retorne se é vogal ou consoante


// var letra = "i"
// // a e i o u

// if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
//     console.log("A letra escolhida é VOGAL!")
// } else {
//     console.log("A letra escolhida é CONSOANTE!")
// }


// 4. Faça um programa que leia um número e verifique se ele está fora do range de 1 a 20.

var numero = 21

if (!(numero < 1 || numero > 100)) {
    console.log("você esta fora de 1 a 100")
} else {
    console.log("você esta entre 1 e 100")
}

// not !
var teste = false

console.log(!teste)
console.log(!-1)
console.log(!(1 == 1))