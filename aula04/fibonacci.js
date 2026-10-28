// 1. Imprima os primeiros 10 números da sequência de Fibonacci utilizando um laço de repetição.


var antecessor = 0
var anterior = 1


console.log(antecessor)
console.log(anterior)

for (let i = 2; i < 10; i++) {
    atual = antecessor + anterior

    antecessor = anterior
    anterior = atual

    console.log(atual)
}

var i = 2
while (i < 10) {
    atual = antecessor + anterior

    antecessor = anterior
    anterior = atual

    console.log(atual)

    i++
}