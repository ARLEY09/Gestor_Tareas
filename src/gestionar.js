import chalk from "chalk";

let tareas = [];


export function ResumenTareas() {

    tareas.forEach((tarea, i) => {
        console.log(chalk.magenta(`#${i + 1}   ${tarea.id} - ${tarea.titulo}\n`));
    });
}

export function AgregarTarea(titulo, descripcion,) {

    const nuevaTarea = {
        id: Date.now(),
        titulo,
        descripcion,
        estado: false
    };
    tareas.push(nuevaTarea);

    console.log(chalk.green(`\nNueva tarea agregada: ${chalk.yellow(nuevaTarea.titulo)}\n\n`));
}

export function ListaTareas() {
    console.clear();

    if (tareas.length === 0) {
        console.log(chalk.yellow("\n\nNo hay tareas registradas.\n"));
        return;
    }

    tareas.forEach((tarea,i) => {
        //console.log(chalk.yellow("--------------------------------"));
        console.log(chalk.yellow(`\nTAREA #${i+1}`));
        console.log(chalk.cyan(`ID: ${tarea.id}`));
        console.log(chalk.cyan(`Título: ${tarea.titulo}`));
        console.log(chalk.cyan(`Descripción: ${tarea.descripcion}`));
        console.log(chalk.cyan(`Estado: ${tarea.estado ? chalk.green("Completada") : chalk.red("Pendiente")}`));
        console.log(chalk.gray("--------------------------------"));
    });
}

export function CompletarTarea(identificador) {
    let encontrada = false;

    if (identificador > 10000) {
        const tarea = tareas.find((t) => t.id === identificador);
        if (tarea) {
            tarea.estado = true;
            console.log(chalk.green("\nTarea marcada como completada"));
            encontrada = true;
        }
    }
    if (identificador <= 10000) {
        const index = identificador - 1;
        if (index >= 0 && index < tareas.length) {
            tareas[index].estado = true;
            console.log(chalk.green("\nTarea marcada como completada"));
            encontrada = true;
        }
    }else if (encontrada === false) {
        console.log(chalk.red("\nTarea no encontrada"));
    }
}

export function EliminarTarea(identificador) {
    
    let encontrada = false;

    if (identificador > 10000) {
        const tarea = tareas.find((t) => t.id === identificador);
        if (tarea) {
            tareas = tareas.filter(t => t.id !== identificador);
            console.log(chalk.green("\nTarea eliminada"));
            encontrada = true;
        }
    }
    if (identificador <= 10000) {
        const index = identificador - 1;
        if (index >= 0 && index < tareas.length) {
            tareas.splice(index, 1);
            console.log(chalk.green("\nTarea eliminada"));
            encontrada = true;
        }
    }else if (encontrada === false) {
        console.log(chalk.red("\nTarea no encontrada"));
    }
}