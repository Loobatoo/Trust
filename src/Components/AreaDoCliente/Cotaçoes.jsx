import React from 'react'

import classes from './AreaDoCliente.module.css'

const Cotaçoes = ({Corretor, Data, Download}) => {
  return (
    <div className={classes.ContainerCotacoes}>
        <div className={classes.Infos}>
            <div>
                <h1> Corretor: </h1>
                <p> {Corretor} </p> 
            </div>
            <div>
                <h1> Data: </h1>
                <p> {Data} </p>
            </div>
        </div>
        <button type="button"> Baixar em PDF </button>
    </div>
  )
}

export default Cotaçoes