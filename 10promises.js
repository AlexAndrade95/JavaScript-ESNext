function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => { //resolve = promise resolvida, reject = promise rejeitada 
        setTimeout(() => {
            resolve(frase) //aceita apenas um parametro
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que legal!') //then = sera passado depois do resolve
    .then(frase => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e)) //em caso de erro