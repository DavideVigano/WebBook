import React from 'react';
import { Container, Typography, Button, Card, CardContent } from '@mui/material';

interface ResultProps {
    score: number;
    totalQuestions: number;
}

function ResultComponent({ score, totalQuestions }: ResultProps) {
    return (
        <Container maxWidth="md" className="result-container">
            <Card style={{ marginBottom: '20px' }}>
                <CardContent>
                    <Typography variant="h4">Risultati del Quiz</Typography>
                    <Typography variant="body1">Punteggio ottenuto: {score} su {totalQuestions}</Typography>
                </CardContent>
            </Card>
            <Button variant="contained" color="primary">
                Nuovo Quiz
            </Button>
        </Container>
    );
}

export default ResultComponent;
