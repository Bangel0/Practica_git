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

    opcion = Number(
      prompt(
        ' Selecione: \n1- Consultar saldo\n2- Retirar dinero\n3- Consignar dinero(cuenta propia)\n4- Transferir dinero (otras cuentas)\n5- Salir '
      )
    )
    switch (opcion) {
      case 1:
        console.log(`Su saldo es: ${saldoCuenta}`)
        break
      case 2:
        valorOperacion = parseFloat(prompt('Ingrese el valor a retirar: '))
        if (valorOperacion <= saldoCuenta) {
          saldoCuenta -= valorOperacion
          console.log(`Retirado ${valorOperacion}, su saldo es: ${saldoCuenta}`)
        } else {
          console.log('No hay suficiente saldo')
        }
        break;
      case 3:
        valorOperacion = parseFloat(prompt('ingrese el valor a consignar '))
        if (valorOperacion < 0)
          console.log('No se puede consignar un valor negativo')
        else {
          saldoCuenta += valorOperacion
          console.log(
            `Consignado ${valorOperacion}, su saldo es: ${saldoCuenta}`
          )
        }
        break;
      case 4:

      opcion = Number (prompt('Ingrese el numero de cuenta: '));
      switch (opcion) {
        case cuentaUno:
          valorOperacion = Number(prompt('Ingrese el valor a transferir:'))
          if (valorOperacion <= saldoCuenta) {
            saldoCuenta -= valorOperacion
            console.log( 'sunuevo saldo es: ' + saldoCuenta);
          }else{
            console.log('No hay suficiente saldo')
          }
            
          break;
          case cuentaDos:
            valorOperacion = Number(prompt('Ingrese el valor a transferir:'))
            if (valorOperacion <= saldoCuenta) {
              saldoCuenta -= valorOperacion
              console.log( 'su nuevo saldo es: ' + saldoCuenta);
            }else{
              console.log('No hay suficiente saldo')
            }
            break;
          case 5:
            console.log('Hasta pronto...');
            break;
          default:
              console.log('Opción no válida');
              break;
      }









        // let cuentaDestino = prompt('Ingrese el número de cuenta de destino ')
        // if (cuentaDestino === cuentaUno.toString() || cuentaDestino === cuentaDos.toString()) {
        //   valorOperacion = parseFloat(prompt('Ingrese el valor a transferir '))
        //   if (valorOperacion <= saldoCuenta) {
        //     saldoCuenta -= valorOperacion
        //     console.log(
        //       `Transferido ${valorOperacion} a la cuenta ${cuentaDestino}, su saldo es: ${saldoCuenta}`
        //     )
        //   } else {
        //     console.log('No hay suficiente saldo')
        //   }
        
        break;
      case 5:
        break;
      case 6:
        break;
      default:
        break;
    }
  } else {
    console.log('Contraseña incorrecta')
  }
} else {
  console.log('Usuario  no existe')
}
