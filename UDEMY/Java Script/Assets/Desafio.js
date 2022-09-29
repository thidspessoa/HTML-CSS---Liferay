var a = 10
var b = 20
var c = null //variavel auxiliar utilizada na logica

document.write('A: ' + a +'<br />')
document.write('B: ' + b +'<br />')
document.write('C: ' + c +'<br />')

document.write('<hr />')

// lógica de inversão dos valores das variáveis A e B


c = a
a = b
b = c
c = null

console.log(c)
console.log(a)
console.log(b)
console.log(c)


//  Inversão
document.write('A: ' + a +'<br />')
document.write('B: ' + b +'<br />')
document.write('C: ' + c +'<br />')