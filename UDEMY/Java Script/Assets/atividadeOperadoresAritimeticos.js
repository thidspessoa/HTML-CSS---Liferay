var nome = prompt('Digite seu nome: ')
var altura = prompt('Digite sua altura em valor inteiro (170, 173..): ')
var peso = prompt('Digite seu peso em valor inteiro: ')

altura = parseFloat (altura)
altura /= 100
peso = parseInt(peso)

var m = peso / (altura * altura)
m = m. toFixed(2)

//document.write(m)
var baixo1 = 'Baixo peso muito grave'
var baixo2 = 'Baixo peso grave'
var baixo3 = 'Baixo peso'
var normal = 'Peso normal'
var sobrepeso = 'Sobrepeso'
var obesidade1 = 'Obesidade grau I'
var obesidade2 = 'Obesidade grau II'
var obesidade3 = 'Obesidade grau III'


if (m < 16) {
    alert(baixo1)

} else if (m >= 16 && m < 17) {
    alert(baixo2)

} else if (m >= 17 && m < 18) {

}


