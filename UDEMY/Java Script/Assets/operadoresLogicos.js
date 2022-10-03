/* Operadores logicos são conectores que permitem conectar operações
de comparação (IF e ELSE, nos permite juntar os resultados das comparações
true e false, para encontrar um segundo resultado dependendo dos operadores
logicos. Com os operadores logicos nos adicionamos mais dinamicas 
aos nossos testes condicionais, podendo adicionar diversas camadas de
possibilidades em um mesmo teste*/


/************
Tipos de Operadores Lógicos
*************/

// E (&&) - Verdadeiro se todas as expressões forem verdadeiras 

// OU (II) - Verdadeiro se pelo menos uma das expressões for verdadeira
/*Representado pelo simbolo pay per duas vezes, que retorna
true se pelo menos uma das expressões conectadas por esse operador
logico for verdadeira.*/

// Negação (!) - Inverte o resultado da expressão de comparação
/*Ele inverte o resultado da expressão de comparação, se a expressão
de comparação retornar true, utilizando este operador, você
inverte para true e vice e versa.*/




/************
PRATICA
*************/

/* && */

 
// true && true = true
/*Todas as comparações conectadas por esse operador são
verdadeiras. */

/*if (2 == 2 && 3 >= 1) {
    document.write('Verdadeiro')
}
*/

/*Conectando operadores de comparação é possivel criar camadas mais
complexas e atuar sobre o resultado dessas camadas de comparação
para ter um nivel maior em termos de testes dentro da nossa operação.*/


// true && true && false = false

if (2 == 2 && 3 >= 1 && 'a'== 'b') {
    document.write('Verdadeiro')
} else {
    document.write('Falso')
}
/*Quando utilizado, o operador && so retornara true, caso todas
os resultados de operações de comparação envolvidas na expressão logica forem
true. */


document.write('<br>')
document.write('<hr>')
document.write('<br>')

/* || */

// true || true || false = true
if (2 == 2 || 3 >= 1 || 'a'== 'b') {
    document.write('Verdadeiro')
} else {
    document.write('Falso')
}
/*O operdador || precisa de que apenas uma das expressões retorne true para poder
retornar o bloco de codigos do IF(true). E ele so retornara false, caso
todos as expressões retornem false. */

document.write('<br>')


// false || true || false = true
if (4 == 2 || 0 >= 1 || 'a'== 'b') {
    document.write('Verdadeiro')
} else {
    document.write('Falso')
}

document.write('<br>')
document.write('<hr>')
document.write('<br>')

/* ! */
if (!(10 >= 2)) {
    document.write('Verdadeiro')
} else {
    document.write('Falso')
}
/*Aqui invertemos o resultado da expressão, 10 é maior que 2 correspondendo
a comparação da expressão, o que nos retorna true, porem utilizando o operador logico
! o resultado é ivertido para false. */


document.write('<br>')
document.write('<hr>')
document.write('<br>')




/******** Nota aluno ******/

var nota = prompt('Digite sua nota:')
var faltas = prompt('Digite a quantidade de faltas:')

var media = 7
var faltas_maximas = 15



if (nota >= media && faltas <= faltas_maximas) {
    document.write ('Você passou de ano!')
} else {
    document.write ('Você foi reprovado!')
} 

