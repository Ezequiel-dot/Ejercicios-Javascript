export const PI = Math.PI

function sumar(a,b){
    return a + b
}

function restar(a,b){
    return a - b
}


export const calcu = {
    sumar,
    restar
}

//default es para no tener que poner la funcion en el import
export default function saludar(nombre){
    console.log(`hola ${nombre}`)
}