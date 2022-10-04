/****** 
Solução If Else
*******/

var idade = prompt ('Digite sua idade:')

if (idade >= 0 && idade < 15) {
document.write('Criança.')
} else {
}

if (idade >= 15 && idade < 30) {
document.write('Jovem')
} else {
}

if (idade >= 30 && idade < 60) {
document.write('adulto')
} else {
}

if (idade >= 60) {
document.write('idoso')
} else {
}


/****** 
Solução Ternário
*******/

var idade = prompt('Digite sua idade:')
/*
var kid = (idade >= 0 && idade < 15) ? alert(Criança') : jovem
var jovem = (idade >=15 && idade < 30) ? alert('Jovem') : adulto  
var adulto = (idade >= 30 && idade < 60) ? alert('Adulto') : idoso
var idoso = (idade >= 60 && idade < 100) ? alert('Idoso') : adulto
*/




/****** 
Solução Ifs encadeados
*******/

/*
var idade = prompt('Digite a idade');

if(idade >= 0 && idade < 15){
 alert('Criança');

} else if(idade >= 15 && idade < 30){
 alert('Jovem');

} else if(idade >= 30 && idade < 60){
 alert('Adulto');

} else {
 alert('Idoso');
}
*/