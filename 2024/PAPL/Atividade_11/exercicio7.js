function picaroleteria() {
    let picoles = [['Brownie', 4.00], ['Céu Azul', 3.60], ['Chocolate', 1.50], ['Creme', 2.50], ['Hawaiano', 5.00], ['Manga', 3.20], ['Melância', 3.40], ['Morango', 2.50], ['Vanilla Ice', 3.00]];
    let i = 0;
    let opcao = "";

    for (i = 0; i < picoles.length; i++) {
        console.log(picoles[i][0]);
    }

    opcao = prompt("Informe o sabor de sua escolha: ");

    for (i = 0; i < picoles.length; i++) {
        if (opcao === picoles[i][0]) {
            console.log('O picolé de sabor ' + picoles[i][0] + ' custa R$' + picoles[i][1] + ' reais. Pagamento no crébito?');
        }
    }
}