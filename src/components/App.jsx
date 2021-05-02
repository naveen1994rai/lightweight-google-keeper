import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [noteItem, setNoteItem] = useState({
    title: "",
    content: ""
  });

  const [notesList, setNotesList] = useState([]);

  function updateNoteItem(event) {
    const { name, value } = event.target;
    setNoteItem((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  }

  function addNotesList() {
    setNotesList((prev) => {
      prev.push(noteItem);
      return prev;
    });
    setNoteItem({ title: "", content: "" });
  }

  function deleteNotesList(id) {
    setNotesList((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
        note={noteItem}
        onChange={updateNoteItem}
        onClick={addNotesList}
      />
      {notesList.map((item, id) => (
        <Note
          id={id}
          title={item.title}
          content={item.content}
          onClick={deleteNotesList}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
