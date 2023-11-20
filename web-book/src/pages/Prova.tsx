// EditorComponent.tsx

import React, { useEffect, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import book from '../data/book1.json'

function EditorComponent() {
    const [editorData, setEditorData] = useState('');

    useEffect(() => {
        // Esegui ulteriori inizializzazioni, se necessario
        let testo = ''

        for (let i = 0; i < book.capitoli.length; i++) {
            testo = testo + '<h1>' + book.capitoli[i].title + '</h1>';
            for (let j = i; j < book.capitoli[i].sections.length; j++) {
                testo = testo + '<h2>' + book.capitoli[i].sections[j].subtitle + '</h2>';
                testo = testo + book.capitoli[i].sections[j].content
            }
        }

        setEditorData(testo)
    }, []);



    return (
        <div>
            <h2>Editor CKEditor 5</h2>
            <CKEditor
                editor={ClassicEditor}
                data={editorData}
                onReady={(editor) => {
                    // Gestisci l'editor pronto, se necessario
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setEditorData(data);
                }}
            />
        </div>
    );
}

export default EditorComponent;
