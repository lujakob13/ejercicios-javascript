// creo el objeto con sus propiedades
let alumnos={
    juan: 8,
    maria: 9,
    pedro: 7
}
// creo la funcion para el promedio
function promedio(notas){
    // inicializo un acmulador y un contador en cero
    let acumulador = 0
    let contador = 0
    // realizo el for of, utlizando el metodo "Object.values()" para poder tranformar los elementos de un objeto en un array
    for (nota of Object.values(notas)){
        // hago que el acumulador vaya sumando las notas
        acumulador += nota
        // hago que el contador vaya aumentando segun la cantidad de notas
        contador += 1
    }
    // creo una variable que me calcula el promedio una vez que TERMINE el ciclo for of
    let promedio = acumulador / contador
    // retorno el resultado de promedio
    return promedio
}
// templete string
console.log(`el promedio de las notas es ${promedio(alumnos)}`)