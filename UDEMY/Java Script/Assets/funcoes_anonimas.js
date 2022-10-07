/*Funcoes anonimas são funções que não possuem nome sua sintaxe e seus
funcionamento é identico ao de uma função comum.*/

//sintaxe função anonima

/*
function () {
    document.write('Olá' + ??? + ', tudo bem?')
}
*/


// Wrapper
/*A capacidade associar a variaveis funções. A nossa variavel
passou a guardar uma referencia a função.*/

var exibirSaudacao = function(nome) {
    document.write('Olá ' + nome + ', tudo bem?')
}

exibirSaudacao('Jorge')

/*Embora as funções anonimas não pareçam tão convencionais, elas são
constantemente utilizados no JS. Isso porque o JS incorpora um conceito muito
forte de utilização de funções de callback, que nada mais é:
a passagem de funções como parametros para outras funções*/

