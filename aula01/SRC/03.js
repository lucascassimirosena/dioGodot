//Declarando vetores 


/* Vetores são caixas que recebem diversos conteúdos, é uma coleção. Em JS declaramos da mesma forma que variáveis mas utilizamos "[] para incluir os valores da coleção."

As posições da coleção começam (Como em todas as linguagens) com "0".

Estas coleções podem ser variáveis ou constantes.

*/

let pokemon = ["Pikachu", "Charmander", "Bulbassaur"]
let timePokemon = [
    ["Pikachu", "M", "level 1"],
    ["Charmander", "F", "level 4"]

]

// .pop
// Esta função remove o último elemento da array.

/*
Matrizes são bidimencionais e carregam as informações em x e y. Conseguem estocar diversas informações.
*/

console.log("O pokemon " + timePokemon[0][0] + " é do sexo " + timePokemon[0][1])