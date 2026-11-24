// [] -> significa um array
// os valores são separados por virgula(,)
let nomes = ["Isa", "Victor", "Pedro", "Samuel", "Geovana"]

console.log(nomes)
console.log(nomes[2]) // consulta de posição (obs. a contagem de array começa em 0)

nomes[4] = "Caleb" //substituindo valor em posição especifica.

console.log(nomes)

console.log(nomes.length) // conta quantas informações eu tenho no meu array

nomes[nomes.length] = "Geovana"

console.log(nomes)

nomes.push("Nicolas") // push adiciona mais um valor ao FINAL do array
console.log(nomes)
nomes.unshift("Ro") // unshift adiciona um valor no COMEÇO do array
console.log(nomes)

// remover valores
// .pop remove o ultimo valor do array
// .shift remove o primeiro valor do array
// se eu quiser extrair a informação eu posso colocar dentro de uma variavel
let ultimoNome = nomes.pop()
console.log(nomes)
console.log(ultimoNome)

let primeiroNome = nomes.shift()
console.log(nomes)
console.log(primeiroNome)

// atividades
// 1 faça uma lista com o nome de 5 colegas 
// 2 adicione no final dessa lista o nome de +1 colegas
// 3 adicione no começo dessa lista o nome de um pet
// 4 adicione agora no final da lista o nome de mais 2 a 5 colegas
// 5 mostre a informação que esta salva no 4 posição
// 6 extraia a primeira infomação e salve na variavel PETs

// e se eu precisar validar que uma infomação existe em um array?
console.log(nomes.includes("Samuel"))

// e se eu precisar saber em que posição (indice) essa infomação esta?
console.log(nomes.indexOf("Nicolas"))

// e se eu precisar percorrer todo o array?
// "=>" arrow function usado para definir uma função anonima
// () => {} declaração da função anonima
nomes.forEach((linha, contador) => {
    console.log("O " + (contador + 1) + "º registro é: " + linha)
})