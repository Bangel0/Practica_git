// // let numero = parseFloat(prompt('ingrese un numero:'))
// // let numeroDos = parseFloat(prompt('ingrese un numero:'))

// // console.log(numero + numeroDos)

// let opcion = prompt('ingrese un numero: ' )n
// switch(opcion){
//     case 1:
//         console.log("Uno");
//         break;
//     case 2:
//         console.log("Dos");
//         break;
//     case 3:
//         console.log("Tres");
//         break;
//     default:
//         console.log("No es un número entre 1 y 3");
//         break;
// }

// let edad = 18
// let mensaje = edad > 18 ? 'Es mayor de edad' : ' Es menor de edad'
// console.log(mensaje)

/* Simular un cajero electrónico 
1 Validar un inicio de sesión
2 Consultar saldo
3 Retirar dinero
4 Realizar consignación 
5 Consignación a otras cuentas (quemadas)
6 Salir 
    */

let usuario = prompt('Ingrese su usuario: ')
if (usuario === 'Admin') {
  let contraseña = prompt('ingrese su contraseña')
  if (contraseña === '123456') {
    console.log('Bienvenido' + usuario)
    let saldoCuenta = 0
    let opcion = 0
    let cuentaUno = 123456789
    let cuentaDos = 987654321
    let valorOperacion = 0

    opcion = Number(prompt(
      ' Selecione: \n1- Consultar saldo\n2- Retirar dinero\n3- Consignar dinero(cuenta propia)\n4- Transferir dinero (otras cuentas)\n5- Salir '
    ))
    switch (opcion) {
      case 1:
      console.log(`Su saldo es: ${saldoCuenta}`)
      break;
      case 2:
      
      break;
      case 3:
      
      break;
      case 4:
      
      break;
      case 5:
      
      break;
      default:
      break;
    }
  }else{
    console.log('Contraseña incorrecta')
  }
} else {
  console.log('Usuario  no existe')
}
