let input = require("prompt-sync")();
let datadoevento = new Date("2022-07-12");

console.log(`
Aniversário do Kovalski
Preencha os seus dados`);
console.log(datadoevento);

let finaldoevento = new Date(2022, 6, 12, 20, 0, 0, 0);
console.log(finaldoevento);
if (datadoevento > finaldoevento) {
}

let idade = input("Informe a sua idade");
let age = parseInt(idade);

if (age >= 18) {
  console.log("Cadastro Aceito");
} else {
  console.log("Cadastro Negado");
  process.exit();
}

let vagas =  100
if (vagas>= 100) {
    console.log("Você finalizou o seu cadastro")
}
else {
    console.log("Número máximo  de vagas atingidas")
}
