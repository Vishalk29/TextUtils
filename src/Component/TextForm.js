import React from 'react'
import { useState } from 'react'
export default function TextForm(props) {
    const handleUpChange = () => {
        // console.log("you clicked the onchange")
        const newtext = text.toUpperCase();
        setText(newtext)
    }

    const handlelOChange = () => {
        const newtext = text.toLowerCase();
        setText(newtext)
    }

    const handlelOClear = () => {
        const newText = "";
        setText(newText)
    }

    const handleCopy = () => {
        let textcopy = document.getElementById("myBox")
        textcopy.select();
        navigator.clipboard.writeText(textcopy.value) // this is code use for copy the text
    }
    const handleChnage = (event) => {
        // console.log("You chnaged")
        setText(event.target.value)
    }
    const [text, setText] = useState("")
    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleChnage} id="myBox" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2" onClick={handleUpChange}>Convert to UpperCase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handlelOChange}>Convert to LowerCase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handlelOClear}>Clear Text</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>



            </div>
            <div className="container my-3">
                <h2>Text summery Is : </h2>
                <p>{text.split(" ").length} word and {text.length} character</p>
                <p>{0.008 * text.split(" ").length} Minute Read</p>
                <h3> Preview :</h3>
                <p>{text}</p>
            </div>
        </>
    )
}
