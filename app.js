const logica = require('./funcionesDeTareas')
const bd = require('./database/tareas.json')

let opcion = process.argv[2]
const verificarOpciones = (opcion)=>{  
    switch (opcion){
        case 'listar':
            console.log(bd)
            break
        case undefined:
            console.log('Atención - Tienes que pasar una opción')
            break
        case 'crear':
            logica.guardarTarea(process.argv[3], 'Pendiente')
            break
        case 'filtrar':
            logica.filtrarPorEstdo(process.argv[3])
            break
        default:
            console.log('No entiendo qué quieres hacer')
            break        
    }
}

verificarOpciones(opcion)


