import React from 'react'
import { useState } from 'react'
export default function TextForm(props) {
    const handleUpChange = () => {
        // console.log("you clicked the onchange")
        const newtext = text.toUpperCase();
        setText(newtext)
        props.showAlert("Converted to UpperCase", "success")
    }

    const handlelOChange = () => {
        const newtext = text.toLowerCase();
        setText(newtext)
        props.showAlert("Converted to Lowercase", "success")
    }

    const handlelOClear = () => {
        const newText = "";
        setText(newText)
        props.showAlert("Clear the Text", "success")
    }
    // copy text code 
    const handleCopy = () => {
        let textcopy = document.getElementById("myBox")
        textcopy.select();
        navigator.clipboard.writeText(textcopy.value) // this is code use for copy the text
        props.showAlert("Text is copied to clipboard", "success")
    }
    const handleChnage = (event) => {
        // console.log("You chnaged")
        setText(event.target.value)
    }
    const [text, setText] = useState("")
    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleChnage} style={{ backgroundColor: props.mode === 'dark' ? 'gray' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} id="myBox" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2" onClick={handleUpChange}>Convert to UpperCase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handlelOChange}>Convert to LowerCase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handlelOClear}>Clear Text</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>



            </div>

            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }} >

                <h2>Text summery Is : </h2>
                <p>{text.split(" ").length} word and {text.length} character</p>
                <p>{0.008 * text.split(" ").length} Minute Read</p>
                <h3> Preview :</h3>
                <p>{text.length > 0 ? text : "Enter the text to enter in priview "}</p>
            </div>

        </>
    )
}
