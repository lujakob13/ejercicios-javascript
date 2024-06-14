// inicialice una cadena
let cadena = "hola como andas, me llamo luca"
// cree la funcion
function mayuscula(palabras){
    // agregue un contador
    contador = palabras.length
    // cree una nueva cadena vacia para agregarle la ueva cadena con las vocales en mayuscula
    let NuevaCadena = ""
    // cree un ciclo for 
    for(let i = 0; i < contador; i++){
        // realize una sentencia if para, utilize el metodo "includes" para poder ver si las vocales estaban incluidas en la cadena
        if ("aeiou".includes(palabras[i])){
            // si es verdadero, las agrega a la nueva cadena utilizando el metodo "ToUpperCase" para que sean mayusculas
            NuevaCadena += palabras[i].toUpperCase()
        }else{
            // si no son vocales, se agregan sin ningun cambio
            NuevaCadena += palabras[i]
        }
    }
    // retorno el resultado
    return NuevaCadena
}

// templete string
console.log(`${mayuscula(cadena)}`)