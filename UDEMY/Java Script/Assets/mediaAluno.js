
/** Repare que o prompt automaticamente retorna o valor inserido
como uma string, portanto a condição está desta maneira:('number' >= media)
isso significa que estamos comparando uma string com um numerico. **/
var nota = prompt('Digite sua nota:')
var media = 7



if (nota >= media) {
    document.write ('Você passou de ano!')
} else {
    document.write ('Você foi reprovado!')
} 

/*O codigo recebe o valor da nota do aluno e compara se ele é
maior ou igual a media, e retorna se o aluno foi reprovado, com
base na condição que criamos. */

/*** Um detalhe importante é que o JS tem a inteligencia para transformar
strings que representam valores numericos em uma inforamção numerica, dentro
de um contexto de uma comparação com números. ***/

/**  Nessesa casos é muito importante ficar de olho na expressão
de compração porque se a expressão for de indentico ou não indentico,
nesse caso precisariamos levar em conta o tipo da variavel, ex:
se tivessemos uma condição ('7' === 7), teriamos um retorno de true
ou seja, reprovado, e dentro do nosso contexto mesmo a media a ser
atingida seja 7, daria reprovado pois os tipos das variaveis são diferentes.**/
