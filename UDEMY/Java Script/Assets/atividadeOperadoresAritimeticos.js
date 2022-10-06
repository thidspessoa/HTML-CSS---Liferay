var nome = prompt('Digite seu nome: ')
var altura = prompt('Digite sua altura em valor inteiro (170, 173..): ')
var peso = prompt('Digite seu peso em valor inteiro: ')

altura = (parseFloat (altura))/ 100
peso = parseFloat(peso)

var m = peso / (altura * altura) 
m = m.toFixed(2)

var classificacao = ''

if (m < 16) {
    classificacao = 'Baixo peso muito grave'

} else if (m >= 16 && m <= 16.99 ) {
    classificacao = 'Baixo peso grave'

} else if (m >= 17 && m <= 18.49) {
    classificacao = 'Baixo peso'

} else if (m >= 18.50 && m <= 24.99) {
    classificacao = 'Peso normal'

} else if (m >= 25 && m <= 29.99) {
    classificacao = 'Sobrepeso'

} else if (m >= 30 && m <= 34.99) {
    classificacao = 'Obesidade grau I'

} else if (m >= 35 && m <= 39.99) {
    classificacao = 'Obesidade grau II'

} else if (m >= 40) {
    classificacao = 'Obesidade grau III'
}

document.write(nome + ', possui indice de massa corporal igual a: ' + m + '<br>' + ' sendo classificado como: ' + classificacao)

