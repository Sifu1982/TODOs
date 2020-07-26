function guardarTarea(pNuevaTarea) {
    tarea.push(pNuevaTarea);
}

function borrar(pId) {
    let id = parseInt(pId);

    let posicionBorrar = tarea.findIndex(tarea => tarea.id == id);


    tarea.splice(posicionBorrar, 1);

}