/*
EMPLEADOS-B

En una empresa se asignará un aumento del 20% a todo el personal obrero y un 10% al
personal administrativo. La empresa necesita determinar cuánto es el total de sueldo 
(por empleado y por la empresa) que deberá pagar en la próxima nómina.

Al ser consultada por la forma como desean que se presente la salida, la empresa suministra
el siguiente formato de salida, informando que Juan (obrero) actualmente gana $100, Ana
(obrero) gana $120, Lin (administrativo) gana $200, Mary (obrero) gana $50 y Carlos
(administrativo) gana $150:

Juan tendrá un sueldo de $120
Ana tendrá un sueldo de $144
Lin tendrá un sueldo de $220
Mary tendrá un sueldo de $60
Carlos tendrá un sueldo de $165

El total de sueldo que debe pagar la empresa es de $709
*/

import Cl_Empresa from "./Cl_Empresa.js";
import Cl_Personal from "./Cl_Personal.js";

const empresa = new Cl_Empresa();
const personal1 = new Cl_Personal('Juan', 1, 100);
const personal2 = new Cl_Personal('Ana', 1, 120);
const personal3 = new Cl_Personal('Lin', 2, 200);
const personal4 = new Cl_Personal('Mary', 1, 50);
const personal5 = new Cl_Personal('Carlos', 2, 150);

let salida = document.getElementById("salida");

empresa.procesarPersonal(personal1);
empresa.procesarPersonal(personal2);
empresa.procesarPersonal(personal3);
empresa.procesarPersonal(personal4);
empresa.procesarPersonal(personal5);

salida.innerHTML = `
Juan tendrá un sueldo de $${personal1.sueldoNuevo()}
<br>Ana tendrá un sueldo de $${personal2.sueldoNuevo()}
<br>Lin tendrá un sueldo de $${personal3.sueldoNuevo()}
<br>Mary tendrá un sueldo de $${personal4.sueldoNuevo()}
<br>Carlos tendrá un sueldo de $${personal5.sueldoNuevo()}
<br><br>
El total de sueldo que debe pagar la empresa es de $${empresa.sueldoEmpresa()}
`