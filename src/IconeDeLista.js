import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';
import IconeDeListaLinha from './IconeDeListaLinha';

const useStyles = makeStyles({
    //variável constante que recebe o valor de um objeto da bivlioteca mkStyles
    container: {
        'background-color': 'rgb(254, 243, 221)',
        width: '300px',
        color: 'rgb(131, 131, 139)',
        border: '1px solid rgb(54,54,54)'

        
       
    },
    tituloLista: {
        color: 'black',
        'font-weight': 'bold',
        textAlign: 'left',
        textAlign: 'center',
    },
    produto: {

        display: 'flex',
        'justify-content': 'space-between',
        'flex-direction': 'row',
        
    },
    preco:{
       display: 'flex',
       justifyContent: 'center',
       flexDirection: 'column'
    },

    MuiCheckbox:{
        padding: '1px'
    },

    intensOcultos:{
        display: 'flex',
        'justify-content': 'flex-start',
        'flex-direction': 'row',
    }

})

function IconeDeLista(props){
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <div className={classes.tituloLista}>
                {props.lista.nome}
            </div>
            {props.lista.produtos[0] 
                ? (<IconeDeListaLinha produto={props.lista.produtos[0]}></IconeDeListaLinha>)
                : <div></div>}
            {props.lista.produtos[1] 
                ? (<IconeDeListaLinha produto={props.lista.produtos[1]}></IconeDeListaLinha>)
                : <div></div>}
            {props.lista.produtos[2] 
                ? (<IconeDeListaLinha produto={props.lista.produtos[2]}></IconeDeListaLinha>)
                : <div></div>}
            {props.lista.produtos[3]
                ? (<div className={classes.intensOcultos}>(...)</div>)
                : <div></div>}
                {/* //  condicao ternario:quando a lista tiver mais que tês produtos deve retornar  */}
        </Container>
    )
}
export default IconeDeLista;
