let numeros = [2, 4, 7, 5, 1, 3, 9, 0, 6, 8];
let numerosOrdem = [];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        numerosOrdem.unshift(numeros[i]);
    } else {
        numerosOrdem.push(numeros[i]);
    }
}

console.log(numeros);
console.log(numerosOrdem);