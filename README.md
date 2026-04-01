# evaluacionJS_funcionesdobles

# 1. Módulo de Tesorería: Pago de Permisos (Cálculos y Retorno)
- El vecino ingresa el monto de su permiso de circulación para saber cuánto pagará
tras el descuento municipal. Lógica: Si el monto es mayor a $70.000,
el descuento es del 15%. Si es menor, es del 5%. Regla: La Función Principal 
debe mostrar el total a pagar con un signo de peso ($).


function calcularTotal(monto) { = funcion que recibe el precio
    let descuento; = variable que guarda el descuento
    if (monto > 70000) { = condicion para los numeros mayores a 70000
        descuento = monto * 0.15 / 100; = calcula el descuento si el monto es mayor a 70000
    } else { = si no cumple con la condicion anterior..
        descuento = monto * 0.05 / 100; = calcula el descuento si el monto no es mayor a 70000
    }
    return monto - descuento; = le quita el descuento al monto inicial
}

function permiso() { 
    const result = document.getElementById("result1"); = atrapa el elemento de html
    const container = document.getElementById("resultado-container1"); = atrapa el elemento de html
    let input1 = document.getElementById("input1"); = atrapa el elemento de html
    let monto = parseFloat(input1.value);= indica que el elemneto del input es un numero
    let totalConDescuento = calcularTotal(monto); = para guardar el resultado de la funcion "calcularTotal(monto)"
    container.classList.remove("d-none"); quita lo "invisible" para ver el resultado
    result.textContent = `Monto a pagar: $${totalConDescuento}`; = mensaje que se muestra en la pantalla 
    input1.value = ""; borra lo escrito en el input anteriormente
}

# 2. Módulo de Salud: Fila de Vacunación (Arreglos y Prioridad)
- Gestión de nombres en la fila de espera del consultorio local.
Lógica: * Botón Normal: Agrega el nombre al final de la lista (push).
Botón Urgencia: Agrega el nombre al inicio de la lista (unshift).
Regla: El resultado debe mostrarse como una lista ordenada en el HTML. <ol>*/

let paciente = []; = guarda los nombres en una lista
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

# 3. Módulo de Subsidios: Buscador de Beneficiarios (Ciclos e If)
- Verificar si un RUT o nombre está en el listado de entrega de beneficios.
Lógica: Tener un arreglo con al menos 6 nombres. Usar un ciclo for para 
buscar si el dato ingresado existe en la lista.
Regla: La función debe devolver "Beneficiario Verificado" o "No registrado".*/

let nombresValidos = ["Elisa", "Yulieth", "Isidora", "Isabel", "Alondra", "Krishna"]; = lista de nombres de feneficiados
function buscarNombre(nombre) { = funcion para vefificar los nombres de los beneficiados
    for (let i = 0; i < nombresValidos.length; i++) { = ciclo que rebiza los nombres de la lista
        if (nombre == nombresValidos[i]) { = si el nombre ingresado esta en la lista
            return "Beneficiario Verificado" = devuelve este mensaje
        } else { = si no cumple con la condicion anterior
            mensaje = "No registrado" = muestra este mensaje
        }
    }
    return mensaje
}

function verificarNombre() { 
    let input = document.getElementById("input3"); = guarda lo que uno escribe en el input en html
    let nombre = input.value; = guarda el nombre en la variable
    const result3 = document.getElementById("result3"); = atrapa el elemento del html
    const container = document.getElementById("resultado-container3"); = atrapa el elemento del html
    let result = buscarNombre(nombre); = variable que guarda el resultado de la otra funcion
    result3.textContent = result; = coloca el mensaje en la pantalla
    input.value = ""; = borra lo escrito en el input anteriormente
    container.classList.remove("d-none"); = quita el display para ver el resultado
}