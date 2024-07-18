export default class Cl_Empresa{
    constructor(){
        this.acumSueldo = 0;
    }
    procesarPersonal(p){
        this.acumSueldo += p.sueldoNuevo();
    }
    sueldoEmpresa(){
        return this.acumSueldo;
    }
}