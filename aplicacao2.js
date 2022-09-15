let idades = [16, 20, 35, 18, 53, 35, 39, 58, 65, 49, 21, 41, 14, 95, 12];
let opinioes = [3, 2, 1, 2, 1, 2, 1, 2, 1, 2, 3, 2, 1, 2, 3];

const otimoMedia = (array) => {
    var soma = 0;
    var qtde = 0;
    for (let i = 0; i < opinioes.length; i++) {
        if (opinioes[i] === 3) {
            soma += idades[i];
            qtde++;
        }
    }
    return (soma / qtde);
}

const regularQtde = (array) => {
    var qtde = 0;

    for (let i = 0; i < opinioes.length; i++) {
        if (opinioes[i] === 1) {
            qtde++;
        }
    }
    return qtde;
}

const bomPorcentagem = (array) => {
    var qtde = 0;

    for (let i = 0; i < opinioes.length; i++) {
        if (opinioes[i] === 2) {
            qtde++;
        }
    }
    return (qtde / opinioes.length) * 100;
}

console.log("Média de idades que Responderam ÓTIMO é " + otimoMedia(opinioes, idades).toFixed(1) + ".");
console.log("Responderam REGULAR " + regularQtde(opinioes) + " Pessoas.");
console.log("Responderam BOM " + bomPorcentagem(opinioes).toFixed(0) + "% das Pessoas.");