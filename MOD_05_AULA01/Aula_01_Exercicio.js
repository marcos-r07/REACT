const vetor = [1, 2, 3, 4, 5, 6]

//1) Dado um vetor de números, como poderia ser realizada a soma de todos os valores utilizando reduce.

const somar = (acumulado, atual) => acumulado + atual

const somarTudo  = vetor.reduce(somar,0)

//ou 

const somarTudo2  = vetor.reduce(function(acumulador, valorAtual){
    return acumulador + valorAtual
})

console.log("Valor da soma de tudo: ",somarTudo, somarTudo2)

//2) Dado um vetor de números, como poderia ser realizada a soma de todos os valores pares utilizando reduce e filter.

const somentePares = item => item % 2 === 0

const somarPares = vetor
                        .filter(somentePares)
                        .reduce(somar,0)

console.log("A soma do itens (",vetor.filter(somentePares),") pares é:", somarPares)

//3) Dado um vetor de números, como poderia ser realizada a soma de todos os valores ímpares utilizando reduce e filter.

const somenteImpares = item => item % 2 !== 0

const somarImpares = vetor
                        .filter(somenteImpares)
                        .reduce(somar, 0)

console.log("A soma do numeros impares do vetor (",vetor,") é :", somarImpares)

//4) Dado um vetor de valores, retorne um objeto com quantas vezes cada valor está presente 
//no vetor (dica: utilize reduce)

const vetorValoresDuplicados = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 7, 7, 7, 9, 10, 10, 10, 10]

const howManyTimes = (agg, val) => {

    if(!agg[val]){
        agg[val] = 0        
    }

    agg[val] = agg[val] + 1
    console.log(agg, val)

    return agg

}

const qtdVezesValores = vetorValoresDuplicados.reduce(howManyTimes, {})
console.log(qtdVezesValores)


// 5) Dado um vetor de valores, retorne um vetor com somente os valores únicos do vetor 
//(aqueles que ocorrem apenas 1 vez dentro do vetor) 
//(Dica 1: utilize reduce, filter e keys, Dica 2: escreva console.log(objeto.keys()) 
//e veja como ele poderá te ajudar neste exercício)

const filterSoUnicos = (item) => {
    return item['1'] ===1
}

const keys = vetorValoresDuplicados
                                    .reduce(howManyTimes, {})
                                    //.filter(filterSoUnicos)
//const unicos = keys.filter(filterSoUnicos)
                                        
console.log("Valoes unicos são: ", keys['4'], keys)



// 6) Dado um vetor com números, retorne somente os números pares;

// 7) Dado um vetor com números, retorne somente os números ímpares;

// 8) Uma função é chamada da seguinte forma:

// calculadora(10, '+', 20)

// crie o corpo da função de forma que ela realize as 4 operações aritméticas

// 9) Modifique a calculadora do exercício anterior para que ela receba 2 números e uma função, e realize o cálculo. Exemplo:

// const soma = (num1, num2) => num1+num2

// const calculadoraFn = (....) => ….

// calculadoraFn(10, soma, 20)





