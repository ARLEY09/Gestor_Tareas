import readline from 'readline'
import chalk from "chalk";

const leer = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

import {AgregarTarea, ListaTareas, CompletarTarea, EliminarTarea, ResumenTareas} from "./gestionar.js";

export function MenuPrincipal() {
    console.clear();
    console.log(chalk.yellowBright("\n\n--------------------"));
    console.log(chalk.yellow.bold("|| MENU PRINCIPAL ||"));
    console.log(chalk.yellowBright("--------------------"));
    console.log(chalk.blue(`1. Agregar tarea`));
    console.log(chalk.blue("2. Ver tareas"));
    console.log(chalk.blue("3. Completar tarea"));
    console.log(chalk.blue("4. Eliminar tarea"));
    console.log(chalk.blue("5. Salir"));
    console.log(chalk.yellow("--------------------\n"));

  leer.question(chalk.blue('Ingrese una opcion: '), opcion => {
        switch (opcion) {
            case '1':
                console.clear();
                console.log(chalk.yellowBright("\n\n------------------------"));
                console.log(chalk.yellow.bold("|| AGREGAR NUEVA TAREA ||"));
                console.log(chalk.yellowBright("------------------------\n"));
                leer.question(chalk.cyan('Escriba  un titulo para la nueva tarea: '), titulo => {
                    leer.question(chalk.cyan('Digite la descripcion de la tarea: '), descripcion => {
                        AgregarTarea(titulo, descripcion);
                        
                        leer.question(chalk.blue('Desea volver al menú principal? (s/n): '), op => {
                            switch (op.toLowerCase()) {
                                case 's':
                                    MenuPrincipal()
                                break;
                                case 'n':
                                    console.log(chalk.yellow('Gracias por usar nuestra aplicaición'))
                                    leer.close()
                                break;
                                default:
                                    console.log(chalk.red('Opcion invalida, volviendo al menú principal'))
                                    MenuPrincipal()
                                break; 
                            }

                        })
                    })
                })
            break;
          case '2':
            console.clear();
                console.log(chalk.yellowBright("\n\n--------------------"));
                console.log(chalk.yellow.bold("|| LISTA DE TAREAS ||"));
                console.log(chalk.yellowBright("--------------------\n"));
            ListaTareas();
            leer.question('Desea volver al menú principal? (s/n): ', op => {
              switch (op.toLowerCase()) {
                case 's':
                  MenuPrincipal()
                  break;
                case 'n':
                  console.log(chalk.yellow('Gracias por usar nuestra aplicaición'))
                  leer.close()
                  break;
                default:
                  console.log(chalk.red('Opcion invalida, volviendo al menú principal'))
                  MenuPrincipal()
                  break;
              }
            })
            break;
            case '3':
                console.clear();
                console.log(chalk.yellowBright("\n\n--------------------"));
                console.log(chalk.yellow.bold("|| COMPLETAR TAREA ||"));
                console.log(chalk.yellowBright("--------------------\n"));
                ResumenTareas();
                leer.question(chalk.cyan('\nIngrese el ID o #Numero de la tarea a completar: '), identificador => {
                    CompletarTarea(Number(identificador));
                    leer.question('\nDesea volver al menú principal? (s/n): ', op => {
                        switch (op.toLowerCase()) {
                            case 's':
                                MenuPrincipal()
                            break;
                            case 'n':
                                console.log(chalk.yellow('Gracias por usar nuestra aplicaición'))
                                leer.close()
                            break;
                            default:
                                console.log(chalk.red('Opcion invalida, volviendo al menú principal'))
                                MenuPrincipal()
                            break;
                        }
                    })
                })

            break;

            case '4':
                console.clear();
                console.log(chalk.yellowBright("\n\n--------------------"));
                console.log(chalk.yellow.bold("|| ELIMINAR TAREA ||"));
                console.log(chalk.yellowBright("--------------------\n"));
                ResumenTareas();
                leer.question(chalk.cyan('\nIngrese el ID o #Numero de la tarea a eliminar: '), identificador => {
                    EliminarTarea(Number(identificador));
                    leer.question('\nDesea volver al menú principal? (s/n): ', op => {
                        switch (op.toLowerCase()) {
                            case 's':
                                MenuPrincipal()
                            break;
                            case 'n':
                                console.log(chalk.yellow('Gracias por usar nuestra aplicaición'))
                                leer.close()
                            break;
                            default:
                                console.log(chalk.red('Opcion invalida, volviendo al menú principal'))
                                MenuPrincipal()
                            break;
                        }
                    })
                })

            break;

            case '5':
                console.clear();
                console.log(chalk.yellow('\n\nGracias por usar nuestra aplicaición'))
                leer.close()
            break;
            
            default:
                console.log(chalk.red('Opcion invalida'))
                MenuPrincipal()
        }
    })     
}