import './App.css';
import React, { useState } from 'react';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const switchTheme = ()=>
  {
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#333539'; //#333539
      displayAlert(["Dark Mode Enabled:"," Come to the Dark side"],"dark")
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      displayAlert(["Dark Mode Disabled:"," Let there be light"],"secondary")
    }
  }

  const displayAlert = (msg,type)=>
  {
    setAlert
    ({
      msg: msg,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 2500);
  }

  return (
    <>
    <Router>
      <Navbar mode={mode} switchTheme={switchTheme} title="BITSell" feature1="Buy" feature2="Sell" about="About us"/>
      <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route exact path='/about' element={<About mode={mode}/>}/>
            <Route exact path='/' element={<TextForm heading="Your Stories" mode={mode} displayAlert={displayAlert}/>}/>
          </Routes>
        </div>
    </Router>
    </>
  );
}

export default App;