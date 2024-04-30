import React from 'react'

import classes from './AreaDoCliente.module.css'
import Cotaçoes from './Cotaçoes'

const AreadoCliente = () => {
  return (
    <div className={classes.Container}>
    <div className={classes.Header}>
      <h1> Trust </h1>
      <div className={classes.Perfil}>   
          <img src="" alt="" />
          <p> Minha Conta </p>
      </div>
    </div>
    <div className={classes.Body}>
      <div className={classes.Banner}>
        <h1> Bem - Vindo </h1>
        <h1> a sua Àrea ! </h1>
      </div>
      <div className={classes.Cotacoes}>
        <h1> Minhas cotaçoes </h1>
        <Cotaçoes Corretor="Lucas Silva" Data="21/04/2024"/>
        <Cotaçoes Corretor="Matheus Pereira" Data="24/04/2024"/>
        <Cotaçoes Corretor="Álvaro Barreal" Data="27/04/2024"/>


        
      </div>
    </div>
    <div className={classes.Footer}>
        <h1> Copyright@PedroLobato2024 </h1>
    </div>
  </div>
  )
}

export default AreadoCliente