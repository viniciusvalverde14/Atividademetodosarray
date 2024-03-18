// determina se o array contem um determinado elmento retornando "true" ou "false"
//exemplo 1
let nomes = ['gabi' , 'vinicius' ,'pedro'] // declaro uma array com nomes 
console.log(nomes.includes('gabi')) // saída: true
console.log(nomes.includes('joao'))// saída: false

//exemplo 2 - é possível determinar o indice também (caso esetja no indice indicado: true, se não: false)
let nomees = ['gabi' , 'vinicius' ,'pedro']
console.log(nomees.includes('gabi' , 0)) //saída: true
console.log(nomees.includes('gabi' , 1)) //saída: false