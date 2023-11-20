import { Backdrop, Button, CircularProgress, Container, Grid } from "@mui/material"
import WhiteSpace from "../components/WhiteSpace"
import NavBar from "../components/NavBar"
import Typewriter from "../components/TypeWriter"
import QuizComponent from "../components/QuizComponent";
import { useState } from "react";
import axios from "axios";
import "../App.css"
import { ObjectId } from "mongodb";
import { Link } from "react-router-dom";

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

interface Question {
    question: string,
    answers: string[],
    correctAnswer: string,
}

/**
 * Rimuove Tag html 
 * @param input stringa di testo con tag html 
 * @returns stringa di testo senza tag html 
 */
function removeHtmlTags(input: string) {
    return input.replace(/<[^>]*>/g, '');
}

function createQuestions(input: Book, domande: number) {

    const domanda = "creami " + domande + ' domande a risposta multipla con una sola risposta corretta nel seguente formato json:\n {[{"question": domanda1","answers": [" "," "," "," "]"correctAnswer": " "},]}\n testo: \n'
    const result: string[] = []

    let req = "";
    for (let i = 0; i < input.capitoli.length; i++) {
        for (let j = 0; j < input.capitoli[i].sections.length; j++) {
            req = removeHtmlTags(input.capitoli[i].sections[j].content)
            result.push(domanda + req)
        }
    }

    return result
}

function stringToJson(inputString: string): any {
    // Rimuovi le stringhe di delimitazione ```json o ``` all'inizio e alla fine della stringa
    const cleanedString = inputString.replace(/^```json|```$/g, '');
    console.log("cleanedString");
    console.log(cleanedString);
    try {
        // Analizza la stringa JSON
        const jsonObject = JSON.parse(cleanedString);

        return jsonObject;
    } catch (error) {
        // Se il parsing come JSON fallisce, prova a rimuovere anche le stringhe di delimitazione ``` e ``` e riprova il parsing
        const cleanedStringWithoutBackticks = inputString.replace(/^```|```$/g, '');
        console.log("cleanedStringWithoutBackticks");
        console.log(cleanedStringWithoutBackticks);
        try {
            const jsonObjectWithoutBackticks = JSON.parse(cleanedStringWithoutBackticks);
            return jsonObjectWithoutBackticks;
        } catch (error) {
            try {
                if (!/^\s*\[\{/.test(cleanedString)) {
                    const trimmedString = cleanedString.trim();
                    if (trimmedString.charAt(0) === '{' && trimmedString.charAt(trimmedString.length - 1) === '}' && trimmedString.charAt(1) === '[' && trimmedString.charAt(trimmedString.length - 2) === ']') {
                        console.log("trimmedString")
                        console.log(trimmedString)

                        const stringWithoutBraces = trimmedString.slice(1, -1);
                        console.log("stringWithoutBraces")
                        console.log(stringWithoutBraces);

                        try {
                            // Analizza la stringa JSON senza le parentesi graffe iniziale e finale
                            const jsonObject = JSON.parse(stringWithoutBraces);
                            return jsonObject;
                        } catch (error) {
                            console.error('Errore durante il parsing del JSON:', error);
                        }

                    } else {
                        const stringWithoutBraces = "[" + trimmedString + "]";
                        console.log("stringWithoutBraces quadre");
                        console.log(stringWithoutBraces);

                        try {
                            // Analizza la stringa JSON senza le parentesi graffe iniziale e finale
                            const jsonObject = JSON.parse(stringWithoutBraces);
                            return jsonObject;
                        } catch (error) {
                            console.error('Errore durante il parsing del JSON:', error);
                        }
                    }
                }
            } catch (error) {
                console.error('Errore durante il parsing del JSON:', error);
            }
        }
    }
}

async function sendQuestion(input: string) {
    try {
        const response = await axios.get('http://localhost:3001/generaDomande', {
            params: {
                content: input,
            }
        });

        const responseString = response.data.predictions[0].content;
        console.log("stringa risposta: ")
        console.log(responseString);

        const jsonObject = stringToJson(responseString);
        console.log(jsonObject);
        return jsonObject;
    } catch (error) {

        console.error('Errore nella richiesta al server:', error);
        return [{
            question: "",
            answers: ["", "", "", ""],
            correctAnswer: "0",
        }];
    }
}

function isArrayOfQuestions(data: any): data is Question[] {
    if (!Array.isArray(data)) {
        return false;
    }

    for (const item of data) {
        if (
            typeof item !== 'object' ||
            !('question' in item) ||
            !('answers' in item) ||
            !('correctAnswer' in item) ||
            typeof item.question !== 'string' || // Verifica che question sia una stringa
            item.question.trim() === '' // Verifica che question non sia una stringa vuota
        ) {
            return false;
        }
    }

    return true;
}


function Game() {
    const [questions, setQuestions] = useState<Question[][]>([[{
        question: "",
        answers: ["", "", "", ""],
        correctAnswer: "0",
    }]]);

    const [isStart, setIsStart] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleStart = async () => {
        setIsLoading(true)
        const bookString = localStorage.getItem("bookData");
        const referencesBook = bookString ? JSON.parse(bookString) : null;

        const domande = createQuestions(referencesBook, 2);

        const update: Question[][] = [];

        for (let i = 0; i < 4; i++) {
            // Attendere che sendQuestion completi prima di procedere
            const response = await sendQuestion(domande[i]);
            if (isArrayOfQuestions(response)) {
                update.push(response);
            }

        }

        setQuestions(update);
        setIsStart(true);
        setIsLoading(false)
        console.log(update);
    };

    const handleHome = () => {

    }


    const textStyle = {
        fontFamily: 'Pixelify Sans, sans-serif',
        fontSize: '150px',
        color: 'lime'
    };

    const buttonStyleYes = {
        fontFamily: 'Pixelify Sans, sans-serif',
        fontSize: '50 px',
        backgroundColor: 'white',
        color: 'lime',
        border: '8px solid lime'
    };

    const buttonStyleNo = {
        fontFamily: 'Pixelify Sans, sans-serif',
        fontSize: '50 px',
        backgroundColor: 'white',
        color: 'red',
        border: '8px solid red'
    };

    return (
        <>
            <WhiteSpace />
            <NavBar />
            <WhiteSpace />
            {!isStart && (
                <Container style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', fontFamily: 'Pixelify Sans, sans-serif' }}>
                    <Grid container direction="column" justifyContent="center" alignItems="center">
                        <Grid item>
                            <Typewriter fontProps={textStyle} text='Start Game ?' speed={150} />
                        </Grid>
                        <Grid item container justifyContent="center" spacing={2}>
                            <Grid item>
                                <Button variant="contained" onClick={handleStart} className="button-choice-game" style={buttonStyleYes}>
                                    <h1 >Yes</h1>
                                </Button>
                            </Grid>
                            <Grid item>
                                <Button variant="contained" className="button-choice-game" style={buttonStyleNo}>
                                    <Link to={`/`} style={{ color: "red", textDecoration: "none" }}><h1 >No</h1></Link>
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={isLoading}
                    >
                        <CircularProgress color="inherit" />
                    </Backdrop>
                </Container>
            )}
            {isStart && (
                <QuizComponent quizzes={questions}></QuizComponent>
            )}
        </>
    )

}

export default Game