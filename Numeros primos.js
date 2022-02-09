exibirNumerosPrimos(15)

function exibirNumerosPrimos(limite){
    for(let numero = 2; numero <= limite; numero++){
        if(exibirNumerosPrimos(numero)) console.log(numero);
    }
}

function NumeroPrimo(numero){
    for(let divisor = 2; divisor < numero; divisor++){
        if(numero % divisor ==0){
            return false;
        }
    }
    return true;
}