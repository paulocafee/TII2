// Crie uma função que receba um número e verifique se ele é par ou ímpar. 
// Ao final, exiba uma mensagem informando o resultado. 

// perguntar 1 numero
// identificar se é par ou impar
// responder com a resposta

function fnValidarParImpar(numero) {
    // dentro eu coloco a logica

    if (numero % 2 == 0) {
        console.log("O numero informado é PAR")
    } else {
        console.log("O numero informado é IMPAR")
    }
}

// Crie uma função que receba um número inteiro positivo e calcule a
// soma de todos os números de 1 até o número informado, utilizando um laço
// de repetição. Exemplo: se o número informado for 5, deverá calcular 1 + 2 +
// 3 + 4 + 5 e exibir 15.

function fnCalculoSequenciaNumerica(numero) {
    // é uma opção de declaração
    let valorSomado = 0, contador = 0

    if (numero <= 0) {
        console.log("Digite um valor maior que 0")
        return false
    }

    while (contador <= numero) {
        valorSomado = valorSomado + contador
        contador++
    }

    console.log("O valor final é: " + valorSomado)
}

// Crie uma função que receba o valor total de uma conta de restaurante
// e a quantidade de pessoas que irão dividir o pagamento. A quantidade de
// pessoas deverá ser opcional, considerando 2 pessoas caso não seja
// informada. Ao final, exiba quanto cada pessoa deverá pagar.


function fnDividirSaldoMesa(totalConta, qntdPessoas = 2) {
    let totalDivisao = 0

    totalDivisao = totalConta / qntdPessoas

    console.log(`O valor total de R$ ${totalConta} divido em ${qntdPessoas} pessoas é R$ ${totalDivisao}`)
}




