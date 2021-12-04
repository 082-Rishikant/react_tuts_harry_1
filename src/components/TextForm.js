import { useState } from "react"
export function TextForm(props)
{
  const[text, setText]=useState('')
  // text='new Text'; // wrong way to update state
  // setText('new Text') // right way to update state
  function upperClick()
  {
    let newText=text.toUpperCase()
    setText(newText)
  }
  const handleonChange=(event)=>{
    setText(event.target.value)
  }
  return(
    <>
    <h2>{props.heading}</h2>
    <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="9" placeholder="Enter Text here"></textarea>
    </div>
    <button className="btn btn-primary" onClick={upperClick}>Convert to Uppercase</button>
    </>
  )
}