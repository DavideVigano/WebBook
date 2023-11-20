const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors'); // Importa il pacchetto cors
const fileUpload = require('express-fileupload'); // visualizzazione file json
const { convertMarkdownToJSON } = require('./utils/convertToJson');  // conversione JSON to MD
const fs = require('fs');
const book = require('./data/book1.json');


const app = express();
const port = 3001;


app.use(
    cors({
        origin: 'http://localhost:5173', // Specifica l'origine del tuo client React
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specifica i metodi HTTP consentiti
    })
);


const mongoURI = 'mongodb+srv://Admin:YwYmFUWoWxwSGv4V@cluster0.5kp2blv.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(mongoURI);

app.use(express.json());

// Connessione al database MongoDB
async function connectToMongoDB() {
    try {
        await client.connect();
        console.log('Connesso a MongoDB');
    } catch (error) {
        console.error('Errore nella connessione a MongoDB:', error);
    }
}

connectToMongoDB();

/**
 * RICHIESTE GET
*/

// restituisce tutti i libri del catalogo
app.get('/', async (req, res) => {
    const collection = client.db('WebBook').collection('Book');
    const result = await collection.find({}).toArray();
    res.json(result);
});

// gestione Login 
app.get('/login', async (req, res) => {
    const collection = client.db('WebBook').collection('User');
    const email = req.query.email;
    const result = await collection.findOne({ email });
    res.json(result);
});

// richiesta db per le review 
app.get('/review', async (req, res) => {
    const collection = client.db('WebBook').collection('Review');
    const references = req.query.references
    const result = await collection.find({ references }).toArray();
    res.json(result);
});

// richiesta db per i commenti 
app.get('/comments', async (req, res) => {
    const collection = client.db('WebBook').collection('Comment');
    const referencesBook = req.query.referencesBook
    const result = await collection.find({ referencesBook }).toArray();
    res.json(result);
});
/**
 * RICHIESTE POST
*/

// visualizzazione file json
app.use(express.json());
app.use(fileUpload());

// caricamento server file json
app.post('/api/upload-json', (req, res) => {
    if (!req.files || !req.files.file) {
        return res.status(400).json({ error: 'Nessun file JSON caricato.' });
    }

    const jsonFile = req.files.file;
    const jsonData = JSON.parse(jsonFile.data.toString('utf-8'));

    // restituiamo i dati JSON elaborati come risposta.
    res.json(jsonData);
});

// conversione da md a Json 
app.post('/api/upload-md', (req, res) => {
    if (!req.files || !req.files.file) {
        return res.status(400).json({ error: 'Nessun file .md caricato.' });
    }

    const mdFile = req.files.file;
    const mdContent = mdFile.data.toString('utf-8');

    // Utilizza la funzione convertMarkdownToJSON per trasformare il contenuto del file .md in JSON
    const jsonData = convertMarkdownToJSON(mdContent);

    // Restituisci l'oggetto JSON elaborato come risposta
    res.json(jsonData);
});


// Upload file json to db 
app.post('/api/upload-json-db', async (req, res) => {

    if (!req.body) {
        return res.status(400).json({ error: 'Nessun file JSON caricato.' });
    }

    const jsonData = req.body;

    // Inserisci il file JSON nel tuo database
    const collection = client.db('WebBook').collection('Book');
    try {
        const result = await collection.insertOne(jsonData);
        res.status(200).json({ message: 'File JSON caricato con successo nel database', data: result });
    } catch (error) {
        console.error('Errore nel caricamento del file nel database', error);
        res.status(500).json({ error: 'Errore nel caricamento del file nel database' });
    }
});

// Upload registrazione to db  
app.post('/sing-up', async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ error: 'Nessun file JSON caricato.' });
    }
    const jsonData = req.body;
    // Inserisci il file JSON nel database
    const collection = client.db('WebBook').collection('User');
    try {
        const result = await collection.insertOne(jsonData);
        res.status(200).json({ message: 'File JSON caricato con successo nel database', data: result });
    } catch (error) {
        console.error('Errore nel caricamento del file nel database', error);
        res.status(500).json({ error: 'Errore nel caricamento del file nel database' });
    }
})

// Upload review to db
app.post('/review-insert', async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ error: 'Nessun file JSON caricato.' });
    }
    const jsonData = req.body;
    // Inserisci il file JSON nel database
    const collection = client.db('WebBook').collection('Review');
    try {
        const result = await collection.insertOne(jsonData);
        res.status(200).json({ message: 'File JSON caricato con successo nel database', data: result });
    } catch (error) {
        console.error('Errore nel caricamento del file nel database', error);
        res.status(500).json({ error: 'Errore nel caricamento del file nel database' });
    }
})

// Upload comment to db 
app.post('/comment-insert', async (req, res) => {
    if (!req.body) {
        return res.status(400).json({ error: 'Nessun file JSON caricato.' });
    }

    const jsonData = req.body;

    console.log(jsonData)

    // Inserisci i file JSON nel database
    const collection = client.db('WebBook').collection('Comment');
    try {
        jsonData.forEach(async element => {
            try {
                const result = await collection.insertOne(element);
                res.status(200).json({ message: 'File JSON caricato con successo nel database', data: result });
            } catch (error) {
                console.error('Errore nel caricamento del file nel database', error);
                res.status(500).json({ error: 'Errore nel caricamento del file nel database' });
            }
        });
    } catch (error) {
        console.error('Errore nel caricamento del file nel database', error);
        res.status(500).json({ error: 'Errore nel caricamento del file nel database' });
    }
});

// Gestione IA Google Domande
const { sendRequest } = require("./utils/google-foundation-models");

// Definisci una route che accetta i parametri
app.get("/generaDomande", (req, res) => {
    // Estrai i parametri dalla richiesta HTTP
    const { content } = req.query;

    // Costruisci l'oggetto params con i parametri estratti
    const params = {
        apiEndpoint: "us-central1-aiplatform.googleapis.com",
        projectId: "webbook-402614",
        modelId: "text-bison@001",
        instances: [{ content: content }],
        parameters: { temperature: 0.2, maxOutputTokens: 1024, topP: 0.8, topK: 40 },
    };

    // Invia la richiesta al modello
    sendRequest(params)
        .then((response) => {
            // Restituisci la risposta come JSON
            res.json(response);
            //writeResponseLocally(params, response);
        })
        .catch((error) => {
            console.error(error);
            res.status(500).json({ error: "Errore nella generazione delle domande." });
        });
});

// Gestione IA Google Voce
const textToSpeech = require('@google-cloud/text-to-speech')

// dot env 
require('dotenv').config()
const util = require('util')

// Crea un client Text-to-Speech
const client2 = new textToSpeech.TextToSpeechClient()

app.get("/generaVoce", async (req, res) => {
    const { text, position } = req.query;

    // Configura i parametri della richiesta
    const request = {
        input: { text: text },
        voice: { languageCode: 'it-IT', ssmlGender: 'Basic' },
        audioConfig: { audioEncoding: 'MP3' },
    };

    try {
        const [response] = await client2.synthesizeSpeech(request)
        const writeFile = util.promisify(fs.writeFile)
        await writeFile("../public/audio/output" + position + ".mp3", response.audioContent, 'binary')
        res.status(200).json({ message: 'audio creato correttamente' });
    } catch (error) {
        console.error('Errore nel caricamento del file nel database', error);
        res.status(500).json({ error: 'Errore nel caricamento del file nel database' });
    }
    console.log('text to speech as completed')
});


app.listen(port, () => {
    console.log(`Server in ascolto sulla porta ${port}`);
});

