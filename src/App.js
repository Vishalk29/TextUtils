import React, { useState } from 'react';
import './App.css';
// import About from './Component/About';
import NavBar from './Component/NavBar';
import TextForm from './Component/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = '#042743'
    } else {
      setMode('light')
      document.body.style.background = 'white'
    }
  }
  return (
    <>
      <NavBar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text to analyze the below" mode={mode} />
        {/*<About />*/}
      </div>

    </>
  );
}

export default App;
