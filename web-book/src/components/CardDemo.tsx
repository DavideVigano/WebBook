
import { useState } from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

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
    book: Book;
}


function handleBook(book: Book) {
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

export default function CardDemo({ book }: Props) {
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const maxLength = 100

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
                <CardMedia
                    component="div"
                    sx={{
                        // 16:9
                        pt: '56.25%',
                    }}
                    image={book.copertina}
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {book.title}
                    </Typography>
                    <Typography>
                        {truncateString(book.preview, maxLength)}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={() => handleBook(book)}>
                        <Link to={`/book`}>Visualizza</Link>
                    </Button>
                    <Button size="small" onClick={() => handleBook(book)}>
                        <Link to={`/game`}>Quiz</Link>
                    </Button>
                    <Button size="small" onClick={() => handleBook(book)}>
                        <Link to={`/review`}>Commenti</Link>
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}