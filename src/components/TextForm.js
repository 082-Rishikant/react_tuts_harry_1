import { useState } from "react"
export function TextForm(props) {
  const [text, setText] = useState('')
  // text='new Text'; // wrong way to update state
  // setText('new Text') // right way to update state
  function upperClick() {
    let newText = text.toUpperCase()
    setText(newText)
  }
  const lowerClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
  }
  const handleonChange = (event) => {
    setText(event.target.value)
  }
  const clearAll=()=>{
    setText('')
  }
  return (
    <>
      <div className="container my-3">
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="9" placeholder="Enter Text here"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={upperClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={lowerClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={clearAll}>clear all</button>
      </div>
      <div className="container my-3">
        <h3>Text Details</h3>
        <p>{text.split(' ').length} words  {text.length} characters</p>
        <p>{0.008*text.split(' ').length} minutes read time</p>
        <h3>Text Preview</h3>
        <p>{text}</p>
      </div>
    </>
  )
}