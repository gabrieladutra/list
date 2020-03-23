import React from 'react'
import { Container, makeStyles } from '@material-ui/core';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({

    linhaProduto:{
        display: 'flex',
        'flex-direction': 'row',
        'justify-content': 'space-between',
        padding: '0px'


    },
    produto: {
        display: 'flex',
        'justify-content': 'flex-start',
        'flex-direction': 'row',
    },


    verticalmenteAlinhado: {
        display: 'flex',
        'justify-content': 'center',
        'flex-direction': 'column'
    },
    MuiCheckbox:{
        padding: '1px'
    }

})

function IconeDeListaLinha(props) {
    const classes = useStyles()
    return (
        <Container className={classes.linhaProduto}>
                <div className={classes.produto}>
                    <Checkbox checked={props.produto.comprado} size='small' className= {classes.MuiCheckbox}></Checkbox>
                          <div className={classes.verticalmenteAlinhado}>
                              {props.produto.nome}
                          </div>
                 </div> 
                  
                <div className={classes.verticalmenteAlinhado}>
                    {props.produto.preco}
                </div>
        </Container>
    )
}
export default IconeDeListaLinha