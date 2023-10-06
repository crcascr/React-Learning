import React from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import Split from "react-split";
import { nanoid } from "nanoid";
import { onSnapshot, addDoc, doc, deleteDoc, setDoc } from "firebase/firestore";
import { notesCollection, baseDatos } from "./Firebase";

function NotesApp() {
  const [notes, setNotes] = React.useState([]);
  const [currentNoteId, setCurrentNoteId] = React.useState("");
  const [tempNoteText, setTempNoteText] = React.useState("");

  const currentNote =
    notes.find((note) => note.id === currentNoteId) || notes[0];

  /* Almacenamiento en LocalStorage
    React.useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);
*/

  /* Almacenamiento en Firebase*/

  React.useEffect(() => {
    const unsubscribe = onSnapshot(notesCollection, function (snapshot) {
      const notesArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setNotes(notesArray);
    });
    return unsubscribe;
  }, []);

  React.useEffect(() => {
    if (!currentNoteId) {
      setCurrentNoteId(notes[0]?.id);
    }
  }, [notes]);

  React.useEffect(() => {
    if (currentNote) {
      setTempNoteText(currentNote.body);
    }
  }, [currentNote]);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (tempNoteText !== currentNote.body) {
        updateNote(tempNoteText);
      }
    }, 1000);
    return () => clearTimeout(timeoutId);
  }, [tempNoteText]);

  /*Funcion crear nueva nota sin Firebase

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Escriba aquí el título de su nota markdown",
      edicion: Date(),
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
    setCurrentNoteId(newNote.id);
  }

  */

  //Funcion crear nueva nota con Firebase

  async function createNewNote() {
    const newNote = {
      body: "# Escriba aquí el título de su nota markdown",
      creacion: Date(),
      edicion: Date(),
    };
    const newNoreRef = await addDoc(notesCollection, newNote);
    setCurrentNoteId(newNoreRef.id);
  }

  /* Actualizar notas sin Firebase

  function updateNote(text) {
    setNotes((oldNotes) =>
      oldNotes.map((oldNote) => {
        return oldNote.id === currentNoteId
          ? { ...oldNote, body: text, edicion: Date() }
          : oldNote;
      })
    );
  }
  */

  // Actualizar notas con Firebase

  async function updateNote(text) {
    const docRef = doc(baseDatos, "notes", currentNoteId);
    await setDoc(docRef, { body: text, edicion: Date() }, { merge: true });
  }

  /* Forma de ordenar las notas por modificación del profesor
    function updateNote(text) {
        setNotes(oldNotes => {
            const newArray = []
            for(let i = 0; i < oldNotes.length; i++) {
                const oldNote = oldNotes[i]
                if(oldNote.id === currentNoteId) {
                    newArray.unshift({ ...oldNote, body: text })
                } else {
                    newArray.push(oldNote)
                }
            }
            return newArray
        })
    }
  */

  /* Borrar nota sin Firebase
  function deleteNote(event, noteId) {
    event.stopPropagation();

    setNotes((oldNotes) => oldNotes.filter((note) => note.id !== noteId));
  }
  */

  //Borrar nota con Firebase
  async function deleteNote(noteId) {
    const docRef = doc(baseDatos, "notes", noteId);
    await deleteDoc(docRef);
  }

  return (
    <main>
      {notes.length > 0 ? (
        <Split sizes={[30, 70]} direction="horizontal" className="split">
          <Sidebar
            notes={notes}
            currentNote={currentNote}
            setCurrentNoteId={setCurrentNoteId}
            newNote={createNewNote}
            deleteNote={deleteNote}
          />
          <Editor
            tempNoteText={tempNoteText}
            setTempNoteText={setTempNoteText}
          />
        </Split>
      ) : (
        <div className="no-notes">
          <h1>No tienes notas</h1>
          <button className="first-note" onClick={createNewNote}>
            Crea una ahora
          </button>
        </div>
      )}
    </main>
  );
}

export default NotesApp;
