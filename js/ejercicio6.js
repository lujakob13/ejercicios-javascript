// creo la variable para una cadena
let cadenas = "hola mundo"
// creo la funcion
function inversa(texto){
    // utilizo el metodo split para tranformar el texto en un array
    let array = texto.split("")
    // doy vuelta el array con el metodo reverse
    let inverso = array.reverse()
    // utilizo el metodo join para unir el array y tranformarlo en un texto
    let respuesta = inverso.join("")
    // retorno el valor
    return respuesta
}
console.log(`cadena invertida ${inversa(cadenas)}`)