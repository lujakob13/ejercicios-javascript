// creo los dos arrays
let array1 = [1, "juan", true]
let array2 = ["pedro", 2, false]
// creo la funcion
function suma(valor1, valor2){
    // inicializo la variable "nuevoArray" para crear el nuevo array con la suma de los elementos correspondiente
    let nuevoArray = []
    // creo dos varibles para contener la longitud de cada array
    let longitud1 = valor1.length
    let longitud2 = valor2.length
    // verifico si los arrays son de la misma longitud con una sentencia if
    if (longitud1 == longitud2){
        // si son iguales, creo el for
        for (let i = 0; i < longitud1; i ++){
            // utilizo el metodo push para agregar los elementos al nuevo array, previamente transformandolos en strings para poder concatenarlos
            nuevoArray.push(String(valor1[i]) + String(valor2[i]))
        // retorno el nuevo array
        }return nuevoArray
    // si la longitud es diferente, saltara por pantalla un mensaje
    }else{
        // templete string
        console.log(`los arrays no son de la misma longitud`)
    }
}
// templete string
console.log(`la suma de cada elemento ${suma(array1, array2)}`)