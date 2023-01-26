console.log('Hola Mundo!')

process.on('exit', code => {
    if (code === 0) console.log('Todo estuve bien')
    else console.log('una de las funciones no está declarada')
})

process.on('uncaughtException', () => {
    process.exit(-1)
})
funcionA()
console.log('Hola de nuevo')
