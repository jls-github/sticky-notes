import StickyNote from "./StickyNote";
import React from "react";

const StickyNoteContainer = ({ stickyNotes, handleDeleteNote }) => {
  return (
    <div>
      <h2>Sticky Notes:</h2>
      {stickyNotes.length !== 0
        ? stickyNotes.map((stickyNote) => {
            return (
              <StickyNote
                {...stickyNote}
                key={stickyNote.id}
                handleDeleteNote={handleDeleteNote}
              />
            );
          })
        : "No Sticky Notes"}
    </div>
  );
};

export default StickyNoteContainer;
