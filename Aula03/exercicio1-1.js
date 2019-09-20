/*Complemente o exercício anterior agora informando o NOME e a ALTURA do atleta mais alto. */


let cont, nome, nome2, altura, altura2
altura2 = 0
nome2 = ""
cont = 0


while( cont < 5){
    nome = prompt("Digite seu nome:")
    altura = parseInt(prompt("Digite sua altura"))

    if (altura > altura2) {
        nome2 = nome
        altura2 = altura
    }

    cont++
}

document.write(`${nome2} é a atleta com a maior altura com ${altura2} metros`)