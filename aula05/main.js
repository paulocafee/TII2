//funções identificador() {}
function ola() {
    console.log("Seja bem vindo a sala de aula!")
}
//...
//...
//...
//...
//...

// camelCase -> sempre que tiver uma nova palavra começa com MAIUSCULO
function fnValidarIdade() {
    var idade = document.getElementById("idadeUsuario").value

    console.log(idade)

    if (idade >= 18) {
        alert("Você pode dirigir!!!!")
    } else {
        alert("Você NÃO PODE dirigir!!!!!")
    }
}

function fnValidarVogal() {

    var vogal = document.getElementById("vogalUsuario").value

    switch (vogal) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            alert("VOCÊ DIGITOU UMA VOGAL!!!!!")
            break;

        default:
            alert("VOCÊ DIGITOU UMA CONSOANTE......")
            break;
    }

}