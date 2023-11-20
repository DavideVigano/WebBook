import * as React from 'react';
import { Container, Typography, Grid, Avatar, Rating, Divider, CardContent, Button } from '@mui/material';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';

import "../App.css"
import WhiteSpace from '../components/WhiteSpace';
import NavBar from '../components/NavBar';
import PlotBarRating from '../components/PlotBarRating';
import axios from 'axios';

// Dati di esempio per le recensioni
//import reviews from "../data/recensioni.json"

// import da sistemare 

import ReviewWrite from '../components/ReviewWrite';

interface Review {
    nickName: string,
    icon: string,
    rating: number,
    comment: string,
    references: string,
}



function ReviewPage() {

    const [reviews, setReviews] = useState<Review[]>([]);
    const [isLogged, setIsLogged] = useState(false);

    if (localStorage.user && !isLogged) {
        setIsLogged(true)
    }

    useEffect(() => {
        const bookData = localStorage.getItem('bookData');
        const id = bookData ? JSON.parse(bookData)._id : null;

        axios.get('http://localhost:3001/review', {
            params: {
                references: id,
            }
        }).then((response) => {
            setReviews(response.data);
        }).catch((error) => {
            console.error('Errore nella richiesta al server:', error);
        });
        // Posizionati all'inizio della pagina quando la pagina viene caricata
        window.scrollTo(0, 0);
    }, []);

    /**  numero totale delle recensioni */
    const total = reviews.length;

    /**
     * funzione che prende in input una stringa ed un intero e restituisce la stringa troncata dove la lunghezza di troncamento è data dall'intero 
     * @param inputString stringa da troncare
     * @param maxLength posizione dove troncare la stringa 
     * @returns stringa troncata + ... per indicare il proseguo 
     */
    function truncateString(inputString: string | any[], maxLength: number) {
        if (inputString.length <= maxLength) {
            return inputString;
        } else {
            return inputString.slice(0, maxLength) + '...';
        }
    }

    /**
     * calcola la frequenza assoluta del rating delle recensioni 
     * @returns frequenza assoluta delle recensioni
     */
    function frequenciesABS() {
        // Crea un oggetto per le frequenze
        const ratingFrequencies: Record<string, number> = {
            '1': 0,
            '2': 0,
            '3': 0,
            '4': 0,
            '5': 0,
        };

        // Calcola le frequenze assolute
        reviews.forEach((review: { rating: number }) => {
            const rating = review.rating.toString(); // Converte il rating in stringa
            if (typeof rating === 'string' && rating >= '1' && rating <= '5') {
                ratingFrequencies[rating]++;
            }
        });
        return ratingFrequencies
    }

    /**
     * calcola la frequenza relativa del rating delle recensioni 
     * @returns frequenza relatica delle recensioni
     */
    function frequenciesREL() {
        const ratingFrequencies = frequenciesABS();

        for (let rating = 1; rating <= 5; rating++) {
            const ratingString = rating.toString();
            ratingFrequencies[ratingString] = ratingFrequencies[ratingString] / total;
        }

        return ratingFrequencies
    }

    return (
        <>
            <WhiteSpace />
            <NavBar />
            <WhiteSpace />
            <Container maxWidth="lg">
                {/* Intestazione */}
                <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography gutterBottom variant="h6" component="div">
                            Recensioni
                        </Typography>
                    </Grid>
                    <Grid item>
                        {isLogged && (<ReviewWrite></ReviewWrite>)}
                    </Grid>
                </Grid>
            </Container >
            <WhiteSpace />
            <Divider />

            <Container maxWidth="lg">
                {/* Parte superiore  valutazione complessiva */}
                <Container sx={{ py: 1 }} maxWidth="md">
                    <PlotBarRating
                        plotColumnHeight={26}
                        columnRateREL={frequenciesREL()}
                        totalReviews={total}
                    ></PlotBarRating>
                </Container>
                <Divider />

                {/* Parte inferiore recensioni utenti */}
                <Container sx={{ py: 2 }} maxWidth="md">
                    <Grid container spacing={4}>
                        {reviews.map((review, index) => (
                            <Grid item key={index} xs={12} sm={6} md={6}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Grid container spacing={1}>
                                            <Grid item xs={2}>
                                                <Avatar
                                                    alt={review.nickName}
                                                    src={review.icon}
                                                    sx={{ width: 56, height: 56 }}
                                                    className='review-avatar'
                                                />
                                            </Grid>
                                            <Grid item xs={10}>
                                                <Grid container spacing={1} alignItems="center">
                                                    <Grid item>
                                                        <Typography variant="subtitle1" fontWeight="bold"> {/* Nome in grassetto */}
                                                            {review.nickName}
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item>
                                                        <Rating name="rating" value={review.rating} precision={0.5} readOnly />
                                                    </Grid>
                                                </Grid>
                                                <Grid container spacing={1} alignItems="center">
                                                    <Grid item >
                                                        <Typography variant="body1" sx={{ color: 'gray', fontStyle: 'italic', fontSize: '0.7rem' }}> {/* Testo della recensione in grigio e corsivo */}
                                                            {review.comment}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </CardContent>
                                </Card>
                            </Grid>

                        ))}
                    </Grid>
                </Container>

            </Container >
        </>
    );
}

export default ReviewPage;

