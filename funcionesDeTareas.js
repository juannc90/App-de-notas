const fs = require('fs')
const bd = require('./database/tareas.json')
const guardarTarea = (titulo, estado)=>{
    const tarea = {
        titulo : titulo,
        estado : estado,
    }
    bd.push(tarea)
    const escribirJSON = JSON.stringify(bd,null,4)
    fs.writeFileSync('./database/tareas.json', escribirJSON)
}

// registrarTarea()


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
            guardarTarea('Dormir', 'Pendiente')
            break
        default:
            console.log('No entiendo qué quieres hacer')
            break        
    }
}

module.exports = {guardarTarea, verificarOpciones}

console.log('OK')

verificarOpciones(opcion)
