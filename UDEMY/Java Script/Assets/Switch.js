/*Assim como o comando if o comando switch é um condicional do tipo
boolean. O comando switch é realmente igual ao if, mas ele é escrito
de uma forma diferente, de uma maneira mais intuitiva, e isso nos auxilia
na escrita do codigo, ele é restrito pois so conseguimos fazer operações de
comparação de identicos. Mas em situações por exemplo em que temos
um menu em que apartir deste menu definimos o fluxo da aplicação
o comando switch é interessante pois organiza um codigo d emodo mais facil a entender.
*/

var opcao = 2

/* Entre os parenteses fica o valor que nos iremos utiliza-lo como
parametro de comparação nos cases. Essa opção pode ser uma variavel
ou ate mesmo um valor pre-definido*/
switch (opcao) {
    case 1:
        //trecho de código que será executado
        break

    // você pode incluir quantos cases necessários na sua logica.
    case 2:
        document.write('ola mundo')
        break

    /*Cases visam comparar o parametro encaminhado com o switch para com
    o valor do case, essa operação é feita utilizando o operador identico.
    Ou seja, acima defnimos o valor da variavel como 2, e o valor do nosso
    case acima é dois, isso significa que ao colocar essa variavel como
    parametro de comparação, ela irá buscar o case que tenha o mesmo valor
    para executar o bloco de codigos dentro dele.*/


    /*O default seria o else do comando iF, ou seja, caso
    nenhum case seja encontrado de acordo com a instrução passada,
    ele sera executado.
    DETALHE: O default é uma instrução opcional nos podemos omitir
    o default, de tao modo que nenhum case for localizado, nada sera feito.*/
    default:
        //trecho de código que será executado
        break
    /*É importante sempre colocar o brake ao final do comando que será
    executados nos cases, e defaults. Isso porque é o brake  quem indica
    para o switch que aquele case/default chegou ao seu respectivo final.*/
    /*DETALHE:
    Caso não colocassemos o brake, o codigo iria executar
    um case apos o outro e default também, até que ele encontrasse um
    brake*/
}

document.write('<br>')
document.write('<br>')
document.write('<hr>')


/************
Prática Switch
*************/

var parametro = '2'

switch (parseInt(parametro)) 
/*Sabendo que a comparação feita pelo switch é de operador idêntico,
convertemos o tipo da nossa variavel para que ela fosse encaixada no parametro
da teste condicional, utilizamos um comando de casting para trasnformar
nossa string em numero inteiro, identico ao valor dos cases. */
{
    case 1:
        //se parametro === 1
        document.write('Parametro 1')
        break

    case 2: 
        //se parametro === 2
        document.write('Parametro 2')
        alert('Aqui está')
        break
        

    default:
        document.write('Default')
        break
        //se parametro não encontrado
}
