/*1.3 não restrinja a entrada de dados a apenas 5 atletas. Agora após a inclusão de cada atleta o programa deve perguntar ao usuário se deseja incluir outro. A resposta é dada com (S/N). O programa continua mostrando o nome do mais alto, e a altura média.*/

let cont, nome, nome2, altura, altura2, media, repete, repete
altura2 = 0
nome2 = ""
altura2 = 0 
repete = true


while( cont < 5){
    nome = prompt("Digite seu nome:")
    altura = parseInt(prompt("Digite sua altura"))

    if (altura > altura2) {
        altura2 = altura
    }
    resposta = prompt('S/N'){
        if ( rep === s){
            repete = true
        } else {
            repete = false
        } media = soma / 5
    }

}
media = soma / 5

document.write(`${nome2} é o atleta com a altura ${altura2}. A média de altura é ${media}`)