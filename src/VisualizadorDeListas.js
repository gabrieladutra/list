import React from 'react'
import { Container } from '@material-ui/core';
import IconeDeLista from './IconeDeLista';

function VisualizadorDeLista(){
    return (
        <Container>
            <IconeDeLista lista={recuperarListasDeCompras()[0]}/>
        </Container>
    )
}
export default VisualizadorDeLista

function recuperarListasDeCompras() {
    return [
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
                },
                {
                    nome: "Roupas",
                    preco: 299.99,
                    quantidade: 5,
                    comprado: false
        
                }
            ]
        }
            
        
    ]
    
}