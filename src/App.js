import React, { useState } from 'react';
import './App.css';
import Alert from './Component/Alert';
// import About from './Component/About';
import NavBar from './Component/NavBar';
import TextForm from './Component/TextForm';

function App() {
  const [mode, setMode] = useState('light'); // whether the dark mode enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }
  setTimeout(() => {
    setAlert(null)
  }, 1500);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.background = '#042743'
      showAlert("Enabled the dark mode ", "success")
    } else {
      setMode('light')
      document.body.style.background = 'white'
      showAlert("Enabled the light mode ", "success")
    }
  }
  return (
    <>
      <NavBar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter the text to analyze the below" mode={mode} />
        {/*<About />*/}
      </div>

    </>
  );
}

export default App;
