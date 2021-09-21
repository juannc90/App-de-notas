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

const filtrarPorEstdo = function(estado){
    console.log(bd.filter(item => item.estado == estado))
}


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
            guardarTarea(process.argv[3], 'Pendiente')
            break
        case 'filtrar':
            filtrarPorEstdo(process.argv[3])
            break
        default:
            console.log('No entiendo qué quieres hacer')
            break        
    }
}

module.exports = {guardarTarea, verificarOpciones, filtrarPorEstdo}

console.log('OK')

verificarOpciones(opcion)
