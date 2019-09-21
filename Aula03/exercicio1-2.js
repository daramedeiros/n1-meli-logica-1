/*1.2 informe também a altura média destes 5 atletas. */


let cont, nome, nome2, altura, altura2, media, soma,
altura2 = 0
nome2 = ""
cont = 0
soma = 0

while( cont < 5){
    nome = prompt("Digite seu nome:")
    altura = parseInt(prompt("Digite sua altura"))

    if (altura > altura2) {
        altura2 = altura
    }
    soma = soma + altura
    cont++

}
media = soma / 5

document.write(`${nome2} é o atleta com a altura ${altura2}. A média de altura é ${media}`)