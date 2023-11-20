import React, { useEffect, useState } from 'react'
import ContainerText from './ContainerText';
import { Button, Container, Grid, TextField } from '@mui/material';
import AddCommentIcon from '@mui/icons-material/AddComment';
import CommentIcon from '@mui/icons-material/Comment';
import Paper from '@mui/material/Paper';

import "../App.css";
import BoxComment from './BoxComment';
import axios from 'axios';

interface Section {
    subtitle: string;
    content: string;
}

interface Capitoli {
    title: string;
    sections: Section[];
}

interface Book {
    id: string;
    title: string;
    preview: string;
    capitoli: Capitoli[];
}

interface Props {
    book: Book;
}

interface Comment {
    id: number
    comment: string
    position: number
    referencesBook: string;
    referencesUser: string;
}

interface Comment2 {
    "@context": string;
    type: string;
    id: string;
    motivation: string;
    body: {
        type: string;
        value: string;
    };
    target: string;
    creator: string;
    created: string;
    extra: {
        referencesBook: string,
        referencesUser: string
    }
}

function getVerticalPosition(url: string) {

    // Estrai il frammento dell'URL
    const fragment = url.split("#")[1];

    // Dividi il frammento in un array di valori separati dalla virgola
    const values = fragment.split(",");

    // Estrai la posizione verticale (Y) dal primo elemento dell'array
    const verticalPosition = parseFloat(values[1]);

    console.log("Posizione verticale (Y):", verticalPosition);
    return verticalPosition;
}


