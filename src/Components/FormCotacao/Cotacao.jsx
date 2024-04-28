import React from 'react'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import classes from './Cotacao.module.css'

const Cotacao = () => {

  const [Name, SetName] = useState("")
  const [CPF, SetCPF] = useState("")
  const [Telefone, SetTelefone] = useState("")
  const [Cep, SetCep] = useState("")
  const [Placa, SetPlaca] = useState("")
  const [Seguro, SetSeguro] = useState("")


  const HandleName = (e) => {

    SetName(e.target.value);
  }

  const HandleCPF = (e) => {

    SetCPF(e.target.value);
  }

  const HandleTelefone = (e) => {

    SetTelefone(e.target.value);
  }

  const HandleCep = (e) => {

    SetCep(e.target.value);
  }

  const HandlePlaca = (e) => {

    SetPlaca(e.target.value);
  }

  const HandleSeguro = (e) => {

    SetSeguro(e.target.value);
  }

  function enviar(){
    console.log(Name);
    console.log(Telefone);
    console.log(CPF);
    console.log(Cep);
    console.log(Placa);
    console.log(Seguro);
  }

  return (
    <div className={classes.Container}>
    <div className={classes.Header}>
      <h1> Trust </h1>

      <Link id="Cliente" to="/area"> Área do Cliente </Link>
    </div>
    <div className={classes.Body}>
      <h1>Cotação 100% Grátis?</h1>
      <h2> Vem com a gente! </h2>
      <div className={classes.Form}>
        <div className={classes.inputlabel}>
          <label> Nome: </label>
          <input 
            type="text"
            required 
            onChange={HandleName}/>
        </div>
        <div className={classes.inputlabel}>
          <label> Telefone: </label>
          <input 
            type="text"
            required 
            onChange={HandleTelefone}/>
        </div>
        <div className={classes.inputlabel}>
          <label> CPF: </label>
          <input 
            type="text"
            required 
            onChange={HandleCPF}/>
        </div>
        <div className={classes.inputlabel}>
          <label> CEP: </label>
          <input 
            type="text"
            required 
            onChange={HandleCep}/>
        </div>
        <div className={classes.inputlabel}>
          <label> Placa: </label>
          <input 
            type="text"
            required 
            onChange={HandlePlaca}/>
        </div>
        <div className={classes.inputlabel}>
          <label> Tipo de Seguro: </label>
          <input 
            type="text"
            required 
            onChange={HandleSeguro}/>
        </div>
      </div>
      <button id="Enviar" onClick={enviar}> Enviar </button>
    </div>
    <div className={classes.Footer}>
        <h1> Copyright@PedroLobato2024 </h1>
    </div>
  </div>
  )
}

export default Cotacao