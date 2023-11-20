import React, { useState, useRef, useEffect } from "react";
import { Box, Card, CardContent, CardMedia, Grid, IconButton, Typography } from "@mui/material"
import { useTheme } from '@mui/material/styles';

import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

import '../App.css';
import { Container } from "@mui/system";
import axios from "axios";
import { ObjectId } from "mongodb";

interface Section {
    subtitle: string;
    content: string; // Contenuto da visualizzare
}

interface Capitoli {
    title: string;
    sections: Section[];
}

interface Book {
    id: ObjectId;
    title: string;
    preview: string;
    capitoli: Capitoli[];
    copertina: string;
}


interface Prop {
    title: string
    description: string
    path: string
}

/**
 * Rimuove Tag html 
 * @param input stringa di testo con tag html 
 * @returns stringa di testo senza tag html 
 */
function removeHtmlTags(input: string) {
    return input.replace(/<[^>]*>/g, '');
}

function createQuestions(input: Book) {
    const result: string[] = []

    let s1 = "";
    for (let i = 0; i < input.capitoli.length; i++) {
        let cap = i + 1;
        s1 = "Capitolo " + cap + " ... " + input.capitoli[i].title + "  ...  "
        let s2 = ""
        for (let j = 0; j < input.capitoli[i].sections.length; j++) {
            s2 = input.capitoli[i].sections[j].subtitle + " ... " + removeHtmlTags(input.capitoli[i].sections[j].content)
            result.push(s1 + s2)
        }
    }

    return result
}

async function sendQuestion(input: string, position: number) {
    axios.get('http://localhost:3001/generaVoce', {

        params: {
            text: input,
            position: position,
        }

    }).then((response) => {
        // TODO: gestire la risposta del file, magari la savo in una variabile per poi essere riprodotto
        console.log(response)
    }).catch((error) => {
        console.error('Errore nella richiesta al server:', error);
    });

    return
}

function ContainerTitle({ title, path, description }: Prop) {
    const url = 'http://localhost:5173/public/audio/output'

    const theme = useTheme();
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isAudio, setIsAudio] = useState(false)
    const [questions, setQuestions] = useState<string[]>([]);
    const [position, setPosition] = useState<number>(0)
    const [audioUrl, setAudioUrl] = useState(url + "0.mp3");

    useEffect(() => {
        // Posizionati all'inizio della pagina quando la pagina viene caricata
        window.scrollTo(0, 0);

        // Chiamata per generare voce 
        const bookString = localStorage.getItem("bookData");
        const referencesBook = bookString ? JSON.parse(bookString) : null;



        //const text = "Capitolo 1. ... " + referencesBook.capitoli[0].title + "  ...  " + referencesBook.capitoli[0].sections[0].subtitle + " ... " + referencesBook.capitoli[0].sections[0].content
        const text = createQuestions(referencesBook)

        setQuestions(text)
        sendQuestion(text[0], 0)
    }, []);

    const previewAudio = () => {
        if (!questions) return
        if (position <= 0) return

        const index = position - 1
        sendQuestion(questions[index], index)
        setPosition(index)

        setAudioUrl(url + index + ".mp3")

    }

    const nextAudio = async () => {
        if (!questions) return
        const index = position + 1
        if (position + 1 >= questions.length) return

        console.log(questions[position + 1])

        await sendQuestion(questions[index], index)
        setPosition(index)
        setAudioUrl(url + index + ".mp3")

    }

    // Stile CSS per la seconda card
    const secondCardStyle = {
        height: '100%', // Altezza massima
        display: 'flex',
        flexDirection: 'column'
    };

    // Funzione per gestire il clic sul pulsante di riproduzione/pausa
    const toggleAudio = () => {
        const audio = audioRef.current;

        if (audio) {
            if (isPlaying) {
                audio.pause();
            } else {
                audio.play();
            }

            setIsPlaying(!isPlaying);
        }
    };

    // lunghezza max testo 
    const maxLength = 300;
    const initialText = description;
    const [text, setText] = useState(initialText);

    const truncatedText = text.slice(0, maxLength) + '...';

    return (
        <Container>
            <Grid container spacing={3}>
                <Grid item xs={4}>
                    {/* Prima Card */}
                    <Card sx={{ display: 'flex', pl: 1, pb: 1 }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    {title}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary" component="div">
                                    ascolta libro
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <IconButton aria-label="previous" onClick={previewAudio}>
                                    {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                                </IconButton>
                                <IconButton aria-label="play/pause" onClick={toggleAudio}>
                                    <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                                </IconButton>
                                <IconButton aria-label="next" onClick={nextAudio}>
                                    {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                                </IconButton>
                            </Box>
                        </Box>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={path}
                            alt={"Immagine " + title}
                        />
                    </Card>
                </Grid>
                <Grid item xs={8}>
                    {/* Seconda Card */}
                    <Card sx={secondCardStyle}>
                        <CardContent style={{ textAlign: 'center' }}>
                            <Typography variant="h5" component="div">
                                {title}
                            </Typography>
                            <div className="line"></div>
                            <Typography
                                variant="body2"
                                color="text.secondary"
                            >
                                {truncatedText}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            {/* Elemento audio */}
            <audio ref={audioRef} controls style={{ display: "none" }}>
                <source src={audioUrl} type="audio/mpeg" />
                Il tuo browser non supporta l'elemento audio.
            </audio>
        </Container>
    );
}

export default ContainerTitle;

