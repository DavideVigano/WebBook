import React, { useState } from 'react';
import { Container, Typography, Button, Card, CardContent, Grid, Chip } from '@mui/material';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import ResultComponent from './ResultComponent';

interface Question {
    question: string;
    answers: string[];
    correctAnswer: string;
}

interface Props {
    quizzes: Question[][];
}

function QuizComponent({ quizzes }: Props) {
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState(Array(quizzes[currentQuiz][currentQuestion].answers.length).fill(null));
    const [score, setScore] = useState(0);
    const [isCorrect, setIsCorrect] = useState(-1);
    const [showResults, setShowResults] = useState(false);

    const handleAnswerClick = (answerIndex: number) => {
        const updatedUserAnswers = [...userAnswers];
        updatedUserAnswers[currentQuestion] = answerIndex;
        setUserAnswers(updatedUserAnswers);

        if (quizzes[currentQuiz][currentQuestion].answers[answerIndex] === quizzes[currentQuiz][currentQuestion].correctAnswer) {
            setScore(score + 1);
            setIsCorrect(1)
        } else {
            setIsCorrect(0);
        }

        if (currentQuestion < quizzes[currentQuiz].length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            if (currentQuiz < quizzes.length - 1) {
                setCurrentQuiz(currentQuiz + 1);
                setCurrentQuestion(0);
            } else {
                setShowResults(true);
            }
        }
    };


    const handleNextQuestion = () => {
        if (currentQuestion < quizzes[currentQuiz].length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            if (currentQuiz < quizzes.length - 1) {
                setCurrentQuiz(currentQuiz + 1);
                setCurrentQuestion(0);
            } else {
                setShowResults(true);
            }
        }
    };

    return (
        <>
            {!showResults && (
                <Container maxWidth="md" className="quiz-container">
                    <Card style={{ marginBottom: '20px' }}>
                        <CardContent>
                            <Typography variant="h4">Domanda {currentQuestion + 1}</Typography>
                            <Typography variant="body1">
                                {quizzes[currentQuiz][currentQuestion].question}
                            </Typography>
                        </CardContent>
                    </Card>
                    <div className="answers-container">
                        {quizzes[currentQuiz][currentQuestion].answers.map((answer, index) => (
                            <p key={index}>
                                <Button
                                    variant="outlined"
                                    onClick={() => handleAnswerClick(index)}
                                    className={`answer-button ${userAnswers[currentQuestion] === index ? 'selected' : ''}`}
                                    fullWidth
                                >
                                    {answer}
                                </Button>
                            </p>
                        ))}
                    </div>
                    <Grid container justifyContent="flex-end">
                        <Button variant="contained" color="primary" onClick={handleNextQuestion}>
                            Salta
                        </Button>
                    </Grid>
                    {isCorrect === 1 && (
                        <Chip color="success" icon={<TagFacesIcon />} />
                    )}
                    {isCorrect === 0 && (
                        <Chip color="error" icon={<SentimentVeryDissatisfiedIcon />} />
                    )}
                </Container>
            )}
            {showResults && (
                <ResultComponent score={score} totalQuestions={quizzes.flat().length} />
            )}
        </>
    );
}

export default QuizComponent;
