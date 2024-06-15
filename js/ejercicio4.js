// creo la clase
class Rectangule{
    // ingreso sus parametros
    constructor(width, height){
        // defino sus atributos
        this._width = width
        this._height = height
    }
    // defino el metodo area
    area(){
        // defino las funciones para el metodo area
        let resultadoArea = this._width * this._height
        // retorno el resultado
        return`el area es ${resultadoArea}`
    }
    // defino el metodo perimetro
    perimetro(){
        // defino las funciones para el metodo perimetro
        let resultadoPerimetro = (this._width + this._height) * 2
        // retorno el resultado
        return`el perimetro es ${resultadoPerimetro}`
    }
}
// creo una variable para pasarle los parametros a la clase
let valor = new Rectangule(23, 12)
console.log(valor.area(), valor.perimetro())