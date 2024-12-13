import Navbar from './components/Navbar';
import TextForm from './pages/TextForm';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './pages/About';
import Alert from './components/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  
import {useState} from 'react';
function App() {
  const  [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }
  
  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#26282E';
      showAlert('Dark Mode has been enabled','success');
    }else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert('Light Mode has been enabled','success');
    }
  
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Us" />
      <Navbar mode={mode} toggleMode={toggleMode} />
      <Navbar title="TextUtils"/>
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert} heading="Enter Text To Analyze Below" mode={mode} />
      <About /> */}
      <BrowserRouter>
        <Navbar mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
        
        <Routes>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Text To Analyze Below" mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode}/>}   />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
