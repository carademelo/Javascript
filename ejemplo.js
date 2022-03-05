
/* CURSO DE FECHAS
var fechaInicio = new Date();

for (var i = 0; i < 15000; i++ ){
console.log("Esperando...")
}



var fechaFin = new Date();
var tiempoEsperado = fechaFin.getTime() - fechaInicio.getTime();

console.log(fechaInicio);
console.log(fechaFin);
console.log("Ha pasado " + tiempoEsperado/1000 + " Segundos");
*/

// Curso de ajustes de FECHAS
var fecha = new Date( 2020 ,3 ,11 );
console.log(fecha);

// fecha.setDate( fecha.getDate() + 5 );
// fecha.setYear( fecha.getFullYear() + 1 );
// fecha.setMonth( fecha.getMonth() + 1 );

// console.log(fecha);
 
Date.prototype.sumarDias = function( dias ) {
  this.setDate( this.getDate() + dias );
  return this;
};

fecha.sumarDias( 5 );

console.log(fecha);
