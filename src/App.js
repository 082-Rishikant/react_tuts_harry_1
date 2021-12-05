// import React from 'react'
// import Aboutus from './components/Aboutus.js';
import Navbar from './components/Navbar.js'
import {TextForm} from './components/TextForm.js'
function App() {
  return (
    <>
      {/* <Navbar about="about TextUtils"/> */}
      {/* <Navbar/> */}
      <Navbar title="TextUtils" about="about TextUtils"/>
      <div className="container my-4">
        <TextForm heading="Enter Text to analyze below"/>
        {/* <Aboutus/> */}
      </div>
    </>
  );
}

export default App;
