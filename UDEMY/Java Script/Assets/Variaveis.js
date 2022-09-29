/**** 
Variaveis:  Variaveis são um espaço na memoria, que permite
você armazenar informações sobre um determinado nome dado sobre a variavel.
*******/

/** 
Variaveis - tipos: Strings, number, boolean
    - *Strings: Armazenam cadeias de caracteres, ou seja, textos;*
    - *Number: Numeros positivos, negativos, inteiros, fracionados;*
    - *Boolean:  Permite armazenar estados (true / false). O objetivo
    dessas variaveis é servirem de parametro para testes condicionais,
    ou seja, em tomada de decisões dentro da lojica do nosso codigo.*
**/



// String
var texto = "Curso de JavaScript"
// Declador + nome variavel + atrubuidor + valor a ser atribuido

/** 
Em java script, o operador "=" tem o valor de atribuição.
Ou seja, pegamos o valor ao lado esquerdo do operador e 
atribuimos (armazenamos) a variavel**/

/**Para fazera a associação de uma String, ou de um texto a uma variavel
nos precisamos encapsular o conjunto de caracteres utilizando
ou aspas duplas ou aspas unicas.**/


// O operador = no java script tem o valor de atribuição.


// Number
var numeroInteiro = -7
/*Variaves numero inteiros podem ser chamadas de (Int).*/
var numeroFracionado = 10.04
/* Numeros com fração, sempre separados por ponto.
E para valores fracionados vemos muito sendo usado 
o termo (Float) ou até (Duble)*/


/** Porque não declarar o tipo da variavel dentro do codigo? 
Pois a inferencia do tipo é aplicada automaticamente
na construção da variavel, em função do valor atribuido.**/


//Boolean
var teste = true // true -> verdadeiro / false -> falso

// alert(numeroFracionado) // abrir um dialog
/* Apartir do allert, eu posso expor o valor de uma variavel*/

document.write(texto)
/* O documento na verdade é um objeto que representa o DOM. 
Todos os elementos HTML criados na pagina estão contidos dentro 
do elemento document.*/
/*O .write é um metodo, que permite escrever valores dentro do
browser*/


console.log (numeroInteiro)
/* Esse comando é muito utilizado na pratica de DEBUG. Ele testa
determinados valores apartir da opção console */



/********* Regras para declaração de variaveis:  ***************/



/*Não podem ser iniciados com números, apenas letras ou underline.
É recomendado que você utilize um nome de variavel que represente
bem o seu conteúdo da variavel.*/

/*Não podem ser utilizados caracteres especiais como “Ç”, “^”, “~”*/

/* Não podem ser iguais as palavras reservadas da linguagem.
(Como um nome de comando ou etc..)*/

/*
Declarar variaveis com a instrução “var”. Embora a instrução “var” seja opcional,
é fortemente recomendada pois a instrução var indica de forma explicita para o
interpretador do JS que a instrução a seguir representa a criação de uma variavel.
Dessa forma o interpretador não precisa testar a instrução, ele sabera de forma
explicita que se trata de uma declaração de uma variavel, e fica mais facil ate
para nos humanos interpretar o codigo.
*/