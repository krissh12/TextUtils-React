import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() =>
      setAlert(null), 1500)
  }
  const toggleMode = ()=>{
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(26 43 66)";
      showAlert("Dark mode is enabled.", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled.", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <>
    <BrowserRouter>
      <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route path="about/" element={<About mode={mode}/>}/>
            <Route path="/" element={<Textform showAlert={showAlert} heading="Try TextUtils - Word Counter, Character Counter, Remove extra spaces" mode={mode}/>}/>
          </Routes>    
        </div>
    </BrowserRouter>
    {/* <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
        <div className="container my-3">
        <Textform showAlert={showAlert} heading="Enter your text Text to analyze" mode={mode}/>
        </div> */}
    </>
  );
}

export default App;

