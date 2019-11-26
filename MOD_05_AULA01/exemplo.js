valor = 10  // o valor que colocar será considerado o tipo

//verifica o valor e tipo
if (valor === 10){

    console.log('true');
}

let valor2 = 20

valor2 = 30

console.log(valor, valor2)

const objeto = {
    chave: 'valor1',
    chave2: 'valor2'
}

console.log(objeto)

const str = 'Marcos Rogerio - Dev Pleno'

//function as first class citizens
const soma = function(a, b){
    return a + b
}

const calculadora = function(func, a, b){
    return func(a, b)
}

console.log(calculadora(soma,1,2))

const vetor = [1, 2, 3, 4, 5]

const dobrado = vetor.map(function(item){
    return { original: item, dobrado: item * 2}

})

console.log(vetor, dobrado)



// const paresDobrado = vetor.filter(function(item){
//     return item % 2 === 0  //somente pares
// }).map(function(item){
//     return item * 2     //dobrado
// })

// console.log('Pares dobrado: ', paresDobrado)

//arrow function

// const dobrar = item =>{
//     return item * 2
// }


////simplificando
const dobrar = item => item * 2
const somentePares = item => item % 2 === 0

const paresDobrado = vetor.filter(somentePares).map(dobrar)
console.log('Pares dobrado:', paresDobrado)

const somar = (acumulado, atual) => acumulado + atual
const somatorio = paresDobrado.reduce(somar,10)//inicia com 10
console.log('soma dos PARES dobrado COM REDUCE', somatorio)
