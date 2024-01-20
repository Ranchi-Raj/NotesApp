import React, { useEffect } from "react";
import CreateNote from "./CreateNote";
import {v4 as uuid} from 'uuid';
import Note from "./Note";

export default function Notes(){
   
   const [inputText , setInputText]  = React.useState("")
   const [notes , setNote] = React.useState([])
   const [editToggle,setEditToggle] = React.useState(null)

   function editHandler(id,text){
        setEditToggle(id)
        setInputText(text)
   }

   function deleteHandler(id)
   {
    const newNotes = notes.filter(n => n.id !== id)

    setNote(newNotes)
   }
   const saveHandler = () => {
    if(editToggle) {
        setNote(notes.map((note) => (
            note.id === editToggle ?
            {...note, text: inputText}
            : note
        )))
    } else {
        setNote((prevNotes) => [
            ...prevNotes, {
                id: uuid(),
                text: inputText
            }
        ])
    }
    setInputText("")
    setEditToggle(null)
}


   useEffect(() => {
    const data = JSON.parse(window.localStorage.getItem("Notes"))

    if(data)
    {
        setNote(data)
    }
   },[])

   useEffect(() => {
        window.localStorage.setItem("Notes",JSON.stringify(notes))
   },[notes])

    return(

    <div className="notes">
        {
            notes.map((notes) => (

                editToggle === notes.id ?

                <CreateNote
                inputText = {inputText}
                setInputText = {setInputText}
                saveHandler = {saveHandler}
            />
                :
                <Note
                    key = {notes.id}
                    id = {notes.id}
                    text = {notes.text}
                    editHandler={editHandler}
                    deleteHandler={deleteHandler}
                />
            ))
        }
      {
        editToggle === null?
        
        <CreateNote
            inputText = {inputText}
            setInputText = {setInputText}
            saveHandler = {saveHandler}
        />
        : <></>
        }
    </div>
    )
}