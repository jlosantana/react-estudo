import React from 'react'

import './App.css'

import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'


export default (props) =>
    <div className="App">
        <Card footer="Exercício 1">
            <Primeiro />
        </Card>
        <Card footer="Exercício 2">
            <ComParametro titulo="Esse é o titulo" subtitulo="Esse é o subtítulo"></ComParametro>
        </Card>
        <Card footer="Exercício 3">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>José</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card footer="Exercício 4">
            <Repeticao />
        </Card>
        <Card footer="Exercício 5">
            <Condicional numero={10} />
        </Card>
        <Card footer="Exercício 5v2">
            <CondicionalComIf numero={11} />
        </Card>
    </div>