/*Escreva um programa que solicita o nome e a altura de 5 atletas. Ao final da entrada de dados, informe A ALTURA do atleta mais alto. */
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

document.write(`${altura2} essa é a maior altura dentre os atletas`)