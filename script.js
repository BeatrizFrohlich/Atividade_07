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

function atividade05(){
    let numero = parseInt(prompt("Digite um número inteiro:"));

    console.log("Número digitado:", numero);

    if (numero % 2 === 0) {
        console.log("O número digitado é PAR");

        numero = numero + 1;
    } else {
        console.log("O número digitado é ÍMPAR");

        numero = numero + 1;
    }

    console.log("Número transformado:", numero);

    if (numero % 2 === 0) {
        console.log("O número transformado é PAR");
    } else {
        console.log("O número transformado é ÍMPAR");
    }

}

//atividade05()

function atividade06(){
    let letra = prompt("Digite uma letra do alfabeto:");

    console.log("Letra digitada:", letra);

    if (letra === "a" || letra === "A" || letra === "e" || letra === "E" || letra === "i" || letra === "I" || letra === "o" || letra === "O" || letra === "u" || letra === "U") {
        console.log("A letra", letra, "é uma VOGAL");
    } else {
        console.log("A letra", letra, "é uma CONSOANTE");
    }
}

//atividade06()

function atividade07(){
    let codigo = prompt(
    " PICOLÉTERIA \n" +
    "a - Chocolate - R$ 1,50\n" +
    "b - Morango - R$ 2,50\n" +
    "c - Creme - R$ 2,50\n" +
    "d - Manga - R$ 3,20\n" +
    "e - Melancia - R$ 3,40\n" +
    "f - Vanilla Ice - R$ 3,00\n" +
    "g - Céu Azul - R$ 3,60\n" +
    "h - Brownie - R$ 4,00\n" +
    "i - Hawaiano - R$ 5,00\n\n" +
    "Digite o código do sabor:"
    );

    if (codigo === "a") {
        console.log("Sabor: Chocolate | Preço: R$ 1,50");
    } else if (codigo === "b") {
        console.log("Sabor: Morango | Preço: R$ 2,50");
    } else if (codigo === "c") {
        console.log("Sabor: Creme | Preço: R$ 2,50");
    } else if (codigo === "d") {
        console.log("Sabor: Manga | Preço: R$ 3,20");
    } else if (codigo === "e") {
        console.log("Sabor: Melancia | Preço: R$ 3,40");
    } else if (codigo === "f") {
        console.log("Sabor: Vanilla Ice | Preço: R$ 3,00");
    } else if (codigo === "g") {
        console.log("Sabor: Céu Azul | Preço: R$ 3,60");
    } else if (codigo === "h") {
        console.log("Sabor: Brownie | Preço: R$ 4,00");
    } else if (codigo === "i") {
        console.log("Sabor: Hawaiano | Preço: R$ 5,00");
    } else {
        console.log("Código inválido.");
    }

}

//atividade07()

function atividade08(){
    let num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    let num2 = parseInt(prompt("Digite o segundo número inteiro:"));

    console.log("Primeiro número:", num1);
    console.log("Segundo número:", num2);

    let diferenca = num1 - num2;
    console.log("Diferença:", num1, "-", num2, "=", diferenca);

    let dobro = 2 * num1;
    console.log("Dobro do primeiro número:", "2 *", num1, "=", dobro);

    let triplo = 3 * num2;
    console.log("Triplo do segundo número:", "3 *", num2, "=", triplo);

    let soma = dobro + triplo;
    console.log("Soma do dobro do primeiro com o triplo do segundo:", dobro, "+", triplo, "=", soma);

    let multiplicacao = num1 * num2;
    console.log("Multiplicação:", num1, "*", num2, "=", multiplicacao);

    console.log( "Resultado");
    console.log("Diferença:", diferenca);
    console.log("Dobro do primeiro + triplo do segundo:", soma);
    console.log("Multiplicação:", multiplicacao);

}

//atividade08()

function atividade09(){
    let num1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    console.log("Primeiro número digitado:", num1);

    let num2 = parseInt(prompt("Digite o segundo número inteiro:"));
    console.log("Segundo número digitado:", num2);

    if (num1 > num2) {
        console.log("Ordem do maior para o menor:", num1, ",", num2);
    } else {
        console.log("Ordem do maior para o menor:", num2, ",", num1);
    }

}

atividade09()