
// SIMULADOR INTERACTIVO DE CRÉDITOS

// Interes Fijo para el Crédito, se puede cambiar aquí y se actualiza en la función
const interesFijo = 1.70;


// Función para Calcular el valor de la cuota mensual

function calcularCuotaMensual(monto, meses) {
    // Calcula el valor de cada cuota mensual
    let valorCuota = (monto * interesFijo) / meses;

    //Calcular el total devuelo al final del préstamo
    let totalDevuelto = monto * interesFijo;

    console.log("Tus cuotas serán de la siguiente manera 😎:")

    //Ciclo que imprime las cuotas mensuales
    for (let i = 1; i <= meses; i++) {
        console.log("Cuota" + i + ": $" + valorCuota.toFixed(2));
    }

    //Imprime el dinero total devuelto al final del préstamo
    console.log("El dinero total de tu prestamo es de: $" + totalDevuelto.toFixed(2));
}

// Función Principal para que el usario interactue

function simularCredito() {
    let dineroSolicitar = prompt("¿Cuanto dinero necesitas?:");
    let totalCuotas = prompt("Ingresa las cuotas para pagar tu crédito (De 6 a 24 cuotas):");

    // En este IF revisamos que los datos ingresados no sean vacios o nulos. Y de ser así llamamos la funcion de arriba para que haga el cálculo de cuota mensual y valor total del crédito. 
    if ((dineroSolicitar !== "" && dineroSolicitar !== null && !isNaN(dineroSolicitar) ) &&
        (parseInt(totalCuotas) >= 6 && parseInt(totalCuotas) <= 24)) {
        calcularCuotaMensual(parseInt(dineroSolicitar), parseInt(totalCuotas));
    }
    //Si no se cumple lo anterior, se envia mensaje de advertencia y hay que volver a inciar. 
    else {
        console.warn("Verifica el monto ingresado ó el máximo de cuotas permitidas");
    }
}