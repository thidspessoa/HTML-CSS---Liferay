// Number >> fração
var x = Math.ceil (10.768)
/* Objeto MATH nativo do JS, (utilizamos esse objeto para agregar funcoes a tarefas matematicas)
CEIL é o metodo que utilizamos para arredondar qauisquer numeros fracionados em valores acima deles, 
ou seja, se tivermos 10.19 o numero passara a ser um numero acima do atual, que seria 11.*/
document.write (x)

document.write ('<br>')

var y = Math.floor (10.768)
// O metodo floor faz o inverso de ceil, ele arredonda para baixo, ou seja retorna o numero inteiro.
document.write (y)

document.write ('<br>')

var z = Math.round (10.468)
/*Este metodo leva em consideração o peso da fração para arredondar. Se o valor for ate 4, ele arredonda
para baixo; Se o valor for 5+ ele arredonda para cima.*/
document.write (z)

document.write ('<br>')

var e = Math.random()
// Este metodo fornece aleatoriamente um valor entre 0 e 1.
document.write (e)