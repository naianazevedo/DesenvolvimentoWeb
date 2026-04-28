//Exemplo de Estrutura Controle de Fluxo
//Estrutura "if"
let pecaPreco=10;
let pecas=prompt("Qual a quantidade de peças encomendadas?");
if (pecas>0){
    let total=pecaPreco*pecas;
    console.log("O valor total da encomenda é: R$"+total);
}

//Estrutura "if...else"
let seEstaPronto=confirm("Está pronto?");
if(seEstaPronto){
  console.log("Usuário pronto");
} else {
  console.log("Usuário não está pronto");
}

//Estrutura "if...else if"
let idade = prompt("Qual a sua idade?");
if(idade<11){
  alert("Você é uma criança!");
}
else if(idade>11 && idade<=14){
  alert("Você é adolescente!");
}
else if(idade>21 && idade<=60){
  alert("Você é adulto!");
}
else{
  alert("Você é idoso!");
}
//Estrutura switch...case
let estado=prompt("Qual seu estado?");
switch(estado){
    case"RS":
    alert("Rio Grande do Sul");
    break;
    case"SC":
    alert("Santa Catarina");
    case"MT":
    alert("Mato Grosso");
  default:
    alert("Não é um estado válido");
}

//Laço de repetição "for"
for (let i=0;i<10;i++){
  console.log(i);
}

//Laço de repetição "while"
//let num=0;
while(num<90){
  console.log(num);
  num+=10;
}

let continua=false;
let contador=1;
while(!continua){
  continua=!confirm(`[${contador++}] Mais um loop?`);
}
true

//Laço de repetição "do...while"
let num=0;
do{
  console.log(num);
  num+=10;
}
while(num<90);