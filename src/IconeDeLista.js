import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
import { black } from 'color-name';
import { width, height, fontStyle, display } from '@material-ui/system';
import { wrap } from 'module';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles({
    container: {
        'background-color': 'rgb(254, 243, 221)',
        width: '300px',
        color: 'rgb(131, 131, 139)',
       
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
    }

})
function IconeDeLista(props) {
    const classes = useStyles()
    return (
        <Container className={classes.container}>
            <div className={classes.tituloLista}>
                {props.lista.nome}
            </div>
            <div className={classes.produto}>
                <div>
                    <Checkbox checked={props.lista.produtos[0].comprado} size='small' ></Checkbox>
                    {props.lista.produtos[0].nome}
                </div>
                <div className={classes.preco}>
                    {props.lista.produtos[0].preco}
                </div>
            </div>

            <div className={classes.produto}>
                <div> 
                    <Checkbox checked={props.lista.produtos[1].comprado} size='small'></Checkbox>
                    {props.lista.produtos[1].nome}
                </div>
                <div className={classes.preco}>
                    {props.lista.produtos[1].preco}
                </div>
            </div>
            <div className={classes.produto}>
                <div>
                    <Checkbox checked={props.lista.produtos[2].comprado} size='small'></Checkbox>
                {props.lista.produtos[2].nome}
                </div>
                <div className={classes.preco}>
                    {props.lista.produtos[2].preco}
                </div>
            </div>

        </Container>
    )
}
export default IconeDeLista;
