// variavel
const numero = 10
numero = 20 // erro

const frutas = []
frutas.push("banana")

const pessoa = { id: 1, nome: "Jose" }
pessoa.sexo = 'M'
pessoa['sexo'] = 'M'

pessoa = { id: 2, nome: "Maria"}

let cont = 0

// funcoes
const soma = (a, b) => a + b

const getTasks = () => tasks

function getTasks() {
    return tasks
}

function App() {
    return (
        <View>            
        </View>
    );

}

const App = () => <View></View>

// propagacao
frutas.push(...["uva", "maca"])
["banana", "uva", "maca"]

// desestruturacao
const {id, nome} = pessoa

// modulos
export default pessoa

export {frutas, soma}


import pessoa from 'revisao'

import { frutas } from 'revisao'

import { View } from 'react-native'