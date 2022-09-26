/* Para utilizar os elementos HTML, eles precisam estar criados
respeitando a ordem de precedência de execução. */

/* Em geral utilizamos JS para interegair com elementos html */


/* 
    Selecionar um elemento no DOM
    atualizar o valor desse elemento com uma string
*/

document.getElementById ('nome').value = 'oi'

/* Precisamos pensar que todos os elementos que vamos interagir,
precisam antes existir na arvore de elementos (DOM) do documento.
Portanto, se você quiser interagir com um elemento que esta dentro
de body mas seu script esta na head do seu codigo, não ira funcionar
pois o elemento script ira buscar no DOM, um elemento que ainda
não foi carregado pelo site e isso irá gerar um erro. Visto que
os elementos da head são gerados antes dos elementos do body,
isso significa dizer que o script executaria uma interação com um 
elemento que não existe. Isso gera um erro de precedencia. */

/** Para resolvermos isso, basta apenas em vez de incorporar nosso
script na cabeça do documento, incorpora-lo logo depois do elemento
HTML que estamos interagindo. Essa solução serve tanto para
arquivos externos e scripts diretamente dentro do HTML. **/