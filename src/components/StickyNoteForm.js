const StickyNoteForm = ({ handleChange, formData, handleSubmit }) => {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");

//   const [formData, setFormData] = useState({...initialFormState})

//   function handleChangeTitle(e) {
//     setTitle(e.target.value);
//   }

//   function handleChangeContent(e) {
//     setContent(e.target.value);
//   }

    // function handleChangeTitle(e) {
    //     setFormData({...formData, title: e.target.value})
    // }
    // function handleChangeContent(e) {
    //     setFormData({...formData, content: e.target.value})
    // }

    // function handleChange(e) {
    //     const name = e.target.name;
    //     const value = e.target.value;
      
    //     setFormData({
    //       ...formData,
    //       [name]: value,
    //     })
    // }


//   function handleSubmit(e) {
//     e.preventDefault();
//     if (formData.content && formData.title) {
//       const newStickyNote = { ...formData, id: uuidv4() };
//       handleSubmitStickyNotes(newStickyNote);
//       setFormData({...initialFormState});
//     }
//   }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Create a new sticky note here!</h2>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
        />
        <label>Content: </label>
        <textarea
          name="content"
          type="text"
          value={formData.content}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default StickyNoteForm;
