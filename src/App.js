// import React from 'react'
// import Aboutus from './components/Aboutus.js';
import Navbar from './components/Navbar.js'
import {TextForm} from './components/TextForm.js'
import React, { useState } from 'react'
function App() {
  const [mode, setMode] = useState('light');

  const toogleMode=()=>{
    if(mode==="dark"){
      setMode('light')
      document.body.style.backgroundColor='white';
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor='#557c9f';
    }
  }
  return (
    <>
      {/* <Navbar about="about TextUtils"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" about="about TextUtils" mode={mode} toogleMode={toogleMode}/>
      <div className="container my-4">
        <TextForm heading="Enter Text to analyze below" mode={mode}/>
        {/* <Aboutus/> */}
      </div>
    </>
  );
}

export default App;
