// import React from 'react'
// import Aboutus from './components/Aboutus.js';
import Navbar from './components/Navbar.js'
import {TextForm} from './components/TextForm.js'
import React, { useState } from 'react'
import Alert from './components/Alert.js';
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  // Dark , Light Mode Controller
  const toogleMode=()=>{
    if(mode==="dark"){
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert(" Light mode enabled", "success ");
      document.title="TextUtils - Light Mode";
      // setInterval(()=>{
      //   document.title="Install TextUtils Now";
      // }, '1000');
      // setInterval(()=>{
      //   document.title="TextUtils is Amazing";
      // }, '1500');
    }
    else{
      setMode('dark');
      document.body.style.backgroundColor='#557c9f';
      showAlert(" dark mode enabled", "success ");
      document.title="TextUtils - Dark Mode";
    }
  }

  const showAlert=(exp, msg)=>{
    setAlert({
      message:msg,
      explanation:exp
    })
    setTimeout(()=>{
      setAlert(null);
    }, '1500');
  }

  return (
    <>
      {/* <Navbar about="about TextUtils"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" about="about TextUtils" mode={mode} toogleMode={toogleMode}/>
      <Alert alert={alert}/>
      <div className="container my-4">
        <TextForm heading="Enter Text to analyze below" mode={mode} showAlert={showAlert}/>
        {/* <Aboutus/> */}
      </div>
    </>
  );
}

export default App;
