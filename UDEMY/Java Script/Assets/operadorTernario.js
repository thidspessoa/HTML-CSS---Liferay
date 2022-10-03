/*O operador ternário é uma estrutura de decisão como If Else,
a diferença é que sua sintaxe é bem mais inchuta que o IF e Else,
fazendo com que o nosso codigo fique bem menos verboso por outro
lado ele é um pouco mais limitado. */


var nota = prompt('Digite sua nota:')
var faltas = prompt('Digite a quantidade de faltas:')

var media = 7
var faltas_maximas = 15


// var resultado = <condicao> ? <verdadeiro> : <falso>

var resultado = (nota >= media && faltas <= faltas_maximas) ? 'Aprovado' : 'Reprovado'
//encapsular a condição dentro de parenteses deixa mais facil a leitura

/* Na estrutura if e else nos temos uma liberdade maior  na estrurua de codigos 
pois nos podemos implementar logicas mais complexas, coisa que não 
podemos em operadores ternários, embora ele tenha uma sintaxe mais inchuta,
ele é limitado neste ponto.*/

document.write(resultado)