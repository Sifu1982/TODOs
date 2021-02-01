let contador = listaTareas.length + 1;
function guardarTarea(pListaTareas, pTarea, pPrioridad) {
    let newTarea = {
        id: contador,
        tarea: pTarea,
        prioridad: pPrioridad
    };
    pListaTareas.unshift(newTarea);
    contador++;
    return pListaTareas;
};

function borrarTarea(pListaTareas, pId) {
    let posicionBorrar = pListaTareas.findIndex(pTarea => pTarea.id == pId);
    pListaTareas.splice(posicionBorrar, 1);
    return pListaTareas;
};

function filtrarXPrioridad(pListaTareas, pPrioridad) {
    let listaXPrioridad = [];
    listaXPrioridad = pListaTareas.filter(pTarea => pTarea.prioridad == pPrioridad);
    return listaXPrioridad;
};

function buscarTarea(pListaTareas, pTextoABuscar) {
    let listaFiltrada = [];
    let textoEnMinusculas = pTextoABuscar.toLowerCase();
    listaFiltrada = pListaTareas.filter(pTarea => pTarea.tarea.toLowerCase().includes(textoEnMinusculas));
    return listaFiltrada;
};

/**
 * 
 * PINTAR TAREAS
 * 
 */

let sectionTareas = document.querySelector('.tareas');

function pintarTareas(pListaTareas) {
    sectionTareas.innerHTML = '';
    pListaTareas.forEach(pTarea => pintarTarea(pTarea));
};

function pintarTarea(pTarea) {
    sectionTareas.innerHTML += ` <article class="row ${pTarea.prioridad}" id="${pTarea.id}">
                                    <div class="col-12 col-md-10">
                                        <p>${pTarea.tarea}</p>
                                    </div>
                                    <div class="col-12 col-md-2">
                                        <button type="button" class="btn btn-danger" onclick="eliminarTarea(${pTarea.id})">Eliminar</button>
                                    </div>
                                </article>`;
};

/**
 * 
 * ELIMINAR TAREAS
 * eliminarTarea viene del onclick de pintarTarea
 * 
 */
function eliminarTarea(pId) {
    let tareaBorrar = document.getElementById(pId);
    sectionTareas.removeChild(tareaBorrar);
    borrarTarea(listaTareas, pId);
};

