import React, { useState } from 'react';
import axios from 'axios';
import { useDropzone } from 'react-dropzone';
import ListGroupHeading from '../components/ListGroupHeading';
import WhiteSpace from '../components/WhiteSpace';
import NavBar from '../components/NavBar';
import ImgBackgroundBook from '../components/ImgBackgroundGroup';
import ContainerTitle from '../components/ContainerTitle';
import FormComponent from '../components/FormComponent';
import { Grid, Button, Container } from '@mui/material';

const App: React.FC = () => {

    /** Varibili di stato per la gestione del file Json */
    const [jsonData, setJsonData] = useState<any | null>(null);

    /** Varibili di stato per la gestione del Form */
    const [formData, setFormData] = useState<{ title: string; preview: string; copertina: string; tags: string[] } | null>({
        title: 'nessun titolo inserito',
        preview: 'nessuna preview inserita',
        copertina: '',
        tags: [],
    });

    /**
     * Funzione per il caricamento del file da parte dell'utente, invia il file al server Node.js per l'elaborazione.
     * <p> setta la variabile {@link jsonData} con il contenuto della variabile {@link formData} e il contenuto del file
     * @param acceptedFiles file in formato md da trasformare in Json 
     */
    const onDrop = async (acceptedFiles: File[]) => {
        const file = acceptedFiles[0];

        const newFormData = new FormData();
        newFormData.append('file', file);

        try {
            const response = await axios.post('http://localhost:3001/api/upload-md', newFormData);

            let jsonData = { ...formData, capitoli: response.data };

            console.log(jsonData);
            setJsonData(jsonData);
        } catch (error) {
            console.error('Errore nell\'upload del file JSON', error);
        }
    };

    /**
     * Funzione che setta {@link formData} con il contenuto del form 
     * @param data parametri del form
     */
    const handleFormSubmit = (data: { title: string; preview: string; copertina: string; tags: string[] }) => {
        setFormData(data);
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    /**
     * Funzione per il caricamento dei dati contenuti nella variabile {@link jsonData } nel database
     */
    const handleUploadDb = async () => {
        try {
            const response = await axios.post('http://localhost:3001/api/upload-json-db', jsonData);
            if (response.status === 200) {
                window.alert('Caricamento riuscito nel database.');
            }
        } catch (error) {
            console.error('Errore nell\'upload del file JSON', error);
            window.alert('Errore nell\'upload del file JSON: ');
        }
    }

    return (
        <>
            <WhiteSpace />
            <NavBar />
            <WhiteSpace />

            <Container>
                <h1>Carica un file nel formato MD</h1>
                <FormComponent onSubmit={handleFormSubmit} />
                <WhiteSpace />
                <div {...getRootProps()} style={dropzoneStyles}>
                    <input {...getInputProps()} />
                    <p>Trascina un file MD qui o fai clic per selezionarlo.</p>
                </div>
                <WhiteSpace />
                <Grid item xs={12}>
                    <Button type="submit" fullWidth variant="contained" color="secondary" onClick={handleUploadDb}>
                        Upload File
                    </Button>
                </Grid>
                {jsonData && (
                    <>
                        <WhiteSpace />
                        <h2>Preview:</h2>
                        <ImgBackgroundBook path={jsonData.copertina}></ImgBackgroundBook>

                        <WhiteSpace />
                        <ContainerTitle
                            title={jsonData.title}
                            path={jsonData.copertina}
                            description={jsonData.preview}
                        ></ContainerTitle>

                        <WhiteSpace />
                        <div>
                            <ListGroupHeading
                                classUl="list-group list-group-flush"
                                classLi="list-group-item list-group-item-action"
                                book={jsonData}
                            ></ListGroupHeading>
                        </div>
                    </>
                )}
            </Container>
        </>
    );
};

const dropzoneStyles: React.CSSProperties = {
    border: '2px dashed #cccccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
};

export default App;
