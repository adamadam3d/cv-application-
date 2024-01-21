import { useState } from 'react'
import '../styles/form.css'


export default function GForm({edit,onSubmit}) {

  return (
    <form  className={`form ${edit ? "display":"none"}`} onSubmit={onSubmit}> 
      <label htmlFor="First">First</label>
      <input type="text" id='First' />
      <label htmlFor="Last">Last</label>
      <input type="text" id='Last' />
      <label htmlFor="email">E-mail</label>
      <input type="text" id='email'/>
      <button type="re" >Submit</button>
    </form>
  )
}
