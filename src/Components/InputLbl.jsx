import React from 'react'

const InputLbl = ({ Text , Act }) => {
  return (
    <div className="inputlabel">
        <label> {Text}: </label>
        <input 
        type="text"
        required 
        onChange={Act}/>
    </div>
  )
}

export default InputLbl