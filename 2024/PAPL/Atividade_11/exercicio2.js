function lancamentoSoyuz() {
    var contagem = 10;
    let sequencia = setInterval(
        function contagemLancamento() {
        console.log(contagem);
        contagem--;
        if (contagem == 6) {
            console.log("зажигание...");
        }
        if (contagem < 1) {
            clearInterval(sequencia);
            console.log("взлет!");
        }
    }
    , 1000)
}