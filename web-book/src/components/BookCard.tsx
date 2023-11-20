import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { Link } from 'react-router-dom'; // Importa Link da React Router
import * as fs from 'fs';
import { useState } from 'react';
import axios from 'axios';

// TODO: modifico per libro json, leggo file json, primo elem indica titolo + preview 
interface Section {
    subtitle: string;
    content: string; // Contenuto da visualizzare
}

interface Capitoli {
    title: string;
    sections: Section[];
}

interface Book {
    title: string;
    preview: string;
    copertina: string;
    capitoli: Capitoli[]
}

interface Props {
    book: Book[];
}

async function handleBook(book: Book) {
    localStorage.setItem('bookData', JSON.stringify(book));
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

function truncateString(inputString: string | any[], maxLength: number) {
    if (inputString.length <= maxLength) {
        return inputString;
    } else {
        return inputString.slice(0, maxLength) + '...';
    }
}

function BookCard({ book }: Props) {
    const maxLength = 150
    return (
        <>
            <CssBaseline />
            <main>
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 0,
                    }}
                >
                    <Container maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            Web Book
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            seleziona il Web Book che ti piacerebbe leggere oppure testa le tue abilità attraverso giochi divertenti
                            che ti faranno apprendere più velocemnte i concetti che hai letto
                        </Typography>
                    </Container>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        {book.map((card, index) => (
                            <Grid item key={index} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            // 16:9
                                            pt: '56.25%',
                                        }}
                                        image={card.copertina}
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.title}
                                        </Typography>
                                        <Typography>
                                            {truncateString(card.preview, maxLength)}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small" onClick={() => handleBook(card)}>
                                            <Link to={`/book`}>Visualizza</Link>
                                        </Button>
                                        <Button size="small" onClick={() => handleBook(card)}>
                                            <Link to={`/game`}>Quiz</Link>
                                        </Button>
                                        <Button size="small" onClick={() => handleBook(card)}>
                                            <Link to={`/review`}>Commenti</Link>
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Something here to give the footer a purpose!
                </Typography>
            </Box>
            {/* End footer */}
        </>
    );
}

export default BookCard