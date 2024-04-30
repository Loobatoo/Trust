import React from 'react'

import classes from './AreaDoCorretor.module.css'
import { useState } from 'react'
import InputLbl from '../InputLbl'

const AreadoCorretor = () => {

  const [Usuario, SetUsuario] = useState("")
  const [Senha, SetSenha] = useState("")
  const [ConfirmaSenha, SetConfirmaSenha] = useState("")

  const HandleUsuario = (e) => {

    SetUsuario(e.target.value);
  }

  const HandleSenha = (e) => {

    SetSenha(e.target.value);
  }

  const HandleConfirmaSenha = (e) => {

    SetConfirmaSenha(e.target.value);
  }

  function Enviar(){
    console.log(Usuario)
    console.log(Senha)
  }

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
      <div className={classes.BodyInfos}>
        <h1> Registrar Cliente </h1>
        <div className={classes.Registrar}>
              <InputLbl Text="Usuário" Act={HandleUsuario}/>
              <InputLbl Text="Senha" Type="password" Act={HandleSenha}/>
              <InputLbl Text="Confirmar Senha" Type="password" Act={HandleConfirmaSenha}/>
        </div>
        <button id="Enviar" onClick={Enviar()}> Enviar </button>
              <h1> Anexar Cotação </h1>
                <div className={classes.anexar}>
                  <select>
                    <option>Lucas Silva</option>
                    <option>Matheus Pereira</option>
                    <option>Arthur Gomes</option>
                    <option>Zé Ivaldo</option>
                  </select>

                  <input type="date" name="" id="" />

                  <input type="file" name="Cotação" id="" />
                </div>
              <button id="Enviar" onClick={Enviar()}> Enviar </button>
      </div>
    </div>
    <div className={classes.Footer}>
        <h1> Copyright@PedroLobato2024 </h1>
    </div>
  </div>
  )
}

export default AreadoCorretor