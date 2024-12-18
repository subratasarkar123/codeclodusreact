import React, { useState } from 'react';

export default function TextForm(props) {
//   let revert = "";

     
    const handelUpClick = ()=>{
     console.log("uppercase was clicked" + text);
     let newText = text.toUpperCase();
    //  revert=text
     setText(newText)
    }
    const handelDownClick = ()=>{
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
       }

       const handelClearClick = ()=>{
        console.log("Clear was clicked" + text);
        let newText = "";
        setText(newText)
       }

    //    const handelExtraSpace = ()=>{
      
    //     let newText = text.split(/[]+/);
    //     setText(newText.join(" "));
    //     props.showAlert("Extra space removed!", "success");
    //    }

    const handelOnChange = (event)=>{
        console.log("on Change");
        setText(event.target.value);
       }
    const [text, setText] = useState("Enter Text here");

  return (

    <>
    <div className="container">
      <div className="mb-1">
        <h3 className="mb-3">{props.headings}</h3>
        <textarea className="form-control" value={text} onChange={handelOnChange} id="myBox" rows="8" placeholder=''></textarea>
      </div>
      <button className="btn btn-primary my-2 " onClick={handelUpClick}> Convert to uppercase</button>
      <button className="btn btn-primary my-2 mx-2" onClick={handelDownClick}> Convert to Lowercase</button>
      <button className="btn btn-primary my-2" onClick={handelClearClick}> Clear Text</button>
      {/* <button className="btn btn-primary my-2 mx-2" onClick={handelExtraSpace}> Removed Extra Space</button> */}

    </div>
    <div className="container my-3">
        <h4>Your Text summary</h4>
        <p>{text.split(/\s+/).filter ((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{ return element.length!==0}).length}  Minutes read time</p>
        <h5>Preview</h5>
        <p>{text.length>0?text:"Nothing to Preview!"}</p>
    </div>
    </>
  );
}
