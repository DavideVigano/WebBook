import { Typography, Grid, Rating } from '@mui/material';

import PersonIcon from '@mui/icons-material/Person';
import LinearProgress from '@mui/material/LinearProgress';
import StarIcon from '@mui/icons-material/Star';

import "../App.css"


interface Props {
    plotColumnHeight: number;
    columnRateREL: Record<string, number>;
    totalReviews: number;
}

function PlotBarRating({ plotColumnHeight, columnRateREL, totalReviews }: Props) {

    /**
     * Calcola la media delle recensioni
     * @returns media delle recensioni
    */
    function ratingMean() {
        // Calcola la somma dei prodotti di rating per la loro frequenza
        let sum = 0;

        for (let rating = 1; rating <= 5; rating++) {
            const ratingString = rating.toString();
            const frequency = columnRateREL[ratingString];

            sum += parseInt(ratingString) * frequency;
        }

        // restituisco la media
        return totalReviews > 0 ? sum : 0;
    }


    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <Typography variant="h1">{ratingMean().toFixed(1)}</Typography>
                    {/* Calcola la media delle recensioni qui */}
                    <Rating name="size-large" value={4.1} precision={0.5} readOnly />
                    {/* Calcola il totale delle recensioni qui */}
                    <Typography variant="caption" display="block" gutterBottom> totale: <PersonIcon fontSize="small" /> {totalReviews}
                    </Typography>
                </Grid>
                {/* Parte 2 */}
                <Grid item xs={9} marginTop="10px">
                    <div style={{ display: 'flex', alignItems: 'center' }} >
                        <div style={{ marginRight: '10px' }}>
                            <StarIcon fontSize="small" color="action" /> <Typography variant="caption">5</Typography>
                        </div>
                        <div style={{ flex: 1 }}>
                            <LinearProgress
                                variant="determinate"
                                value={columnRateREL['5'] * 100}
                                sx={{
                                    height: plotColumnHeight,
                                    backgroundColor: "white",
                                    '& .MuiLinearProgress-bar': {
                                        backgroundColor: 'mediumseagreen',
                                    },
                                }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: "8px" }}>
                        <div style={{ marginRight: '10px' }}>
                            <StarIcon fontSize="small" color="action" /> <Typography variant="caption">4</Typography>
                        </div>
                        <div style={{ flex: 1 }}>
                            <LinearProgress
                                variant="determinate" value={columnRateREL['4'] * 100}
                                sx={{
                                    height: plotColumnHeight,
                                    backgroundColor: "white",
                                    '& .MuiLinearProgress-bar': {
                                        backgroundColor: 'limegreen',
                                    },
                                }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: "8px" }}>
                        <div style={{ marginRight: '10px' }}>
                            <StarIcon fontSize="small" color="action" /> <Typography variant="caption">3</Typography>
                        </div>
                        <div style={{ flex: 1 }}>
                            <LinearProgress
                                variant="determinate"
                                value={columnRateREL['3'] * 100}
                                sx={{
                                    height: plotColumnHeight,
                                    backgroundColor: "white",
                                    '& .MuiLinearProgress-bar': {
                                        backgroundColor: 'yellow',
                                    },
                                }} />
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: "8px" }}>
                        <div style={{ marginRight: '10px' }}>
                            <StarIcon fontSize="small" color="action" /> <Typography variant="caption">2</Typography>
                        </div>
                        <div style={{ flex: 1 }}>
                            <LinearProgress
                                variant="determinate"
                                value={columnRateREL['2'] * 100}
                                sx={{
                                    height: plotColumnHeight,
                                    backgroundColor: 'white',
                                    '& .MuiLinearProgress-bar': {
                                        backgroundColor: 'darkorange',
                                    },
                                }}
                            />
                        </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', marginTop: "8px" }}>
                        <div style={{ marginRight: '10px' }}>
                            <StarIcon fontSize="small" color="action" /> <Typography variant="caption">1</Typography>
                        </div>
                        <div style={{ flex: 1 }}>
                            <LinearProgress
                                variant="determinate"
                                value={columnRateREL['1'] * 100}
                                sx={{
                                    height: plotColumnHeight,
                                    backgroundColor: "white",
                                    '& .MuiLinearProgress-bar': {
                                        backgroundColor: 'tomato',
                                    },
                                }} />
                        </div>
                    </div>
                </Grid>
            </Grid >
        </>
    )
}

export default PlotBarRating;