// switch case

var letraDigitada = "Q"

switch (letraDigitada) {
    case "A": // possibilidades de acerto
    case "E":
    case "I":
    case "O":
    case "U":
        console.log("é uma VOGAL")
        break
    default:
        console.log("é uma consoante!!!!")
        break
}


// criar um menu de escolha, sendo 1- entrar, 2- cadastrar, 3-editar, 0-sair

var escolhaMenu = "A"

switch (escolhaMenu) {
    case 1: // possibilidades de acerto
        console.log("entrar")
        break
    case 2:
        console.log("cadastrar")
        break
    case 3:
        console.log("editar")
        break
    case 0:
        console.log("sair")
        break
    default:
        console.log("digita certo esse numero ai!!!")
        break
}


