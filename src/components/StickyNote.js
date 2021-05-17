import React from 'react'

const StickyNote = ({title, content, id, handleDeleteNote}) => {

    function handleDelete() {
        handleDeleteNote(id)
    }
    
    return <div style={{border: "1px solid black"}}>
        <h3>{title}</h3>
        <p>{content}</p>
        {/* <p>{id}</p> */}
        {/* <button onClick={() => handleDeleteNote(id)}>Delete (from StickyNote.js)</button> */}
        <button onClick={handleDelete}>Delete</button>
    </div>
}
// const StickyNote = (props) => {
//     // const title = props.title
//     // const content = props.content

//     const {title, content} = props

//     return <div>
//         <h3>{title}</h3>
//         <p>{content}</p>
//     </div>
// }

export default StickyNote