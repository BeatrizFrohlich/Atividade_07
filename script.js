function atividade01(){
    let soma = 0;
    let continuar = true;

    while(continuar){
        let numero = parseFloat(prompt("Digite um numero (ou digite '0' para encerrar):"));

        //soma = soma + numero;
        //soma += numero;

        if(isNaN(numero)){
            alert("Por favor, digite um numero valido!");
        } else{
            soma += numero;
            console.log(soma);
        }

        continuar = confirm("Deseja adicionar mais um numero?");
    }
    alert("A Soma dos numeros é:" + soma);
}

//atividade01();

function atividade02(){
    for (let i = 10; i >= 0; i--) {
    console.log(i);
    }

    console.log("Lançamento realizado!");
}

//atividade02()

function atividade03(){
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
}

//atividade03()

function atividade04(){
   let numeros = [];

    for (let i = 1; i <= 4; i++) {
    let valor = parseInt(prompt("Digite o " + i + "º número inteiro:"));
    numeros.push(valor);
    }

    numeros.sort(function(a, b) {
    return b - a;
    });

    console.log("Números em ordem decrescente:");
    console.log(numeros); 
}

//atividade04()
