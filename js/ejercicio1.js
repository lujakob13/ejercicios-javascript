let numeros = [1,2,3,4,5,6,7,8,9,45,35,23,47, 67, 88, 81]
// creo la funcion que recibe como parametro el array "numeros"
function cuadrado(array){
    // creo la variable resultado, que es un array vacio
    let resultado= []
    // hago el for of
    for(numero of array){
        // utilizo push para que me agregue los numeros al array resultado
        resultado.push(numero * numero)   
    }//retorno la varibale resultado
    return resultado
}
console.log("cuadrado: ", cuadrado(numeros))
