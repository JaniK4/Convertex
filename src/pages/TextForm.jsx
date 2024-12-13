import {useState} from "react";
import PropTypes from 'prop-types';
const TextForm = (props) => {

  const HandleUpClick =()=>{
    // console.log('Uppercase click ' +text);
    let newText=text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase!!','success');
  }

  const HandleLowClick =()=>{
    let newText=text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase!!','success');
  }

  const HandleClearClick =()=>{
    let newText='';
    setText(newText);
    props.showAlert('Text Cleared!!','success');
  }

  const speak = () => {
    if (!text.trim()) {
      alert("Please Enter Some Text To Speak.");
      return;
    }

    // Stop any ongoing speech
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
    }

    const msg = new SpeechSynthesisUtterance(text);
    msg.rate = 1; // Adjust rate (speed) if needed, 1 is normal speed
    msg.pitch = 1; // Adjust pitch if needed, 1 is normal pitch
    window.speechSynthesis.speak(msg);
    props.showAlert('Your Text Has Been Successfully Spoken!','success');
  };

  const HandleCopy =()=>{
    var text=document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert('Text Copied!!','success');
  }

  const HandleExtraSpaces = () => {
    let newText = text.trim().split(/\s+/); 
    setText(newText.join(" "));
    props.showAlert('Extra Space Removed!!','success');
  };
  
  const HandleOnChange =(event)=>{
    // console.log('Changing to Uppercase')
    setText(event.target.value)
  }


  
  const [text,setText] =useState('');

  return (
    <>
      <div className={`container my-2 ${props.mode === 'light' ? 'text-dark' : 'text-white'}`}>
        <div className="form-group">
          <h3 className="mt-5 mb-3">{props.heading}</h3>
          <textarea className="form-control mb-4" 
            style={{backgroundColor:props.mode==='light'?'white':'#31343A', 
              color:props.mode==='light'?'black':'white',
              border:'1px solidrgb(111, 111, 114)'}}
            value={text}  onChange={HandleOnChange} id="myBox" rows="8">
          </textarea>
          
          <button className="btn btn-primary text-white me-3" onClick={HandleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-success text-white me-3" onClick={HandleLowClick}>Convert to Lowercase</button>
          <button className="btn btn-danger text-white me-3" onClick={HandleClearClick}>Clear Text</button>
          <button className="btn btn-warning text-white me-2" onClick={speak} >Speak</button>
          <button className="btn btn-info text-white me-2" onClick={HandleCopy} >Copy Text</button>
          <button className="btn btn-primary text-white me-2" onClick={HandleExtraSpaces} >Handle Extra Spaces</button>
        </div>
      </div>
      <div className={`container my-4 ${props.mode === 'light' ? 'text-dark' : 'text-white'}`}>
        <h4>Word Count and Length</h4>
        <p>{text.trim() ? text.trim().split(/\s+/).length : 0} words and {text.length} characters</p>
        <p>{(0.008 * (text.trim().split(/\s+/).length || 0)).toFixed(2)} minutes taken to read.</p>
        <h4>Preview</h4>
        <p>{text.length>0?text:'Enter something in the textbox to preview something here.'}</p>
      </div>
    </>
  )
}

TextForm.defaultProps = {
  heading: 'Enter Text Here'
};

TextForm.propTypes = {
  heading: PropTypes.string.isRequired ,
  mode: PropTypes.string.isRequired,
  showAlert: PropTypes.string.isRequired,
};
export default TextForm