import { Avatar, Grid, Paper, Typography } from '@mui/material'
import "../App.css"
import ClearIcon from '@mui/icons-material/Clear';
import axios from 'axios';

interface Props {
    id: string;
    comment: string
    position: number
}

const BoxComment = ({ id, comment, position }: Props) => {

    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;

    const handleDeleteComment = () => {
        axios.delete('http://localhost:3001/comments-delete', {
            data: {
                id: id,
            }
        }).then((response) => {
            console.log('Commento eliminato con successo:', response.data);
            // Esegui altre azioni dopo l'eliminazione
        }).catch((error) => {
            console.error('Errore nella richiesta al server:', error);
        });
    }

    return (
        <>
            <Paper
                elevation={12}
                className='paper-comment'
                style={{ position: 'absolute', top: `${position + 30}px`, right: '55px' }}
            >
                <Grid container alignItems="center">
                    <Grid item xs={2}>
                        <Avatar
                            alt={user.nickName}
                            src={user.icon}
                            sx={{ width: 40, height: 40 }}
                            className='user-avatar'
                        />
                    </Grid>
                    <Grid item sx={{ flexGrow: 1 }}>
                        <Typography variant="subtitle1" fontWeight="bold">
                            {user.nickName}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <ClearIcon color="error" onClick={handleDeleteComment} />
                    </Grid>
                </Grid>

                <Grid item alignItems="center">
                    <Typography variant="body1" sx={{ color: 'gray', fontStyle: 'italic', fontSize: '0.7rem' }}> {/* Testo della recensione in grigio e corsivo */}
                        {comment}
                    </Typography>
                </Grid>
            </Paper>
        </>
    )
}

export default BoxComment