function soma (...args) {
    const somaNumeros = args.reduce((acum, val) => acum + val)
    return somaNumeros
}
console.log(soma(1, 1, 1, 3))