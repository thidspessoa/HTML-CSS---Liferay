if (-1020 >= -1020) {
    document.write ('Entrou dentro do bloco if (verdadeiro)')
} else {
    document.write ('Entrou dentro do bloco else (falso)')
} 

/** O interpretador do JS entreou nesta condição e retornou o else,  pois
estamos de forma explicita que ela tem como condição false=falso.**/

//else {}

/*Na imporntancia de estabelcer operadores mais dinamicos que entram
os operadores de comparação. Por exempl:
se no caso da condição do if eu estabelecer o seguinte (2 == 7), essa
condição está comparando se dois é igual a 7, e que por vez obviamente 
resultaria em False e que por vez desvia o fluxo do documento para else.
E vice e versa*/

/*Evoluindo no nosso teste de comparação, podemos por exemplo
comparar se um valor é identico ao outro e do mesmo tipo,utilizando
o operador Identico, ex: Se utilizassemos como criterio de condição,
(2 === 2), o resultado seria true e o fluxo do documento seria o if.
Isso porque o criterio da comparação é o valor e o tipo, e como temos
dois numeros iguais e do mesmo tipo, o fluxo do documento vai para if. 
Porem se os tipos fossem diferentes (2 === '2') temos dois numeros dois
mas um é do tipo number e outro do tipo string, isso resultaria em false
e mudaria o fluxo do documento  para else */

/*O mesmo se aplica se usassemos um operador de diferente, ex:
Se usassemos a condição ('abc' != 'abc') Estariamos perguntando
se a string a esquerda é diferente da à direita, e isso
resultaria em false, pois ambas as strings são iguais, isso mudaria
o fluxo do documento para else.*/

/*No caso do operador Não idêntico, a exemplo:
como condição estabelecemos (2 !== 7), estamos perguntando
se os valores acima não são identicos, o resultado seria true e portanto
if, pois esses valores não são identicos, por mais que sejam do mesmo tipo
tem valores diferentes. */

