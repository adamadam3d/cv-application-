import { useState } from 'react'
import './App.css'
import General from './components/general'
export default function App() {
  const[edit,setedit] = useState(false)
  const[inf,setinfo]= useState(
    {first:"Adam",
  last:"Elsayed",
  email:"gmaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
  age:19,
}
  )
  let i=1;
  function onForm(e){

    setinfo({
      first:e.target.childNodes[1].value,
      last:e.target.childNodes[3].value,
      email:e.target.childNodes[5].value,
      age:e.target.childNodes[7].value,
    })

    setedit(!edit);
    e.preventDefault();
  }
  function onEdit(){
    setedit(!edit);
  }
  return (
    <>
    <General info={inf} onSubmit={onForm} edit={edit} onEdit={onEdit}></General>
    <div></div>
    </>
    //<General/>
  )
}
