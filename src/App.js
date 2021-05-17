import './App.css';
import StickyNoteContainer from './components/StickyNoteContainer';
import {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
// import React from 'react'

const initialStickyNoteState = [
  {title: "First note", content: "Woooo!", id: uuidv4()},
  {title: "Second note", content: "Yay!", id: uuidv4()}
]

function App() {
  const [stickyNotes, setStickyNotes] = useState(initialStickyNoteState)

  function handleClick() {
    setStickyNotes([...stickyNotes, {title: "New note", content: "You clicked the button!", id: uuidv4()}])
  }

  function handleDeleteNote(id) {
    setStickyNotes(stickyNotes.filter(stickyNote => stickyNote.id !== id))
  }

  // function deleteSecondNote() {
  //   handleDeleteNote(stickyNotes[1].id)
  // }

  return (
    <div>
      <StickyNoteContainer stickyNotes={stickyNotes} handleDeleteNote={handleDeleteNote} />
      <button onClick={handleClick}>Add Note</button>
      {/* <button onClick={deleteSecondNote}>Delete a note</button> */}
      {/* <button onClick={() => handleDeleteNote(stickyNotes[1].id)}>Delete second note (from App.js)</button> */}
    </div>
  );
}

export default App;
