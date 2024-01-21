import { useState } from 'react'
import '../styles/General.css'
//import Info from './Info'


export default function General({info,edit,onSubmit,onEdit}) {

  function GForm({edit,onSubmit}) {

    return (
      <form  className={`form ${edit ? "display":"none"}`} onSubmit={onSubmit}> 
      
        <label htmlFor="First">First</label>
        <input type="text" id='First'/>
        <label htmlFor="Last">Last</label>
        <input type="text" id='Last' />
        <label htmlFor="email">E-mail</label>
        <input type="text" id='email'/>
        <label htmlFor="age">Age</label>
        <input type='text' id='age'/>
        <br />
        <button type="re" >Submit</button>
      </form>
    )
  }

  function data(first,last,email,age){

    return(
      
      <div>
          <div><strong>{first+" "+last}</strong></div>
          <div className='subhead'>
            <div className='email'>{email}</div>
            <div>{age}</div>
          </div>
      </div>
    )
  }
  //console.log(edit ? "display":"none")
  const show = "display";
  return (
    <div className='gform '>
      <header>enter info<button className='arrow'>arrow</button></header>
      <div className='general '>
        <GForm onSubmit={onSubmit} edit={!edit} ></GForm>
        <div className={edit ? "display":"none"}>
          {data(info.first,info.last,info.email,info.age)}
          <button onClick={onEdit} >edit</button>
        </div>
      </div>
    </div>
  )
}
