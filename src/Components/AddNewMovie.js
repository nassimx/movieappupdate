import * as React from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';


export default function AddNewMovie({ open, handleClose }) {


    return (
        <React.Fragment>

            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Add New Movie</DialogTitle>
                <DialogContent>

                    <Box
                        noValidate
                        component="form"
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            m: 'auto',
                            width: 'fit-content',
                        }}
                    >

                        <DialogContent>

                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Image Url"
                                type="email"
                                fullWidth
                                variant="standard"
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Movie Title"
                                type="link"
                                fullWidth
                                variant="standard"
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="Rate"
                                type="link"
                                fullWidth
                                variant="standard"
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="name"
                                label="desc"
                                type="link"
                                fullWidth
                                variant="standard"
                            />
                        </DialogContent>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                    <Button onClick={handleClose}>Add</Button>

                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
