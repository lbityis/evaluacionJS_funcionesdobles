/*1. Módulo de Tesorería: Pago de Permisos (Cálculos y Retorno)

El vecino ingresa el monto de su permiso de circulación para saber cuánto pagará
tras el descuento municipal. Lógica: Si el monto es mayor a $70.000,
el descuento es del 15%. Si es menor, es del 5%. Regla: La Función Principal 
debe mostrar el total a pagar con un signo de peso ($).*/

function calcularTotal(monto) {
    let descuento;
    if (monto > 70000) {
        descuento = monto * 0.15 / 100;
    } else {
        descuento = monto * 0.05 / 100;
    }
    return monto - descuento;
}

function permiso() {
    const result = document.getElementById("result1");
    const container = document.getElementById("resultado-container1");
    let input1 = document.getElementById("input1");
    let monto = parseFloat(input1.value);
    let totalConDescuento = calcularTotal(monto);
    container.classList.remove("d-none");
    result.textContent = `Monto a pagar: $${totalConDescuento}`;
    input1.value = "";
}


/*2. Módulo de Salud: Fila de Vacunación (Arreglos y Prioridad)

Gestión de nombres en la fila de espera del consultorio local.
Lógica: * Botón Normal: Agrega el nombre al final de la lista (push).
Botón Urgencia: Agrega el nombre al inicio de la lista (unshift).
Regla: El resultado debe mostrarse como una lista ordenada en el HTML. <ol>*/

let paciente = [];
function filaUrgencia(nombre) {
    paciente.unshift(nombre);
    let contenido = "";
    for (let i = 0; i < paciente.length; i++) {
        contenido += (i + 1) + ".- " + paciente[i] + "<br>";
    }
    return contenido;
}
function vacunaUrgencia() {
    const container = document.getElementById("resultado-container2");
    const result2 = document.getElementById("result2");
    const input = document.getElementById("input2");
    let nombre = input.value;
    let resultado = filaUrgencia(nombre);
    result2.innerHTML = resultado;
    input.value = "";
    container.classList.remove("d-none");
}

function filaNormal(nombre) {
    paciente.push(nombre);
    let contenido = "";
    for (let i = 0; i < paciente.length; i++) {
        contenido += (i + 1) + ".- " + paciente[i] + "<br>";
    }
    return contenido;
}

function vacunaNormal() {
    const container = document.getElementById("resultado-container2");
    const result2 = document.getElementById("result2");
    const input = document.getElementById("input2");
    let nombre = input.value;
    let resultado = filaNormal(nombre);

    result2.innerHTML = resultado;
    input.value = "";
    container.classList.remove("d-none");
}

/*3. Módulo de Subsidios: Buscador de Beneficiarios (Ciclos e If)

Verificar si un RUT o nombre está en el listado de entrega de beneficios.
Lógica: Tener un arreglo con al menos 6 nombres. Usar un ciclo for para 
buscar si el dato ingresado existe en la lista.
Regla: La función debe devolver "Beneficiario Verificado" o "No registrado".*/

let nombresValidos = ["Elisa", "Yulieth", "Isidora", "Isabel", "Alondra", "Krishna"];
function buscarNombre(nombre) {
    for (let i = 0; i < nombresValidos.length; i++) {
        if (nombre == nombresValidos[i]) {
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