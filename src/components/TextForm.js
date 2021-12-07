import { useState } from "react"
export function TextForm(props) {
  const [text, setText] = useState('')
  // text='new Text'; // wrong way to update state
  // setText('new Text') // right way to update state
  function upperClick() {
    let newText = text.toUpperCase()
    setText(newText)
    props.showAlert(" converted to uppercase", "success ");
  }
  const lowerClick = () => {
    let newText = text.toLowerCase()
    setText(newText)
    props.showAlert(" converted to lowercase", "success ");
  }
  const handleonChange = (event) => {
    setText(event.target.value)
  }
  const clearAll=()=>{
    setText('')
    props.showAlert(" all cleared", "success ");
  }

  const copyText=()=>{
    let textField=document.getElementById('myBox')
    textField.select()
    navigator.clipboard.writeText(textField.value);
    props.showAlert(" Text copied", "success ");
  }

  const removeSpace=()=>{
    let textArr=text.split(/[ ]+/);
    setText(textArr.join(' '));
    props.showAlert(" space removed", "success ");
  }

  return (
    <>
      <div className="container my-3 " style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'#557c9f':'white'}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="9" placeholder="Enter Text here" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'#557c9f':'white'}}></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={upperClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={lowerClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1 my-1" onClick={clearAll}>clear all</button>
        <button className="btn btn-primary mx-1 my-1" onClick={copyText}>copy text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={removeSpace}>Remove extra space</button>
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black',backgroundColor:props.mode==='dark'?'#557c9f':'white'}}>
        <h3>Text Details</h3>
        <p>{text.split(' ').length} words  {text.length} characters</p>
        <p>{0.008*text.split(' ').length} minutes read time</p>
        <h3>Text Preview</h3>
        <p>{text.length>0?text:'Enter Text above to preview that here'}</p>
      </div>
    </>
  )
}