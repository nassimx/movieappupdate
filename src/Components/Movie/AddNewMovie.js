import React, { useState } from 'react';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton, Typography, TextField, Button, makeStyles, withStyles, Dialog } from '@material-ui/core';




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


const AddNewMovie = ({ handleAdd, movieList }) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [imgSrc, setImgSrc] = useState("");
    const [title, setTitle] = useState("");
    const [rate, setRate] = useState("0");
    const [desc, setDescription] = useState("");







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

                        <TextField

                            label="Image Url"
                            style={{ margin: 8 }}
                            fullWidth
                            margin="normal"
                            onChange={(e) => setImgSrc(e.target.value)}
                            variant="outlined"
                            type="url"
                        />
                        <TextField
                            label="Movie Title"
                            className={classes.textField}
                            variant="outlined"
                            type="text"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <TextField
                            label="Rate"
                            className={classes.textField}
                            variant="outlined"
                            inputProps={{ min: 1, max: 5 }}
                            helperText="rate scale 1-5"
                            type="number"
                            onChange={(e) => setRate(e.target.value)}
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
                        />

                        <Button variant="contained" color="primary" onClick={() => {
                            handleClose()

                            handleAdd(imgSrc, title, rate, desc)
                        }}

                        >Add</Button>

                    </div>
                </DialogContent>

            </Dialog>
        </div>
    );
}
export default AddNewMovie
////