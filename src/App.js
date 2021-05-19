import "./App.css";
import StickyNoteContainer from "./components/StickyNoteContainer";
import StickyNoteForm from "./components/StickyNoteForm";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

// const initialStickyNoteState = [
//   { title: "First note", content: "Woooo!", id: uuidv4() },
//   { title: "Second note", content: "Yay!", id: uuidv4() },
// ];

const apiStickyNoteState = [
  // {title: "Do the dishes", content: "Don't forget to do the dishes!", id: uuidv4()},
  // {title: "Mow the lawn", content: "Make sure to use the right mower!", id: uuidv4()}
]

const initialStickyNoteFormState = {
  title: "",
  content: "",
};

function App() {
  const [stickyNotes, setStickyNotes] = useState([]);
  const [stickyNoteFormData, setStickyNoteFormData] = useState({
    ...initialStickyNoteFormState,
  });

  useEffect(() => {
    // fetch('stickyNoteAPI')
    // .then(res => json())
    // .then(json => setStickyNotes(json))
    setStickyNotes(apiStickyNoteState)
  }, [])

  function handleStickyNoteFormChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    setStickyNoteFormData({
      ...stickyNoteFormData,
      [name]: value,
    });
  }
  function handleStickyNoteFormSubmit(e) {
    e.preventDefault();
    if (stickyNoteFormData.content && stickyNoteFormData.title) {
      const newStickyNote = { ...stickyNoteFormData, id: uuidv4() };
      handleSubmitStickyNotes(newStickyNote);
      setStickyNoteFormData({ ...initialStickyNoteFormState });
    }
  }

  function handleSubmitStickyNotes(stickyNote) {
    setStickyNotes([...stickyNotes, stickyNote]);
  }

  function handleClick() {
    setStickyNotes([
      ...stickyNotes,
      { title: "New note", content: "You clicked the button!", id: uuidv4() },
    ]);
  }

  function handleDeleteNote(id) {
    setStickyNotes(stickyNotes.filter((stickyNote) => stickyNote.id !== id));
  }

  return (
    <div>
      <StickyNoteForm
        handleSubmit={handleStickyNoteFormSubmit}
        handleChange={handleStickyNoteFormChange}
        formData={stickyNoteFormData}
      />
      <StickyNoteContainer
        stickyNotes={stickyNotes}
        handleDeleteNote={handleDeleteNote}
      />
      <button onClick={handleClick}>Add Note</button>
    </div>
  );
}

export default App;
