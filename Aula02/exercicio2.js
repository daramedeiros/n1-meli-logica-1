// Sorteie dois números de 1 a 5 e peça que o usuário acerte os dois números de uma vez, não necessariamente na mesma ordem.

/**  INICIO 
    num = num_recebido
    sorte = num_aleatorio

    se num == sorte
        retorna Parabéns, você acertou!
    senão
        num2 = num_recebido
        se num == sorte
            retura Parabéns, você acertou!
        senão 
            retorna não foi dessa vez
 FIM **/

 const num = parseInt(prompt("Digite um número de 1 a 5"))

 const sorte = Math.floor(Math.random()* 5 + 1)

 if ( num == sorte ) {
     alert("Parabéns, você ACERTOU!")
 } else {
     const num2 = parseInt(prompt("Digite um número de 1 a 10"));
     console.log("else da sorte" )
 }
     if(num2 == sorte) {
         alert("Parabéns, você ACERTOU!")
    } else {
         alert("Não foi dessa vez! =/")
    }