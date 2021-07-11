import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton, Typography, TextField, Button, makeStyles } from '@material-ui/core';




const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
    },
}));


const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon />
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);


const AddNewMovie = ({ handleAdd }) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    const [title, setTitle] = useState("");
    const [rate, setRate] = useState("");
    const [desc, setDescription] = useState("");
    const [imgSrc, setImgSrc] = useState("");



    const handleSubmit = (e) => {
        e.preventDefault()
        // eslint-disable-next-line no-unused-vars
        const newMovie = {
            imgSrc,
            title,
            rate,
            id: Math.random,
            desc
        }
    };
    return (
        <div>

            <Button variant="contained" color="default" onClick={handleClickOpen}>
                Add New Movie
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Add New Movie
                </DialogTitle>
                <DialogContent dividers>
                    <div className={classes.root}>
                        <form onSubmit={handleSubmit}>
                            <TextField

                                label="Image Url"
                                style={{ margin: 8 }}
                                fullWidth
                                margin="normal"
                                onChange={(e) => setImgSrc(e.target.value)}
                                value={imgSrc}
                                variant="outlined"
                                type="url"
                            />
                            <TextField
                                label="Movie Title"
                                className={classes.textField}
                                variant="outlined"
                                type="text"
                                onChange={(e) => setTitle(e.target.value)}
                                value={title}
                            />
                            <TextField
                                label="Rate"
                                className={classes.textField}
                                variant="outlined"
                                inputProps={{ min: 1, max: 5 }}
                                helperText="rate scale 1-5"
                                type="number"
                                onChange={(e) => setRate(e.target.value)}
                                value={rate}
                            />
                            <TextField
                                label="Description"
                                multiline
                                rows={5}
                                rowsMax={12}
                                placeholder="Write Something About The Movie"
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                variant="outlined"
                                type="text"
                                onChange={(e) => setDescription(e.target.value)}
                                value={desc}
                            />
                            <Button autoFocus type="submit">
                                Add
                            </Button>
                        </form>
                    </div>
                </DialogContent>

            </Dialog>
        </div>
    );
}
export default AddNewMovie