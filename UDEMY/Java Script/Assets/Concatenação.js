/* Concatenar é unificar os valores textuais da nossas variaveis
de forma a montar strings ou textos personalizados.*/

/***document.write('<h1>Olá José, tudo bem?</h1>')***/
/* Você utiliza esse metodo acima para interagir com o usuario
e o documento para acessar o corpo do site. */

/* Nos inserimos esse texto de mod HardCode:
Diretamente no corpo do site, sem deixar a possibilidade
de ter alguma dinamica pra modificar o nome que sera exibido.
Exceto usando alguns metodos*/


/***var idade = 18***/
/* O codigo vai traduzir este valor numero em um valor textual
e inserir na função. */
/***var nome = 'Maria'***/
/* Para trazer dinamica ao nome, nos criamos uma variavel
ao qual vamos trazer um nome diferente do inserido de forma 
HardCode. E utilizando concatenação vamos juntar a variavel ao
restante do texto, que já é uma string, como abaixo..*/

/****document.write('<h1>Olá ' +  nome  + ', tudo bem? Estou vendo aqui que você possui ' + idade + ' anos.</h1>')****/
/* Para fazer o recurso de concatenação, precisamos isolar as strings
que serão concatenadas, utilizando aspas únicas.
E utilizar o operador "+" que é responsavel por efetuar a
caoncatenação, adicionando a variavel e ao final utilizando
o operador "+" novamente.*/

/***** 
Um adendo IMPORTANTE é que o operador "+" pode ser utilizado para 
fazer somas, dependendo de seu contexto, ou seja, dependendo de como
utilizamos, o java script ira interpretar como uma soma e não uma 
concatenação.
*******/



/** O Prompt sempre recebera os valores como sendo Strings
Para testar essa informação você pode utilizar um console.log**/
var nome = prompt('Digite o seu nome:')
var idade2 = 50
var idade = prompt ('Digite a sua idade:')
/* Usando esse valor de variavel acima,
utilizamos o prompt do browser para que o usuario
possa inserir valores e que eles interajam diretamete
com o script.  O resultado será o mesmo do dialog,
com a diferança que o usuario podera inserir o valor desejado.*/

console.log(idade)
console.log(idade2)

document.write('<h1>Olá ' +  nome  + ', tudo bem? Estou vendo aqui que você possui ' + idade + ' anos.</h1>')