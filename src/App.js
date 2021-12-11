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

  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-danger');
  }

  // Dark , Light Mode Controller
  const toogleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
    if (mode === "dark") {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode enabled", "success ");
    }
    else {
      setMode('dark');
      document.body.style.backgroundColor = '#557c9f';
      showAlert(" dark mode enabled", "success ");
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
      <Navbar title="TextUtils" about="about" mode={mode} toogleMode={toogleMode} />
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
