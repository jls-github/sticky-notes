import React from 'react'

const StickyNote = ({title, content, id, handleDeleteNote}) => {

    function handleDelete() {
        handleDeleteNote(id)
    }

    return <div style={{border: "1px solid black"}}>
        <h3>{title}</h3>
        <p>{content}</p>
        <button onClick={handleDelete}>Delete</button>
    </div>
}

export default StickyNote