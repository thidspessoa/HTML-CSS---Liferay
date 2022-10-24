var numero1 = parseFloat(prompt('Digite o primeiro numero: '))
var operacaoMat= prompt('Digite a operação aritimetica, literalmente(soma ou subtração): ')
var numero2 = parseFloat(prompt('Digite o segundo numero: '))


//calcular(numero1, numero2, operacaoMat)



var calcular = function (num1, num2, operacao) {

  if (operacao === 'soma'){
     var resultado = num1 + num2
      

  } else if ( operacao === 'subtração'){
      var resultado = num1 - num2 
     
  }

  document.write("O resultado é " + resultado)
}

calcular(numero1, numero2, operacaoMat)
console.log (calcular)





//console.log (1 === 1)



/*
var exibirSaudacao = function(nome) {
    document.write('Olá ' + nome + ', tudo bem?')
}

exibirSaudacao('Jorge')
*/