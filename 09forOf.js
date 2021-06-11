for (let letra of "Cod3r") {
    console.log(letra)
}
/* C
   o
   d
   3 
   r
*/

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)
}
/* 0  //for in percorre por indice
   1
   2
*/

for (let assunto of assuntosEcma) {
    console.log(assunto)
}
/* Map
   Set
   Promise 
*/

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let assunto of assuntosMap) {
    console.log(assunto)
}
/*  chave, valor
[ 'Map', { abordado: true } ]
[ 'Set', { abordado: true } ]
[ 'Promise', { abordado: false } ]
*/

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}
/* chaves 
Map
Set
Promise
 */
for (let valor of assuntosMap.values()) {
    console.log(valor)
}
/* valor
{ abordado: true }
{ abordado: true }
{ abordado: false }
 */

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}
/* chave e valor separados
Map { abordado: true }
Set { abordado: true }
Promise { abordado: false } 
*/

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}
/* a
   b
   c 
*/