import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/" >
      <ListItemIcon sx={{color: '#70737C'}}>
        <AssignmentIcon/>
      </ListItemIcon>
      <ListItemText primary="Home"  />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon sx={{color: '#70737C'}}>
      <AssignmentIcon/>
      </ListItemIcon>
      <ListItemText primary="Random" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon sx={{color: '#70737C'}}>
      <AssignmentIcon/>
      </ListItemIcon>
      <ListItemText primary="Random Image" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon sx={{color: '#70737C'}}>
      <AssignmentIcon/>
      </ListItemIcon>
      <ListItemText primary="Randomg Gif" />
    </ListItemButton>
    <ListItemButton component={Link} to="/pintrest">
      <ListItemIcon sx={{color: '#70737C'}}>
      <AssignmentIcon/>
      </ListItemIcon>
      <ListItemText primary="Pintrest" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      hi hi
    </ListSubheader>
    {/* <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton> */}
  </React.Fragment>
);