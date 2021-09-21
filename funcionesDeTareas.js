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

module.exports = {guardarTarea, filtrarPorEstdo}

console.log('OK')


