import React, { useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';

const View = (props) => {
    const [open, setOpen] = useState(false);
    const [avatarWidth, setAvatarWidth] = useState(100); // Default width

    const handleIconClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChange = (event) => {
        setAvatarWidth(Number(event.target.value));
    };

    return (
        <div>
            <RemoveRedEyeIcon onClick={handleIconClick} />
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Preview Your PFP</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Enter Avatar Width (px):
                        <input
                            type="text"
                            value={avatarWidth}
                            onChange={handleInputChange}
                            min="100"
                            max="1000"
                        />
                    </DialogContentText>
                    <Avatar style={{ width: avatarWidth, height: avatarWidth }}>
                        <img src={props.image} alt="anime" />
                    </Avatar>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default View;
