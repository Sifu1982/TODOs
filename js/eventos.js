let inputTarea = document.getElementById('textoTarea');
let selectTarea = document.getElementById('tipoTarea');
let btnAniadir = document.getElementById('aniadir');
let filtroXPrioridad = document.getElementById('filtroPrioridad');
let filtroXTarea = document.getElementById('filtroTarea');

inputTarea.value = '';
inputTarea.focus();
selectTarea.value = '';
filtroXPrioridad.value = '';
filtroXTarea.value = '';

btnAniadir.addEventListener('click', capturarAniadir);

function capturarAniadir() {
    let texto = inputTarea.value;
    let prioridad = selectTarea.value;
    if (texto != '' && prioridad != '') {
        guardarTarea(listaTareas, texto, prioridad);
        pintarTareas(listaTareas);
    };
    inputTarea.value = '';
    inputTarea.focus();
    selectTarea.value = '';
};

filtroXPrioridad.addEventListener('change', capturarFiltroXPrioridad);

function capturarFiltroXPrioridad() {
    let prioridad = filtroXPrioridad.value.toLowerCase();
    if (prioridad == '') {
        pintarTareas(listaTareas);
    } else {
        pintarTareas(filtrarXPrioridad(listaTareas, prioridad));
    };
};

filtroXTarea.addEventListener('input', capturarFiltroXTarea);

function capturarFiltroXTarea() {
    let texto = filtroXTarea.value;
    pintarTareas(buscarTarea(listaTareas, texto));
};


pintarTareas(listaTareas);

