function somarNumeros() {
    let numero = 0;
    let contador = 0;
    let soma = 0;
    let opcao = 'S';

    alert('---Exercício 1 - Soma de Inteiros---');

    while (opcao === 'S') {
        contador++;
        numero = prompt("Informe o " + contador + "º número, do tipo inteiro, a ser somado: ");
        soma = soma + parseInt(numero);
        opcao = prompt("Deseja continuar? Informe S [SIM] para prosseguir com o somatório.");
    }

    alert('A soma total dos ' + contador + ' números inteiros informados é: ' + soma)

}