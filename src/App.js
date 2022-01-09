import React, { useState } from 'react';
import './App.css';
import Alert from './Component/Alert';
import About from './Component/About';
import NavBar from './Component/NavBar';
import TextForm from './Component/TextForm';
// importing the react router dom
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  // whether the dark mode enable or not
  const [mode, setMode] = useState('light');
  // whether the gray mode enable or not 

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
      <Router>
        <NavBar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Try TextUtils - word counter, character counter, remove extra spaces" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
