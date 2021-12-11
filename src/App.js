// import React from 'react'
import Aboutus from './components/Aboutus.js';
import Navbar from './components/Navbar.js'
import { TextForm } from './components/TextForm.js'
import React, { useState } from 'react'
import Alert from './components/Alert.js';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  // Dark , Light Mode Controller
  const toogleMode = () => {
    if (mode === "dark") {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode enabled", "success ");
      document.title = "TextUtils - Light Mode";
      // setInterval(()=>{
      //   document.title="Install TextUtils Now";
      // }, '1000');
      // setInterval(()=>{
      //   document.title="TextUtils is Amazing";
      // }, '1500');
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#2e343a';
      showAlert(" dark mode enabled", "success ");
      document.title = "TextUtils - Dark Mode";
    }
  }

  const showAlert = (exp, msg) => {
    setAlert({
      message: msg,
      explanation: exp
    })
    setTimeout(() => {
      setAlert(null);
    }, '1500');
  }

  return (
    <Router>
      <Navbar title="TextUtils" about="about TextUtils" mode={mode} toogleMode={toogleMode} />
      <Alert alert={alert} />
      <div className="container my-4">
        <Routes>
          <Route path='/' element={<TextForm heading="Enter Text to analyze below" mode={mode} showAlert={showAlert} />} />
          <Route path="/Aboutus" element={<Aboutus mode={mode}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;