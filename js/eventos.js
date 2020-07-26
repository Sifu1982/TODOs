let btnGuardar = document.getElementById('guardar');
let inputTarea = document.getElementById('textoTarea');
let selecTarea = document.getElementById('tipoTarea');
let contadorTareas = 2;

let newTarea = document.querySelector('.tareas');

//Evento de introducir una tarea
btnGuardar.addEventListener('click', capturarDatosTarea);

function capturarDatosTarea(event) {
    event.preventDefault();

    let tarea = inputTarea.value;
    let tareaSeleccionada = selecTarea.value;

    // console.log('tarea escrita: ', tarea, tareaSeleccionada);

    const nuevaTarea = {
        id: contadorTareas,
        tarea: tarea,
        prioridad: tareaSeleccionada
    }
    // console.log(nuevaTarea);

    guardarTarea(nuevaTarea);

    console.log(nuevaTarea);
    pintarTarea(nuevaTarea);

    inputTarea.value = '';
    contadorTareas++;
}


function pintarTarea(pTarea) {
    newTarea.innerHTML += `<div data-id="${pTarea.id}" id="noticia_${pTarea.id}" class="col-12 col-md-10">
    <p>${pTarea.tarea}</p>
</div>
<div class="col-12 col-md-2">
    <button onclick="borrarNoticia('noticia_${pTarea.id}')"  type="button" class="btn btn-danger">Eliminar</button>
</div>`

}

function pintarTareas(pListaTareas) {
    newTarea.innerHTML = '';

    pListaTareas.forEach(pTarea => {
        pintarTarea(pTarea);
    });

}

function borrarTarea(pTareaBorrar) {

    let tareaBorrar = document.getElementById(pTareaBorrar);
    newTarea.removeChild(tareaBorrar);
    let id = pTareaBorrar.substring(6)
    console.log(id);
    borrar(id)
}


// //Evento de cambiar de tipo de tarea

// selecTarea.addEventListener('change', capturarPrioridadTarea);

// function capturarPrioridadTarea(event) {
//     let prioridadTarea = event.target.value;
// }



pintarTareas(tarea);