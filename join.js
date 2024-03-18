// junta todos os elementos de um array e tranforma em string 
// separados por um delimitador

//exemplo 1
let nomes = ['gabriela' , 'vinicius' , 'pedro' ]// declaro uma array
// uso o join para exibir em string 
console.log(nomes.join())// saída: gabriela,vinicius,pedro

//exemplo 2
let numeros = [ 1, 2, 3, 4, 5] // declaro uma array com numeros
// uso o join para exibir em strings
console.log(numeros.join(" + ")) //saída: 1 + 2 + 3 + 4 + 5
// agora usei um delimitador da minha escolha: (" + ")