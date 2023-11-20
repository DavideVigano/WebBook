import React, { useState } from "react";
import EditorComponent from "../components/EditorComponent";

interface Note {
    position: number; // Posizione nel testo
    content: string; // Contenuto della nota
}

const initialText = "Questo è il testo della mia libreria digitale.";

const initialNotes: Note[] = [
    { position: 10, content: "Nota 1" },
    { position: 24, content: "Nota 2" },
];

const TestPage: React.FC = () => {
    const [text, setText] = useState(initialText);
    const [notes, setNotes] = useState(initialNotes);

    const handleTextClick = (position: number) => {
        const existingNote = notes.find((note) => note.position === position);
        if (existingNote) {
            alert(existingNote.content); // Visualizza la nota esistente
        } else {
            const content = prompt("Inserisci il contenuto della nota:");
            if (content) {
                setNotes([...notes, { position, content }]);
            }
        }
    };


    return (
        <div>
            <div>
                {text.split(" ").map((word, index) => (
                    <span
                        key={index}
                        onClick={() => handleTextClick(index)}
                        style={{ cursor: "pointer" }}
                    >
                        {word}{" "}
                    </span>
                ))}
            </div>
            <div>
                {notes.map((note, index) => (
                    <div key={index}>
                        Posizione: {note.position}, Contenuto: {note.content}
                    </div>
                ))}
            </div>

            <EditorComponent></EditorComponent>
        </div>
    );
};


export default TestPage