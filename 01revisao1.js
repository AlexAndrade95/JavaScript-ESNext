// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)
// 3
// 2 // o let tem escopo de bloco

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)
// iPad é caro!

// Destructuring
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)
// C o [ 'd', '3', 'r' ] 

const [x, , y] = [1, 2, 3]
console.log(x, y)
// 1 3

const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)
// 9 Ana