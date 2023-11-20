import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const LoginForm = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
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

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        // faccio GET se restiuisce errore allora qualcosa email sbagliata, poi confronto password 
        // se tutto corretto poi metto nome utente + img profilo in local storage 

        axios.get('http://localhost:3001/login', {
            params: {
                email: formData.email
            }
        }).then((response) => {
            if (response.data === null) {
                window.alert('Mail non Trovata')
            } else if (response.data.password === formData.password) {
                window.alert('Corretto')
                const user = {
                    nickName: response.data.nickName,
                    icon: response.data.icon,
                    email: response.data.email,
                };

                // Salvo nel local storage 
                localStorage.setItem('user', JSON.stringify(user));

                // Reindirizza l'utente alla home page
                navigate('/');

            } else {
                window.alert('Password Errata')
            }

        }).catch((error) => {
            console.error('Errore nella richiesta al server:', error);
            window.alert('Errore nella richiesta al server:')
        });

    };

    return (
        <form onSubmit={handleSubmit}>
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
                Accedi
            </Button>
        </form>
    );
};

export default LoginForm;
