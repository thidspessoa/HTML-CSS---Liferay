/* Ambos valores são considerados nativos, ou seja,
assim como os demais valores, são nativamente suportados
pelo JS */

//null repressenta a ausencia intencional de um valor
var teste= null 



//undefined indica que a variavel apesar de declarada, de fato não possui nenhum valor.
/*var teste2= undefined*/
var teste2
/*Ambas as formas são variaveis undefined. */

console.log (teste)
console.log (teste2)

/*Em qualquer uma dessas situações, essas variaveis podem ser trabalhadas
ou seja, podemos agregar valor a elas. O que muda, e que é importante
ter em mente, é que são valores diferentes, por isso em testes condicionais
é importante considerar se a variavel é intencionalmente vazia (null)
ou se ela tem um valor inexistente (undefenid*/

/*Funções podem retornar o valor null, desde que essas funções sejam
encontradas pela interpretação do java script e em sua respectiva
logica retorne este tipo de valor.*/

/*Já undefined está mais caracterizado para situações onde 
tentamos acessar um recurso que está indisponivel.
Ex: Se tentassemos no navegador acessar um recurso que está
indisponivel, nos teriamos um retorno de undefined, isso
pois naturalmente este elemento não existe.*/




/***************** Alterando valores de variaveis *******************/

/*Inicialmente essa variavel continha o valor de null, mas uma nova
operação atribuiu a ela, um novo valor que substitui o valor
contindo dentro dela.*/
teste = 'Valor modificado com sucesso'
/*A infenrencia de tipo da variavel no JS, é automatica. Então
se tinha um valor null, ela passou a ser uma string. */

console.log(teste)

/*Na dinâmica das variaveis, nos podemos sempre que necessário
alterar o valor de uma variavel que já tenha um valor. */

teste = 135
console.log (teste)
/*Utilizasmos o console.log para printar na ferramenta de debug
do browser, o nosso resultado. Perceba que a inteligencia
de debug do google, modifica a cor e o estilo dos valores
para justamente mostrar a diferença entre os tipos de variaveis. */

document.write
// Objeto + metodo