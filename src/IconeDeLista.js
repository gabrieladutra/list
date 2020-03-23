import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { black } from 'color-name';
import { width, height, fontStyle, display } from '@material-ui/system';
import { wrap } from 'module';
import Checkbox from '@material-ui/core/Checkbox';
import IconeDeListaLinha from './IconeDeListaLinha';

const useStyles = makeStyles({
    container: {
        'background-color': 'rgb(254, 243, 221)',
        width: '300px',
        color: 'rgb(131, 131, 139)',
        border: '4px solid black'

        
       
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
    }

})
function IconeDeLista(props) {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <div className={classes.tituloLista}>
                {props.lista.nome}
            </div>
            <IconeDeListaLinha produto={props.lista.produtos[0]}></IconeDeListaLinha>
            <IconeDeListaLinha produto={props.lista.produtos[1]}></IconeDeListaLinha>
            <IconeDeListaLinha produto={props.lista.produtos[2]}></IconeDeListaLinha>
            


        </Container>
    )
}
export default IconeDeLista;

