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