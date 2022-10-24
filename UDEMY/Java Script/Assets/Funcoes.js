/*Funções são blocos de códigos com um objetivo definido e atraves da
chamadas das funções nos podemos recuperar essas instruções para reutiliza-las
em diversas partes das nossas aplicações.*/

/*****************
Declaração de funções
*****************/


// Comando para iniciar funções + nome da função + parametros/argumentos
/*function calcularAreaTerreno(largura, comprimento) {
/*Sobre a definição de nomes de funções: Geralmente é indicado o uso 
de duas palavras combinadas, sendo a primeira palavra um verbo no infinitivo
e a segunda um substantivo iniciada com letra maiuscula (camellCase).
Ex: calcularArea, finalizarJogo...*/    
/*Parametros funcionam como uma entrada de dados para uma função. 
Nos podemos não passar nenhum parametro ou mesmo passar quantos parametros
desejarmos basta separalos por virugla. Vale ressaltar que os parametros são variaveis.*/
/*    var area = largura * comprimento

    return area 
}*/

/*Dentro do escopo de uma função podemos criar variaveis, criar estruturas de repetição
estrutura condicionais. Ou seja, podemos utilizar todos os recursos da linguagem de promgramação
para criação da logica da nossa função, inclusive chamando outras funções.
Por isso também falamos que funções são subprogramas do nosso programa.*/



/*****************
Tipos de funções
*****************/

//Void
/*function navegarMarVermelho (distancia, velocidade, precedencia) {

    var precedencia = distancia / velocidade

    switch (precedencia) {

        case (precedencia >= 209):
            alert('Chegara em dois meses')
            break

        case (precedencia <= 100):
            alert('Chegara em uma semana')
            break
    }

}*/

/******* Funções do tipo void são funções que apenas processam
alguma logica. Não da nenhum retorno a quem fez a chamada. ********/


/******************** Funções possuem o conceito de escopo,
isso signfica dizer que todas as variaveis e logicas que criarmos
dentro de uma função, so vão existir dentro dela, portanto so poderemos
interagiri de modo a inserir valores dentro de uma função ou puxar valores. *************/

//Return 
/*function calcularAreaTerreno(largura, comprimento) {

    var area = largura * comprimento

    return area 

}*/ 

/******* Alem de processar alguma logica ela trara o retorno de 
algum valor pre definido, ou mesmo de uma variavel de algum tipo 
para o script que efetuou a chamada da função, neste segundo caso
o script solicitante podera de ṕosse do valor retornado pela função
continuar o seu respectivo processamento ********/





/******************** Funções possuem o conceito de escopo,
isso signfica dizer que todas as variaveis e logicas que criarmos
dentro de uma função, so vão existir dentro dela, portanto so poderemos
interagiri de modo a inserir valores dentro de uma função ou puxar valores. *************/

/**************Funções não precisam necessáriamente serem declaradas antes de serem
chamadas. Pois quando o interpretador do JS vai ler o script, ele
procura em primeiro lugar as funções para depois ler o codigo.*************/






/********************
PARAMETROS 
*********************/
/*No java script, os parametros são bem flexiveis, isso significa que
os parametros de uma função não necessariamente precisam ser passados.
Em termos de quantidade de parametros no JS, podemos definir que uma função
recebera dois parametros mas eu posso passar um parametro ou nenhum parametro
sem que isso de um erro na aplicação */



/************ Fução sem parametros**************/

function calcularAreaTerreno() {
    var largura = 10
    var comprimento = 20

    return (largura*comprimento) 
}
d
console.log(calcularAreaTerreno())