const BookContinue = ({ book }: Props) => {

    const [editorData, setEditorData] = useState('');
    const [showForm, setShowForm] = useState<boolean>(false);

    const [indexComment, setIndexComment] = useState(0);

    // posizione verticale
    const [verticalPosition, setVerticalPosition] = useState(0)
    const [showComment, setShowComment] = useState<boolean>(false);

    // User di riferimento
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;

    // Libro di riferimento
    const bookString = localStorage.getItem('bookData');
    const referencesBook = bookString ? JSON.parse(bookString) : null;


    const [formData, setFormData] = useState({
        id: 0,
        comment: "",
        position: 0,
        referencesBook: referencesBook._id,
        referencesUser: user.email,
    });

    const [formData2, setFormData2] = useState({
        "@context": "http://www.w3.org/ns/anno.jsonld",
        type: "Annotation",
        id: "",
        motivation: "commenting",
        body: {
            "type": "TextualBody",
            "value": ""
        },
        target: "",
        creator: "",
        created: "",
        extra: {
            referencesBook: referencesBook._id,
            referencesUser: user.email
        }
    });

    const [comments, setComments] = useState<Comment[]>([] as Comment[]);
    const [comments2, setComments2] = useState<Comment2[]>([] as Comment2[]);

    // Crea uno stato separato per tenere traccia dello stato di visualizzazione di ciascun commento
    const [commentVisibility, setCommentVisibility] = useState<boolean[]>([] as boolean[]);

    // Scarico tutti i commenti riferiti a questo libro 
    useEffect(() => {
        const bookString = localStorage.getItem('bookData');
        const referencesBook = bookString ? JSON.parse(bookString) : null;
        console.log(referencesBook._id)
        axios.get('http://localhost:3001/comments', {
            params: {
                referencesBook: referencesBook._id,
            }
        }).then((response) => {
            //setComments(response.data);
            //setCommentVisibility(Array(comments.length).fill(false))
            //setIndexComment(response.data.length + 1)

            console.log(response.data);
        }).catch((error) => {
            console.error('Errore nella richiesta al server:', error);
        });
    }, []);


    const handleComment = () => {
        // salvare info testo 
        const selected = window.getSelection();
        if (selected && selected.toString().length > 0) {
            // Crea un nuovo elemento span che conterrà il testo evidenziato 
            const highlightedSection = document.createElement("span");

            // TODO: Genero un ID univoco con libreria UUID per garantire l'unicità
            const uniqueId = "comment-" + indexComment;

            highlightedSection.id = uniqueId;
            // TODO: Aggiungo classe per la gestione del css
            highlightedSection.className = "comment";
            highlightedSection.textContent = selected.toString();
            highlightedSection.addEventListener("click", handleClickComment)

            // Sostituisci il testo evidenziato con il nuovo elemento span
            const range = selected.getRangeAt(0);
            range.deleteContents();
            range.insertNode(highlightedSection);

            // Salva la posizione in termini di altezza 
            const rect = range.getBoundingClientRect();
            const verticalPositionOnPage = rect.top + window.scrollY;

            setVerticalPosition(verticalPositionOnPage)
            setShowForm(true);
        }

    }

    const handleClickComment = () => {
        alert('cliccato')
    }

    const handleChanngeComment = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
            id: indexComment,
            position: verticalPosition,
        });
    };

    const handleChanngeComment2 = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData2({
            "@context": `http://www.w3.org/ns/anno.jsonld`,
            type: "Annotation",
            id: `https://example.com/annotations/${indexComment}`,
            motivation: "commenting",
            body: {
                type: "TextualBody",
                value: value,
            },
            target: `https://example.com/books/${referencesBook._id}#xywh=0,${verticalPosition},0,0`,
            creator: user.email,
            created: new Date().toISOString(),
            extra: {
                referencesBook: referencesBook._id,
                referencesUser: user.email
            }
        });
    }

    const handleInsertComment2 = () => {
        console.log(formData2)
        setIndexComment(indexComment + 1)
        setComments2([...comments2, formData2]);
        setCommentVisibility([...commentVisibility, false]);
        setShowForm(false)

    }


    const handleInsertComment = () => {
        console.log(formData)
        setIndexComment(indexComment + 1)
        setComments([...comments, formData]);
        setCommentVisibility([...commentVisibility, false]);
        setShowForm(false)
    }

    useEffect(() => {
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

    // link all'id 
    const handleShowComment = (id: string, index: number) => {

        setShowComment(!showComment)
        // Copia l'array di visibilità dei commenti
        const newCommentVisibility = [...commentVisibility];

        // Inverti la visibilità del commento corrente
        newCommentVisibility[index] = !newCommentVisibility[index];
        // Imposta lo stato
        setCommentVisibility(newCommentVisibility);

        // TODO: sistemare il fatto che non posso aprire due commenti insieme 
        const elementoDestinazione = document.getElementById(id);

        if (elementoDestinazione) {
            if (newCommentVisibility[index]) {
                elementoDestinazione.classList.add('comment-selected');
            } else {
                elementoDestinazione.classList.remove('comment-selected');
            }
        }
    }

    const handleShowComment2 = (id: string, index: number) => {

        setShowComment(!showComment)
        // Copia l'array di visibilità dei commenti
        const newCommentVisibility = [...commentVisibility];

        // Inverti la visibilità del commento corrente
        newCommentVisibility[index] = !newCommentVisibility[index];
        // Imposta lo stato
        setCommentVisibility(newCommentVisibility);

        // TODO: sistemare il fatto che non posso aprire due commenti insieme 
        const elementoDestinazione = document.getElementById(id);
        console.log(elementoDestinazione)

        if (elementoDestinazione) {
            if (newCommentVisibility[index]) {
                elementoDestinazione.classList.add('comment-selected');
            } else {
                elementoDestinazione.classList.remove('comment-selected');
            }
        }
    }


    // Carica i commenti nel db 
    const handleUploadComment = async () => {
        try {
            const response = await axios.post('http://localhost:3001/comment-insert', comments);
            if (response.status === 200) {
                window.alert('Commenti inseriti correttamente');
            }
        } catch (error) {
            console.error('Errore nell\'upload del file JSON', error);
            window.alert('Errore nell\'upload del file JSON: ');
        }
    }

    return (
        <Grid container spacing={0}>
            <Grid item xs={11}>
                <Button onClick={handleComment}>
                    <AddCommentIcon />
                </Button>
                <Button onClick={handleUploadComment}>Salva Commenti</Button>
                {showForm &&
                    <form>
                        <TextField
                            name='comment'
                            id="filled-textarea"
                            label="Inserisci Commento"
                            placeholder="Placeholder"
                            multiline
                            variant="filled"
                            onChange={handleChanngeComment2}
                        />
                        <Button onClick={handleInsertComment2}>Inserisci commento</Button>
                    </form>
                }

                <Container>
                    <ContainerText content={editorData}></ContainerText>
                </Container>
            </Grid>
            <Grid item xs={1} className='line-comment'>
                {comments2?.map((element, index) => (
                    <>
                        <Button
                            key={index}
                            onClick={() => handleShowComment("comment-" + index, index)}
                            style={{ position: 'absolute', top: `${getVerticalPosition(element.target)}px` }}
                        >
                            <AddCommentIcon />
                        </Button>
                        {commentVisibility[index] &&
                            <BoxComment comment={element.body.value} id={element.id} position={getVerticalPosition(element.target)} />

                        }
                    </>
                ))}
            </Grid>
        </Grid>
    )
}

export default BookContinue

