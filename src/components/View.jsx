import React, { useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

const View = (props) => {
    const [open, setOpen] = useState(false);

    const handleIconClick = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <RemoveRedEyeIcon onClick={handleIconClick} />
            <Dialog open={open} onClose={handleClose} maxWidth="xl" 
                PaperProps={{
                    style: {
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                    },
                }}
                backdropprops={{
                    style: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    },
                }}
            >
                <DialogContent sx={{
                    '&::-webkit-scrollbar': {
                        display: 'none'
                    },
                    '-ms-overflow-style': 'none',
                    scrollbarWidth: 'none',
                    }}>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={props.image} alt="anime" style={{ maxWidth: 'auto', maxHeight: 'auto', objectFit: 'contain' }} />
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default View;
