/*Casting de tipos: Converter um tipo de dado em outro tipo de dados.
Essa operação de casting em certos contextos pode interferir no resultado
da instrução que estamos criando*/


/*****************
METODO parseInt
*******************/

/*Este metodo não aceita numeros fracionados */

//var variavel1 = prompt('Digite algum número:')
//var variavel2 = prompt('Digite outro número:')

//document.write( variavel1 + variavel2)
/*O resultado do comando acima será uma concatenação, pois
o valor de ambas variaveis está sendo captado de forma externa
e por padrão vem como tipo string, e portanto não é possivel
somar texto.. */

//variavel1 = parseInt(variavel1)
/*Nos passamos por parametro, nativo do JS, a função
parseInt, esse metodo pega uma variavel que representa
um valor numerico e retorna para nos o dado do tipo numerico.
E então fazemos uma nova atribuição deste valor, mas agora
para a propia variavel. */
//variavel2 =  parseInt(variavel2)

//console.log(variavel1)
//console.log(variavel2)

//document.write( variavel1 + variavel2)
/*Agora nos temos um resultado diferente de uma concatenação
estamos de fato somando valores, pois o tipo de dado foi alterado
para number. */

//document.write('<br>')
//document.write('<br>')
//document.write('<hr>')



/*****************
METODO paseFloat
*******************/

/*Neste metodo nos podemos receber um valor com uma fração
e atravez dele podemos transformar essa string em um valor numerico
que contenha a fração.  */

//var variavel3 = prompt('Digite algum número novamente:')
//var variavel4 = prompt('Digite outro número novamente:')

//variavel3 = parseInt(variavel3)
//variavel4 = parseFloat(variavel4)

//console.log(variavel3)
//console.log(variavel4)

//document.write( variavel3 + variavel4)*/



/*****************
METODO toString
*******************/

/*Esse caso seria se não quisessemos realizar uma soma
mas sim uma concatenação desses valores numericos transformados
em strings.Iriamos Transformar valores númericos em strings */

//var variavel5 = 10
//var variavel6 = 20

//variavel5 = parseInt(variavel5)
//variavel6 = parseFloat(variavel6)

//console.log(variavel5)
//console.log(variavel6)

//document.write( variavel5.toString() + variavel6.toString())

/*A forma de escrita do casting do tipo number para variavel do tipo
string. Ao invez de utilizar um metodo que retorna a representação
numerica de uma string, utilizamos o metodo toString que faz parte da
estrutura de um valor do tipo numerico, dessa forma podemos extrair
a forma textual desse valor numerico. */

var variavel5 = prompt('Digite algum número:')
var variavel6 = prompt('Digite algum outro número:')

variavel5 = parseFloat(variavel5)
variavel6 = parseFloat(variavel6)

console.log(variavel5 + variavel6)
console.log(variavel6)

document.write( variavel5.toString() + variavel6.toString())
/*Neste caso nos pegamos um valor externo inserido pelo usuario
atravez do comando prompt,  */