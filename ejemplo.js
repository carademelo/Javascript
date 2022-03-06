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
// var fecha = new Date( 2020 ,3 ,11 );
// console.log(fecha);
//
// // fecha.setDate( fecha.getDate() + 5 );
// // fecha.setYear( fecha.getFullYear() + 1 );
// // fecha.setMonth( fecha.getMonth() + 1 );
//
// // console.log(fecha);
//
// Date.prototype.sumarDias = function( dias ) {
//   this.setDate( this.getDate() + dias );
//   return this;
// };
//
// fecha.sumarDias( 5 );
//
// console.log(fecha);

////////////////////////////////
////////////////////////////////
// // Curso de Math
//
// var PI = Math.PI;
// var E  = Math.E;
//
// console.log(PI);
// console.log(E);
//
//
// function RandomEntre( min, max) {
// return ( Math.floor(Math.random() * (max - min + 1 ) + min) );
// }
//
// console.log( RandomEntre(0 , 10));

////////////////////////////////
////////////////////////////////////////////////////////////////
// Expresiones regulares

// var regA = new RegExp("/^[a-zA-Z0-9]{5,10}$/");
// // var regA = new RegExp("/^\d{8}[a-zA-Z]$/");
// var texto = "74724960F";
// var arr = texto.match( /^[a-zA-Z0-9]{5,10}$/ );
//
// if (arr == null)
// {
//   console.error("El formato del DNI: " + texto + " es incorrecto.");
// }else {
//   console.log("El formato del DNI: " + texto + " es correcto");
// }


////////////////////////////////
// Opcion 1
// try {
//   var a = 100 / 0;
//
//   if (a === Infinity) {
//       throw new Error("Division por cero");
//   }
//
//
// }
//
// catch (e) {
//   console.log("Este fue el error: " + e.message );
// }
// //Siempre se ejecuta, independientemente de si pasa o no por el catch
// finally {
//   console.log("Finamente...")
//
//
// }

////////////////////////////////
// Opcion 2: Se pasa como objeto de excepcion algo a medida
//
// try {
//   throw {
//     textError: "Mensaje del error",
//     typeError: "Tipo del error",
//     codigoError: "Código del error"
//   }
// } catch (e) {
//   console.log(e.textError);
//   console.log(e.typeError);
//   console.log(e.codigoError);
//
// } finally {
//
// }
// 
// /// Condiciones flujo
// var nota = 59;
//
// // if (nota > 50 ) {
// //   console.log("Aprobado");
// // } else {
// //   console.log("Suspenso");
// // }
//
//
// switch (true) {
// 	case nota >= 50 && nota < 60:
// 		console.log("Aprobado");
// 		break;
// 	case (nota >= 60) && (nota < 70):
// 		console.log("Bien");
// 		break;
// 	case (nota >= 70) && (nota < 90):
// 		console.log("Notable");
// 		break;
//
// }