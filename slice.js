//slice retorna uma parte do array selecionada, sem modificar o array original.
//ele aceita o indice final(não inclusivo) e o inicial ou se nao for fornecido retorna uma cópia superficial
// exemplo 1

//       0  1  2  3  4
let a = [1, 2, 3, 4, 5]; // declaro uma array chamada "a" com numeros
let b = a.slice(0, 4);  // com slice determino que sejam considerados os elementos a partitr do indice inicial 0 e do final 4 
                        // será exibido os elementos do indice 0 1 2 3 , o final nao é incluso 
console.log(b); // Saída: [ 1, 2, 3, 4,]

// exemplo 2 - não é so com numeros 
let x = ['banana' , 'uva' , 'figo' , 'goiaba'] //declaro uma array chamada x com string`s
let y = x.slice(2,  4) // com slice determino que seja considerado os elementos a partir do indice inicial 2 e o final 4  
let mensagem = "as frutas de valinhos são " + y; // declaro uma mensagem de texto mais a nova array
console.log(mensagem) // Saída: ['figo', 'goiaba']
