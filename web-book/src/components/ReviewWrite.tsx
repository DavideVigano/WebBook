import { Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions, Button, Rating, Input } from "@mui/material";
import * as React from 'react';
import axios from 'axios';
import { useState } from "react";

function ReviewWrite() {
    const [value, setValue] = React.useState<number>(2);
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;

    const bookString = localStorage.getItem('bookData');
    const book = bookString ? JSON.parse(bookString) : null;

    /* Gestione scrittura recensione */
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = useState({
        nickName: user.nickName,
        icon: user.icon,
        rating: value,
        comment: "",
        references: book._id,
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = async () => {
        if (formData.comment.trim() === "") {
            window.alert("Il campo commento è obbligatorio");
        } else {
            try {
                const response = await axios.post('http://localhost:3001/review-insert', formData);
                if (response.status === 200) {
                    window.alert('Commento inserito correttamente');
                }
            } catch (error) {
                console.error('Errore nell\'upload del file JSON', error);
                window.alert('Errore nell\'upload del file JSON: ');
            }
            setOpen(false);
        }
    }

    const maxWidth = 'md'
    return (
        <form onSubmit={handleSubmit}>
            <Button variant="outlined" onClick={handleClickOpen}>
                Scrivi recensione
            </Button>
            <Dialog
                fullWidth={true}
                maxWidth={maxWidth}
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>
                    <Rating
                        name="rating"
                        value={value}
                        onChange={(event, newValue) => {
                            if (newValue !== null) {
                                setValue(newValue);
                                setFormData({
                                    ...formData,
                                    rating: newValue,
                                });
                            }

                        }}
                    />
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                    </DialogContentText>
                    <TextField
                        fullWidth id="fullWidth"
                        label="Inserisci commento "
                        variant="filled"
                        name="comment"
                        multiline
                        rows={4}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Chiudi</Button>
                    <Button type="submit" onClick={handleSubmit}>Invia</Button>
                </DialogActions>
            </Dialog>
        </form>
    )
}

export default ReviewWrite;