// Retorna o primeiro indice em que um elemento especifico pode ser encontrado 
// ou -1 se ele não estiver presente 

// exemplo 1 
//        0  1  2  3
let x = [ 1, 2, 3, 2] // declaro uma array com numeros
let i = x.indexOf(2); // com o indexOf quero que retorne o primeiro indice onde é encontrado o elemento '2'
console.log(i) // saída: 1

let y = ['a','b','c','b'] // declaro uma array com strings 
let I = y.indexOf('b') // quero que retorne o primeiro indice onde é encontrado o elemento 'b'
console. log(I)// saída: 1

//exemplo 2
let z = [1, 2, 3, 4, 5] // declaro uma array com números 
let ind = z.indexOf(6) // elemento que não existe no array
console.log(ind) // saída -1