/*1. Módulo de Tesorería: Pago de Permisos (Cálculos y Retorno)

El vecino ingresa el monto de su permiso de circulación para saber cuánto pagará
tras el descuento municipal. Lógica: Si el monto es mayor a $70.000,
el descuento es del 15%. Si es menor, es del 5%. Regla: La Función Principal 
debe mostrar el total a pagar con un signo de peso ($).*/

function calcularTotal(monto) {
    if (monto > 70.000) {
        monto = monto * 0.15 / 100;
        return monto;
    } else {
        monto = monto * 0.05 / 100;
        return monto;
    };
}

function permiso() {
    const result = document.getElementById("result1");
    let input1 = document.getElementById("input1");
    let monto = parseFloat(input1.value);
    let totalConDescuento = calcularTotal(monto);
    input.value = "";
    result.textContent = `Monto a pagar: $${totalConDescuento}`;
};



/*2. Módulo de Salud: Fila de Vacunación (Arreglos y Prioridad)

Gestión de nombres en la fila de espera del consultorio local.
Lógica: * Botón Normal: Agrega el nombre al final de la lista (push).
Botón Urgencia: Agrega el nombre al inicio de la lista (unshift).
Regla: El resultado debe mostrarse como una lista ordenada en el HTML. <ol>*/

let fila = [];
function agregarUrgencia(normal) {
    fila.push(nombre);
    return fila.join(", ");
}

function agregarUrgencia(urgencia) {
    fila.unshift(nombre);
    return fila.join(", ");
}

function listadoVacuna() {
    const container = document.getElementById("resultado-container2");
    const result1 = document.getElementById("result2");
    const input = document.getElementById("input2");

    if (input.value !== "") {
        let nombre = input.value;
        let resultado = agregarUrgencia(normal);
        result2.textContent = resultado;
        input.value = "";
        container.classList.remove("d-none");
    } else {
        alert("El nombre no puede estar vacío.");
    }
}



/*3. Módulo de Subsidios: Buscador de Beneficiarios (Ciclos e If)

Verificar si un RUT o nombre está en el listado de entrega de beneficios.
Lógica: Tener un arreglo con al menos 6 nombres. Usar un ciclo for para 
buscar si el dato ingresado existe en la lista.
Regla: La función debe devolver "Beneficiario Verificado" o "No registrado".*/

let nombresValidos = ["Elisa", "Yulieth", "Isidora", "Isabel", "Alondra", "Krishna"];
function buscarNombre(nombre) {
    let mensaje = "Codigo invalido o expirado"
    for (let i = 0; i < nombresValidos.length; i++) {
        if (nombre == nombresValidos[i]) {
            mensaje = "Beneficiario Verificado"
            return "Beneficiario Verificado"
        } else {
            mensaje = "No registrado"
        }
    }
    return mensaje
}

function verificarNombre() {
    let input = document.getElementById("input3");
    let nombre = input.value;
    const result3 = document.getElementById("result3");
    const container = document.getElementById("resultado-container3");
    let result = buscarNombre(nombre);
    result3.textContent = result;
    input.value = "";
    container.classList.remove("d-none");
}