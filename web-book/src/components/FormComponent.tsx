import React, { useState } from 'react';
import { TextField, Button, Grid, Typography } from '@mui/material';

interface FormProps {
    onSubmit: (data: { title: string; preview: string; copertina: string; tags: string[] }) => void;
}

const FormComponent: React.FC<FormProps> = ({ onSubmit }) => {
    const [title, setTitle] = useState('');
    const [preview, setPreview] = useState('');
    const [copertina, setCopertina] = useState('');
    const [tags, setTags] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validazione e invio dei dati
        const titleValue = title.trim();
        const previewValue = preview.trim();
        const copertinaValue = copertina.trim();
        const tagsValue = tags.split(',').map((tag) => tag.trim());

        onSubmit({ title: titleValue, preview: previewValue, copertina: copertinaValue, tags: tagsValue });
    };

    return (
        <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography variant="h6">Inserisci i dati</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="title"
                        label="Titolo"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="preview"
                        label="Inserisci la descrizione"
                        value={preview}
                        onChange={(e) => setPreview(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="copertina"
                        label="Inserisci URL immagine"
                        value={copertina}
                        onChange={(e) => setCopertina(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        id="tags"
                        label="Tags (separati da virgola)"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button type="submit" fullWidth variant="contained" color="primary">
                        Invia
                    </Button>
                </Grid>
            </Grid>
        </form>
    );
};

export default FormComponent;
