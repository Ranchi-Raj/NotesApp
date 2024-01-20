import React from "react";

export default function CreateNote({inputText,setInputText,saveHandler}){
    return(
        <div className="note">
            <textarea
                cols={5}
                rows={10}
                maxlength={100}
                placeholder="Type..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            >
            </textarea>

            <div className="note_footer">
                <span>Left : {100 - inputText.length}</span>
                <button onClick={saveHandler} className="note-save">Save</button>
            </div>
        </div>
    )
}
