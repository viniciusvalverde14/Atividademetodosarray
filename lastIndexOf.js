// Retorna o ultimo indice em que um elemento especifico pode ser encontrado
// ou -1 se não estiver presente 

// exemplo 1 
//        0  1  2  3
let x = [ 1, 2, 3, 2] // declaro uma array com numeros
let i = x.lastIndexOf(2); // com o indexOf quero que retorne o ultimo indice onde é encontrado o elemento '2'
console.log(i) // saída: 3

let y = ['a','b','c','b'] // declaro uma array com strings 
let I = y.lastIndexOf('b') // quero que retorne o ultimo indice onde é encontrado o elemento 'b'
console. log(I)// saída: 3

//exemplo 2
let z = [1, 2, 3, 4, 5] // declaro uma array com números 
let ind = z.lastIndexOf(6) // elemento que não existe no array
console.log(ind) // saída -1