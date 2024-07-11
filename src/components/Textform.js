import React, {useState} from 'react'
export default function Textform(props) {
    const [text, setText] =  useState('Enter text Here');
    const handleupclick= ()=>{
       // console.log("Upper Clicked Was Click")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!", "Success");
    }
    const handledownclick= ()=>{
        // console.log("Upper Clicked Was Click")
         let newText = text.toLowerCase();
         setText(newText)
         props.showAlert("Converted to Lowercase!", "Success");
     }
     const copytext = () => {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Text copied to clipboard');
                props.showAlert("Text Copied!", "Success");
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
                props.showAlert("Failed to Copied Text!", "Success");
            });
    }
     const handleclearText= ()=>{
        // console.log("Upper Clicked Was Click")
         let newText = "";
         setText(newText)
         props.showAlert("Clear Text!", "Success");
     }
    const handleonchange= (event )=>{
      //  console.log("Onchange")
        setText(event.target.value)
    }
  return (
    <>
<div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>{props.heading}</h1>
<div className="mb-3">


  <textarea className="form-control" value ={text} onChange={handleonchange}  style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'#042743'}} id="mybox" rows="8"></textarea>
  <button className="btn btn-primary my-3 mx-2" onClick = {handleupclick }>Convert to Uppercase</button>
  
  
  <button className="btn btn-primary my-3 mx-2" onClick = {handledownclick }>Convert to Lowercase</button>
  <button className="btn btn-primary my-3 mx-2" onClick = {handleclearText}>Clear Text</button>
  <button className="btn btn-primary my-3 mx-2" onClick = {copytext}>Copy Text</button>
</div>
</div>

<div className="container my-2" style={{color: props.mode==='dark'?'white':'#042743'}}>
    <h1>Your Text Summary </h1>
    <p>{text.split(" ").length} Words, {text.length} characters
    </p>
    <p>{0.008 * text.split(" ").length} Minutes Read
    </p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter Something to Preview it here"}</p>
</div>


</>
  )
}
