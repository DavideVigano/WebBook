import React, { useState } from 'react';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const SignupForm = () => {
    const [formData, setFormData] = useState({
        nickName: '',
        icon: '',
        email: '',
        password: '',
    });

    const handleChange = (e: { target: { name: any; value: any; }; }) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/sing-up', formData);
            if (response.status === 200) {
                window.alert('Caricamento riuscito nel database.');
            }
        } catch (error) {
            console.error('Errore nell\'upload del file JSON', error);
            window.alert('Errore nell\'upload del file JSON: ');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                label="Nome utente"
                type="text"
                name="nickName"
                fullWidth
                margin="normal"
                variant="outlined"
                value={formData.nickName}
                onChange={handleChange}
            />
            <TextField
                label="URL immagine"
                type="text"
                name="icon"
                fullWidth
                margin="normal"
                variant="outlined"
                value={formData.icon}
                onChange={handleChange}
            />
            <TextField
                label="Indirizzo email"
                type="email"
                name="email"
                fullWidth
                margin="normal"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
            />
            <TextField
                label="Password"
                type="password"
                name="password"
                fullWidth
                margin="normal"
                variant="outlined"
                value={formData.password}
                onChange={handleChange}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                size="large"
            >
                Registrati
            </Button>
        </form>
    );
};

export default SignupForm;
