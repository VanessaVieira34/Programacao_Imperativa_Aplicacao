let altura = [1.65, 1.40, 1.82, 1.73, 1.50, 1.81, 1.89, 1.53, 1.62, 1.51, 1.98, 1.85, 1.82, 1.20, 2.02];
let genero = ["M", "m", "M", "F", "M", "F", "M", "F", "M", "F", "f", "F", "M", "f", "M"];


function alturaMaior(altura) {
    var maiorAltura = altura[0];
    for (let i = 0; i < altura.length; i++) {
        if (altura[i] > maiorAltura) {
            maiorAltura = altura[i];
        }
    }
    return maiorAltura;
}

function alturaMenor(altura) {
    var menorAltura = altura[0];
    for (let i = 0; i < altura.length; i++) {
        if (altura[i] < menorAltura[i]) {
            menor = altura[i];
        }
    }
    return menorAltura;
}

function mediaMulheres(genero, altura) {
    var soma = 0;
    var media = 0;
    for (let i = 0; i < genero.length; i++) {
        if (genero[i] === "F") {
            soma += altura[i];
            media++;
        }
    }
    return (soma / media);
}

function qtdeHomens(genero) {
    var homens = 0;
    for (let i = 0; i < genero.length; i++) {
        if (genero[i] === "M") {
            homens++;
        }
    }
    return homens;
}

console.log("A Maior Altura é " + alturaMaior(altura) + " Metros.");
console.log("A Menor Altura é " + alturaMenor(altura) + " Metros.");
console.log("A Média de Altura das Mulheres é de " + mediaMulheres(genero, altura).toFixed(2) + " Metros.");
console.log("A Quantidade é de " + qtdeHomens(genero) + " Homens.");

