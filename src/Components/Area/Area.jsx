import React from 'react'

import classes from './Area.module.css'

import { useState } from 'react'

const Area = () => {

    const [Usuario, SetUsuario] = useState("")
    const [Senha, SetSenha] = useState("")

    const HandleUsuario = (e) => {

        SetUsuario(e.target.value);
      }
    
      const HandleSenha = (e) => {
    
        SetSenha(e.target.value);
      }


      function Enviar(){
        console.log(Usuario);
        console.log(Senha);
      }

  return (
    <div className={classes.Container}>
      <div className={classes.Header}>
        <h1> Trust </h1>

      </div>
      <div className={classes.Body}>
        <div className={classes.Banner}>
            <h1> Bem vindo a Área do Cliente! </h1>
        </div>
        <div className={classes.Form}>
            <div className={classes.inputlabel}>
            <label> Usuário: </label>
            <input 
                type="text"
                required 
                onChange={HandleUsuario}/>
            </div>
            <div className={classes.inputlabel}>
            <label> Senha: </label>
            <input 
                type="text"
                required 
                onChange={HandleSenha}/>
            </div>
        </div>
            <button id="Enviar" onClick={Enviar}> Enviar </button>
      </div>
      <div className={classes.Footer}>
          <h1> Copyright@PedroLobato2024 </h1>
      </div>
    </div>
  )
}

export default Area