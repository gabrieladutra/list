import React from 'react'
import { Container } from '@material-ui/core';
import IconeDeLista from './IconeDeLista';
import IconeDeListaLinha from './IconeDeListaLinha';

function VisualizadorDeLista(){
    const listas = recuperarListasDeCompras();
    return (
        <Container>
            {listas.map(function (listaAtual) {
                return (<IconeDeLista lista={listaAtual}/>)
            })}
        </Container>
    )
}

export default VisualizadorDeLista //tornar visivel para acesso

function recuperarListasDeCompras() {
    const random = Math.ceil(3 * Math.random()) // 1 - 3
    let comprasRnd;
// variavel que retorna  listas de compras aleatorias
    if (random == 1)
        comprasRnd = [compras[1], compras[3], compras[4]]
    else if (random == 2)
        comprasRnd = [compras[2], compras[4], compras[1]]
    else
        comprasRnd = [compras[0], compras[3]]

    return comprasRnd
}

// [todas as listas]
const compras = [
    {
        nome: 'Compras da Semana',
        produtos: [
            {
                nome: "Mixer",
                preco: 89.99,
                quantidade: 1,
                comprado: true
            },
            {
                nome: "Televisao",
                preco: 1189.99,
                quantidade: 1,
                comprado: false
            },
            {
                nome: "DVD",
                preco: 89.99,
                quantidade: 1,
                comprado: false
    
            }
        ]
    },
    {
        nome: "Compras do mês",
        produtos: [
            {
                nome: "Fogão",
                preco: 789.99,
                quantidade: 1,
                comprado: false
            },
            {
                nome: "Mesa",
                preco: 189.99,
                quantidade: 1,
                comprado: false
            }
        ]
    },
    {
        nome: "Compras cachorro",
        produtos: [
            {
                nome: "Cachorro",
                preco: 1789.99,
                quantidade: 1,
                comprado: false
            },
            {
                nome: "Bebedor",
                preco: 39.99,
                quantidade: 1,
                comprado: false
            },
            {
                nome: "Raçâo",
                preco: 79.99,
                quantidade: 3,
                comprado: true
            },
            {
                nome: "Cama de cachorro",
                preco: 179.99,
                quantidade: 1,
                comprado: true
            }
        ]
    },
    {
        nome: "Compras do ano",
        produtos: [
            {
                nome: "TV",
                preco: 2789.99,
                quantidade: 1,
                comprado: true
            },
            {
                nome: "Carro",
                preco: 39999.99,
                quantidade: 1,
                comprado: false
            }
        ]
    },
    {
        nome: "Compras no Shopping",
        produtos: [
            {
                nome: "Roupas",
                preco: 189.99,
                quantidade: 5,
                comprado: false
            }
        ]
    }
]
