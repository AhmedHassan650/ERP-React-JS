import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button } from '@mui/material';

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Button color="inherit" component={Link} to="/">Dashboard</Button>
                <Button color="inherit" component={Link} to="/sales">Sales</Button>
                <Button color="inherit" component={Link} to="/inventory">Inventory</Button>
                <Button color="inherit" component={Link} to="/users">Users</Button>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
