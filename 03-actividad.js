// console.log(process.argv)

// if (process.argv[2] !== undefined) {
//     console.log('si tengo argumentos')
// } else {
//     console.log('no tengo argumentos')
// }

process.on('exit', code => {
    console.log(`Process ended with code ${code}`)
})

let argumentos = process.argv.slice(2)
let cantArg = argumentos.length

if (cantArg === 0) {
    console.log({
        error: {
            description: 'Entrada vacía'
        }
    })
    process.exit(-4)
}

let converter = array => {
    let convertedArgs = array.map(arg => {
        if (isNaN(arg)) {
            console.log({
                error: {
                    description: 'Error de tipo',
                    numeros: array,
                    tipos: array.map(arg => {
                        if (isNaN(arg)) return typeof arg
                        return 'number'
                    })
                }
            })
            process.exit(-5)
        }
        return parseInt(arg)
    })
    return convertedArgs
}

let processedNumbers = converter(argumentos)

console.log({
    numeros: processedNumbers,
    promedio: processedNumbers.reduce((acc, curr) => acc+curr)/processedNumbers.length,
    max: Math.max(...processedNumbers),
    min: Math.min(...processedNumbers),
    ejecutable: process.argv[1],
    pid: process.pid
})