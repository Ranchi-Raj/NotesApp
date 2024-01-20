import React from "react";

export default function Note({text,id,editHandler,deleteHandler}){
    return(
        <div className="note">
            <div className="note-body">{text}</div>
            <div className="note_footer" style={{justifyContent:"flex-end"}}>
            
                <button className="note-save" onClick={() => editHandler(id,text)}>Edit</button>&nbsp;&nbsp;
                <button className="note-save" onClick={()=> deleteHandler(id)}>Delete</button>
            </div>

        </div>
    )
}