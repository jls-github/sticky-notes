import StickyNote from "./StickyNote";
import React from "react";

const StickyNoteContainer = ({ stickyNotes, handleDeleteNote }) => {
  //   const numbers = [1, 2, 3, 4];
  // //   const myBoolean = false;
  //     function areNumbersEmpty() {
  //         if (numbers.length === 0) {
  //             return true
  //         } else {
  //             return false
  //         }
  //     }
  return (
    <div>
      <h2>Sticky Notes:</h2>
      {stickyNotes.length !== 0
        ? stickyNotes.map((stickyNote, idx) => {
            return (
              <StickyNote
                // title={stickyNote.title}
                // content={stickyNote.content}
                // id={stickyNote.id}
                {...stickyNote}
                key={stickyNote.id}
                handleDeleteNote={handleDeleteNote}
              />
            );
          })
        : "No Sticky Notes"}

      {/* {myBoolean ? numbers.map((number) => <p>{number}</p>) : "No numbers"} */}
      {/* {numbers.length === 0 ? "No Numbers" : numbers.map((number) => <p>{number}</p>)} */}
      {/* {numbers.length !== 0 ? numbers.map((number) => <p>{number}</p>) : "No numbers"} */}
      {/* <button onClick={() => handleDeleteNote(stickyNotes[1].id)}>Delete Second Note (from StickyNoteContainer.js)</button> */}
    </div>
  );
};

export default StickyNoteContainer;
