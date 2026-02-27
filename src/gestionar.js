import chalk from "chalk";   // Importamos la biblioteca chalk para dar estilo a la consola

let tareas = [];  // Arreglo para almacenar las tareas


export function ResumenTareas() {  // Función para mostrar un resumen de las tareas || Muestras #Numero, ID y título de cada tarea

    tareas.forEach((tarea, i) => {
        console.log(chalk.magenta(`#${i + 1}   ${tarea.id} - ${tarea.titulo}\n`));
    });
}


export function AgregarTarea(titulo, descripcion,) {  // Función para agregar una nueva tarea al arreglo de tareas                                                     
    const nuevaTarea = {                              // Recibe el título y la descripción de la tarea como parámetros
        id: Date.now(),
        titulo,
        descripcion,
        estado: false
    };
    tareas.push(nuevaTarea); // Agregamos la nueva tarea al arreglo de tareas

    console.log(chalk.green(`\nNueva tarea agregada: ${chalk.yellow(nuevaTarea.titulo)}\n\n`));
}


export function ListaTareas() {        // Función para mostrar la lista completa de tareas con su estado (completada o pendiente)
    console.clear();

    if (tareas.length === 0) {  // Si no hay tareas registradas, mostramos un mensaje indicando que no hay tareas
        console.log(chalk.yellow("\n\nNo hay tareas registradas.\n")); 
        return;
    }

    tareas.forEach((tarea,i) => {    // Recorremos el arreglo de tareas y mostramos la información de cada tarea
        console.log(chalk.yellow(`\nTAREA #${i+1}`));
        console.log(chalk.cyan(`ID: ${tarea.id}`));
        console.log(chalk.cyan(`Título: ${tarea.titulo}`));
        console.log(chalk.cyan(`Descripción: ${tarea.descripcion}`));
        console.log(chalk.cyan(`Estado: ${tarea.estado ? chalk.green("Completada") : chalk.red("Pendiente")}`));
        console.log(chalk.gray("--------------------------------"));
    });
}



export function CompletarTarea(identificador) {  // Función para marcar una tarea como completada, recibe el ID o #Número de la tarea como parámetro
    let encontrada = false; // Variable para verificar si se encontró la tarea a completar

    if (identificador > 10000) {                                  // Si el identificador es mayor a 10000, se asume que es un ID de tarea
        const tarea = tareas.find((t) => t.id === identificador); // Buscamos la tarea en el arreglo de tareas utilizando el método find() y comparando el ID de cada tarea con el identificador proporcionado
        if (tarea) {                                              // Si se encuentra la tarea, se marca como completada cambiando su estado a true
            tarea.estado = true;
            console.log(chalk.green("\nTarea marcada como completada"));
            encontrada = true;
        }
    }
    if (identificador <= 10000) {                   // Si el identificador es menor o igual a 10000, se asume que es un #Número de tarea
        const index = identificador - 1;            // el index es el numero de la tarea -1, ya que el #Número de tarea comienza desde 1, mientras que los índices de los arreglos comienzan desde 0
        if (index >= 0 && index < tareas.length) {  // Verificamos que el índice esté dentro del rango válido del arreglo de tareas
            tareas[index].estado = true;            // Si el índice es válido, se marca la tarea correspondiente como completada cambiando su estado a true
            console.log(chalk.green("\nTarea marcada como completada"));
            encontrada = true;
        }
    }else if (encontrada === false) {
        console.log(chalk.red("\nTarea no encontrada"));
    }
}



export function EliminarTarea(identificador) {     // Función para eliminar una tarea, recibe el ID o #Número de la tarea como parámetro
    
    let encontrada = false;   // Variable para verificar si se encontró la tarea a eliminar

    if (identificador > 10000) {                                     // Si el identificador es mayor a 10000, se asume que es un ID de tarea
        const tarea = tareas.find((t) => t.id === identificador);    // Buscamos la tarea en el arreglo de tareas utilizando el método find() y comparando el ID de cada tarea con el identificador proporcionado
        if (tarea) {                                                 // Si se encuentra la tarea, se elimina del arreglo de tareas utilizando el método filter() para crear un nuevo arreglo sin la tarea eliminada
            tareas = tareas.filter(t => t.id !== identificador);
            console.log(chalk.green("\nTarea eliminada"));
            encontrada = true;
        }
    }
    if (identificador <= 10000) {                           // Si el identificador es menor o igual a 10000, se asume que es un #Número de tarea
        const index = identificador - 1;                    // el index es el numero de la tarea -1, ya que el #Número de tarea comienza desde 1, mientras que los índices de los arreglos comienzan desde 0
        if (index >= 0 && index < tareas.length) {          // Verificamos que el índice esté dentro del rango válido del arreglo de tareas
            tareas.splice(index, 1);                        // Si el índice es válido, se elimina la tarea correspondiente utilizando el método splice() para eliminar un elemento del arreglo en la posición especificada
            console.log(chalk.green("\nTarea eliminada"));
            encontrada = true;
        }
    }else if (encontrada === false) {                       // Si no se encuentra la tarea a eliminar, se muestra un mensaje indicando que la tarea no fue encontrada
        console.log(chalk.red("\nTarea no encontrada"));
    }
}