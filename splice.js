//remove ou adiciona elmentos em um array

//exemplo1
let numeros = [1, 2, 3, ]
let remover = numeros.splice(1,1) //remove o elemento na posição 1
console.log(numeros) //saída:[ 1, 3 ]

//exemplo2
let num = [1, 2, 3, 4, 5];
const rem = num.splice(2, 2); // Remove 2 elementos a partir da posição 2
console.log(rem); // Saída: [3, 4]
console.log(num); // Saída: [1, 2, 5]

