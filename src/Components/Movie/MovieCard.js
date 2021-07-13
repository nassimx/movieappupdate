import React from 'react';
import { Grid, Typography, CardMedia, CardContent, CardActions, Button, Card, makeStyles, CardActionArea } from '@material-ui/core';
import ReactStars from "react-rating-stars-component";


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        minWidth: 345,
    },
    media: {
        height: 500,
    },
});


export const MovieCard = ({ movieCard, handleDelete }) => {

    const classes = useStyles();

    return (
        <div style={{ padding: 30 }}>
            <Grid container
                item
                alignContent="flex-start"
                direction="row"
                justify="center"
                alignItems="center"
                wrap="wrap"
            >
                <Card className={classes.root}  >
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={movieCard.imgSrc}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {movieCard.title}
                                <ReactStars
                                    count={5}
                                    size={24}
                                    activeColor="#ffd700"
                                    value={movieCard.rate}
                                    edit={false}
                                />
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {movieCard.desc}
                            </Typography>
                        </CardContent>
                    </CardActionArea>

                    <CardActions>
                        <Button onClick={() => handleDelete(movieCard.id)} variant="contained" color="secondary">
                            Delete
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </div>
    )
}




