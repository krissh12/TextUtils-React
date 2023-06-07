import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to Uppercase", "success");
    }
    const handleLowClick = ()=>{
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Converted to Lowercase", "success");    
    }
    const handleVowelClick = () => {
      let newText = text.replace(/[^aeiou]/g, "");
      setText(newText);
      props.showAlert("Vowels are underlined", "success");
    }
    const handleClearText = () => {
      let newText = text.replace(text, "");
      setText(newText);
      props.showAlert("Text cleared", "success");
    }
    const handleCopy = () => {
      navigator.clipboard.writeText(text);
      props.showAlert("Copied to Clipboard", "success");
    }
    const handleOnChange = (event)=>{
      setText(event.target.value)
    }
    const [text, setText] = useState("");
  return (
    <>
        <div className="container" style={{color : props.mode === 'dark'?'white':'rgb(26 43 66)' }}>
          <h1 className="my-3">{props.heading}</h1>
            <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'?'#13466e':'white', color : props.mode === 'dark'?'white':'rgb(26 43 66)'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to uppercase </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to lowercase </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleVowelClick}>Find Vowels </button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy text</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearText}>Clear text</button>

        </div>
        <div className="container my-3" style={{color : props.mode === 'dark'?'white':'rgb(26 43 66)' }}>
            <h1>Your text summery</h1>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>Text requires {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes to read. </p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to Preview."}</p>
        </div>
    </>
  );
}
