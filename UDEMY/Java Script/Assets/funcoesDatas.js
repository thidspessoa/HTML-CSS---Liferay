/*Diferente do objeto math, que é utilizado para tratativa de operações matematicas,
o date é um objeto que precisa ser instanciado. */

var data = new Date ()
/*Para utilizar o objeto date, nos precisamos utilizar o metodo New Date.
O new date faz com que um novo objeto de data seja criado e atribuido a uma variavel. 
Apartir desta variavel portanto, nos temos acesso a um objeto que contem todos os detalhes de datas
do momento da instancia do objeto. */
// Todas essas informações de datas são criadas com base na data do sistema operacional ao qual o browser esta rodando.

//O ponto indica ao interpretador do JS que ele deve procurar algum recurso dentro do objeto fornecido.
document.write(data.getDate () + '/')
/*Apartir da variavel innstanciada com o valor de date, utilizando o metodo getDate, com essa instrução
nos podemos imprimir no computador o dia de forma dinamica. */


/*Abaixo foi preciso inserir hardcode uma soma, pois o metodo getMonth so considera os meses de 0 a 11 
(0 sendo janeiro e 11 dezembro) sendo assim foi preciso inplementar esta soma para que desse o mes exato. */
document.write(data.getMonth() + 1 + '/')
//recupera o mes

document.write(data.getFullYear())

//Metodo get são usados para recuperar dados
//Metodo set são usados para setar dados


document.write('<br>')
document.write('<br>')
document.write('<hr>')


/************ 
TESTE
**************/

// Adicionar / Remover dias
document.write(data.toString())
/*Acima estamos convertendo nosso objeto data em uma string, uma representação textual desta data. */
data.setDate(data.getDate() + 1)
/*Utilizamos o operador get dat para recuperar o dia ao qual queremos adicionar mais um dia. Um detalhe
é que o setDate tem inteligencia também para trabalhar com meses e anos, ou seja, dependendo da quantidade
de dias que você inserir, ele irá alterar tabém o ano e o mês. */
document.write('<hr>')
document.write(data.toString())

document.write('<hr><br>')

// Adicionar / Remover mês
document.write(data.toString())
/*Estamos utilizando o mesmo objeto, portanto teremos os valores atualizados com base na operação acima. */
data.setMonth(data.getMonth() - 11)
document.write('<hr>')
document.write(data.toString())

document.write('<hr><br>')

// Adicionar / Remover anos
document.write(data.toString())
/*Estamos utilizando o mesmo objeto, portanto teremos os valores atualizados com base na operação acima. */
data.setFullYear(data.getFullYear() * 2)
document.write('<hr>')
document.write(data.toString())

