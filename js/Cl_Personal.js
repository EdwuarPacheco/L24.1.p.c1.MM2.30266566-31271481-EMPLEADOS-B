export default class Cl_Personal{
    constructor(nombre, tipo, sueldo){
        this.nombre = nombre;
        this.tipo = tipo;
        this.sueldo = sueldo;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    set tipo(tipo){
        this._tipo = +tipo;
    }
    set sueldo(sueldo){
        this._sueldo = +sueldo;
    }

    get nombre(){
        return this._nombre;
    }
    get tipo(){
        return this._tipo;
    }
    get sueldo(){
        return this._sueldo;
    }

    incremento(){
        if(this.tipo == 1){
            return this.sueldo*20/100;
        }
        else if(this.tipo == 2){
            return this.sueldo*10/100;
        }
    }
    sueldoNuevo(){
        return this.sueldo + this.incremento();
    }
}