import React from 'react'

const InputLbl = ({ Text, Type, Act}) => {

  return (
    <div className="inputlabel">
        <label> {Text}: </label>
        <input 
        type={Type}
        required 
        onChange={Act}
        />
    </div>
  )
}

export default InputLbl