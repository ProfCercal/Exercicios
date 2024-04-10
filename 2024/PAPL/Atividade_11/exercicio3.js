function balancoMawer() {
    let contador = 1;
    let receitaMensal = 0;
    let receitaAnual = 0;
    let despesaMensal = 0;
    let despesaAnual = 0;
    let receitaLiquida = 0;
    let prejuizo = false;

    while (contador <= 12) {
        receitaMensal = prompt('Informe a receita mensal para o ' + contador + 'º mês: ');
        receitaAnual = receitaAnual + parseFloat(receitaMensal);
        despesaMensal = prompt('Informe a depesa mensal para o ' + contador + 'º mês: ');
        despesaAnual = despesaAnual + parseFloat(despesaMensal);
        contador++;
    }

    receitaLiquida = receitaAnual - despesaAnual;

    if (receitaLiquida < 0) {
        receitaLiquida = 0.00;
        prejuizo = true;
    }

    alert("A receita anual é de R$" + receitaAnual + " reais.");
    alert("A despesa anual é de R$" + despesaAnual + " reais.");

    if (!prejuizo) {
        alert("A receita líquida é de R$" + parseInt(receitaLiquida) + " reais e a empresa teve lucro.");
    }
    else {
        alert("A receita líquida é de R$" + parseInt(receitaLiquida) + " reais e a empresa teve prejuízo.");
    }
}