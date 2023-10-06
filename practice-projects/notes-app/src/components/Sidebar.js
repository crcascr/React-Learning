import React from "react";

function Sidebar(props) {
  /* Anterior forma de hacerlo sin ordenar las notas por modificacion
  const noteElements = props.notes.map((note, index) => (
    <div key={note.id}>
      <div
        className={`title ${
          note.id === props.currentNote.id ? "selected-note" : ""
        }`}
        onClick={() => props.setCurrentNoteId(note.id)}
      >
        <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
      </div>
    </div>
  ));
  */

  const noteElements = [...props.notes]
    .sort((a, b) => new Date(b.edicion) - new Date(a.edicion))
    .map((note) => (
      <div key={note.id}>
        <div
          className={`title ${
            note.id === props.currentNote.id ? "selected-note" : ""
          }`}
          onClick={() => props.setCurrentNoteId(note.id)}
          
        >
          <h4 className="text-snippet">{note.body.split("\n")[0]}</h4>
          <button
            className="delete-btn"
            // Your onClick event handler here
            /* Borrar nota sin Firebase
            onClick={((event)=>props.deleteNote(event,note.id))}
            */
           // Borrar nota con Firebase
            onClick={(()=>props.deleteNote(note.id))}
            
          >
            <i className="gg-trash trash-icon"></i>
          </button>
        </div>
      </div>
    ));

  return (
    <section className="pane sidebar">
      <div className="sidebar--header">
        <h3>Notas</h3>
        <button className="new-note" onClick={props.newNote}>
          +
        </button>
      </div>
      {noteElements}
    </section>
  );
}

export default Sidebar;
