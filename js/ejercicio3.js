// creo una variable para un numero
let numero = 12
// creo la funcion
function propiedades(valor){
    // calculo el cuadrado
    let cuadrado = Math.pow(valor, 2)
    // calculo el valor absoluto
    let ValorAbsoluto = Math.abs(valor)
    // calculo la raiz cuadrada
    let raiz = Math.sqrt(valor)
    // creo el objeto
    return{
        cuadrado: cuadrado,
        raiz: raiz,
        ValorAbsoluto: ValorAbsoluto
    }
}
// guardo el resultado en una variable
let resultado = propiedades(numero)
// templete string
console.log(`el cuadrado es ${resultado.cuadrado}, la raiz es ${resultado.raiz} y el valor absoluto es ${resultado.ValorAbsoluto}`)