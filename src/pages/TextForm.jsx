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
    // Check if text is empty
    if (!text.trim()) {
      alert("Please enter some text to speak.");
      return;
    }
  
    // Stop any ongoing speech
    if (window.speechSynthesis.speaking) {
      console.log("Speech synthesis is already in progress. Canceling the current speech...");
      window.speechSynthesis.cancel();
    }
  
    try {
      const msg = new SpeechSynthesisUtterance(text);
  
      // Handle speech completion and potential errors
      msg.onend = () => {
        console.log("Speech has finished successfully.");
        props.showAlert("Your text has been successfully spoken!", "success");
      };
  
      msg.onerror = (e) => {
        console.error("An error occurred during speech synthesis:", e);
        props.showAlert("An error occurred while trying to speak the text.", "danger");
      };
  
      // Adjust rate and pitch (customizable)
      msg.rate = 1; // Normal speed
      msg.pitch = 1; // Normal pitch
  
      // Speak the text
      window.speechSynthesis.speak(msg);
    } catch (error) {
      console.error("Speech synthesis is not supported or failed:", error);
      alert("Speech synthesis is not supported in your browser.");
    }
  };
  

  const HandleCopy =()=>{
    var text=document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
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
      <div className={`container my-4 ${props.mode === 'light' ? 'text-dark' : 'text-white'}`}>
        <div className="form-group">
          <h3 className="mb-3">{props.heading}</h3>
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