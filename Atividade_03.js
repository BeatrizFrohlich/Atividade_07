let ganhoAnual = 0;
let gastoAnual = 0;

for (let i = 1; i <= 12; i++) {

    let ganho = parseFloat(prompt("Digite o ganho bruto do mês " + i + ":"));
    let gasto = parseFloat(prompt("Digite os gastos do mês " + i + ":"));

    ganhoAnual = ganhoAnual + ganho;
    gastoAnual = gastoAnual + gasto;
}

let saldo = ganhoAnual - gastoAnual;

console.log("Ganho bruto anual: " + ganhoAnual);
console.log("Gasto anual: " + gastoAnual);
console.log("Saldo financeiro anual: " + saldo);

if (saldo > 0) {
    console.log("A empresa teve Lucro.");
} else if (saldo < 0) {
    console.log("A empresa teve Prejuízo.");
} else {
    console.log("A empresa ficou no zero a zero.");
}