import BookCard from '../components/BookCard'



import NavBar from '../components/NavBar';

// Visualizzazione Libri 
import { useEffect, useState } from 'react';
import { ObjectId } from 'mongodb';
import axios from 'axios';
import BookCard3 from '../components/BookCard3';
import { Container } from '@mui/material';


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


const HomePage = () => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        axios.get('http://localhost:3001/')
            .then((response) => {
                setBooks(response.data);
            })
            .catch((error) => {
                console.error('Errore nella richiesta al server:', error);
            });
    }, []);

    return (
        <>
            <div style={{ marginBottom: '20px' }}></div>
            <NavBar></NavBar>
            <Container><BookCard3 book={books}></BookCard3></Container>
            <BookCard book={books}></BookCard>

        </>
    )
}

export default HomePage