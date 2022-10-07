//Existem 3 escopos: global, função, bloco 

/* O escopo global é o escopo do script como um todo*/

/*O escopo de função é o escopo de um bloco de função */

/*O escopo bloco seriam aquelas instruções contidas dentro de comandos
como switch e if else. Dentro do escopo de blocos nos temos acesso
as variaveis declaradas no escopo global. */

var serie = 'Friends'

// escopo de bloco
if (true) {
    /*Abaixo fizemos um hoisting termo utilizado no JS para idicar  
    uma elevação de declaração de variavel. Apesar de declarar dentro
    de um escopo de bloco, o operador var faz com que a variavel sofra
    uma elevação para o escopo global, pois o escopo de bloco esta dentro
    do escopo global. */
    var serie2 = 'Game of Thrones'
    document.write(serie)
}

document.write(serie2)
document.write('<br>')

// A função tem acesso  as variaveis do escopo global
function x() {
    var serie3 = 'The Walking Dead'
    /*As variaveis declaradas dentro do escopo de uma função
    ficam disponiveis somente dentro dele. */
    document.write(serie)
}

x()

/*Escopo de função e escopo de bloco vizualizam variaveis do escopo global;
variaveis declaradas dentro de escopo de bloco sofrem hoisting, quando
esses blocos estão dentro do escopo global, esse hoisting vai para o
escopo global.*/

/*Se por ventura  esse escopo de bloco (if else, switch e etc..) estiver dentro
de uma função, a variavel também sofrera hoisting porem pro escopo da função. Então
o escopo global e o escopo da função são separados de modo que caso eu declare
uma variavel dentro de uma função ela não ira sofrera essa elevação para o escopo
global.*/ // Um detalhe importante é que somente as delclarações são hoisted (elevadas)