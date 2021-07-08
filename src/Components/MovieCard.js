import React from 'react';
import { Grid, Typography, Box, CardMedia, CardContent, CardActions, CardActionArea, Button, Card, makeStyles } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';





export const MovieCard = ({  movieCard ,deleteCard}) => {
    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 500,
        },
    });
    const classes = useStyles();

    return (
        <div style={{ padding: 30 }}>

            <Grid

                item
                alignContent="flex-start"
                direction="row"
                justify="center"
                alignItems="center"
                wrap="wrap"
            >
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={movieCard.imgSrc}

                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {movieCard.title}
                            </Typography>
                            <Box component="fieldset" mb={3} borderColor="transparent">
                                <Typography component="legend">Rating</Typography>
                                <Rating name="read-only" value={movieCard.rate} readOnly />
                            </Box>

                            <Typography variant="body2" color="textSecondary" component="p">
                                {movieCard.desc}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button onClick={() => { deleteCard(movieCard.id) }} variant="contained" color="secondary">
                            Delete
                        </Button>
                    </CardActions>
                </Card>
            </Grid>
        </div>
    )
}




