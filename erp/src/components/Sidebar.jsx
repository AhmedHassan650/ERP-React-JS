import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // <-- Import Link here
import { Drawer, List, ListItem, ListItemText, ListItemIcon, Divider, useMediaQuery, useTheme } from '@mui/material';
import { Home, ShoppingCart, Inventory, People, PersonAdd, BarChart } from '@mui/icons-material'; // <-- Ensure this is installed

const Sidebar = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [open, setOpen] = useState(!isSmallScreen);

    const handleDrawerToggle = () => {
        setOpen(!open);
    };

    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={open}
            onClose={handleDrawerToggle}
            sx={{
                width: open ? 240 : 80,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: open ? 240 : 80,
                    backgroundColor: '#2C3E50',
                    color: 'white',
                    transition: 'width 0.3s ease',
                },
            }}
        >
            <div style={{ padding: '20px', textAlign: 'center', color: '#fff' }}>
                <h2 style={{ margin: 0, fontSize: '1.5rem', fontWeight: 600 }}>ERP System</h2>
                <p style={{ margin: 0 }}>Dashboard</p>
            </div>

            <Divider sx={{ borderColor: '#34495E' }} />

            <List>
                <ListItem button component={Link} to="/" sx={{ '&:hover': { backgroundColor: '#abdbe3' } }}>
                    <ListItemIcon sx={{ color: '#abdbe3' }}>
                        <Home />
                    </ListItemIcon>
                    {open && <ListItemText primary="Dashboard" sx={{ color: '#abdbe3' }} />}
                </ListItem>

                <ListItem button component={Link} to="/sales" sx={{ '&:hover': { backgroundColor: '#34495E' } }}>
                    <ListItemIcon sx={{ color: '#abdbe3' }}>
                        <ShoppingCart />
                    </ListItemIcon>
                    {open && <ListItemText primary="Sales" sx={{ color: '#abdbe3' }} />}
                </ListItem>

                <ListItem button component={Link} to="/inventory" sx={{ '&:hover': { backgroundColor: '#34495E' } }}>
                    <ListItemIcon sx={{ color: '#abdbe3' }}>
                        <Inventory />
                    </ListItemIcon>
                    {open && <ListItemText primary="Inventory" sx={{ color: '#abdbe3' }} />}
                </ListItem>

                <ListItem button component={Link} to="/customers" sx={{ '&:hover': { backgroundColor: '#34495E' } }}>
                    <ListItemIcon sx={{ color: '#abdbe3' }}>
                        <People />
                    </ListItemIcon>
                    {open && <ListItemText primary="Customers" sx={{ color: '#abdbe3' }} />}
                </ListItem>

                <ListItem button component={Link} to="/users" sx={{ '&:hover': { backgroundColor: '#34495E' } }}>
                    <ListItemIcon sx={{ color: '#fff' }}>
                        <PersonAdd />
                    </ListItemIcon>
                    {open && <ListItemText primary="Users" sx={{ color: '#abdbe3' }} />}
                </ListItem>

                <ListItem button component={Link} to="/analytics" sx={{ '&:hover': { backgroundColor: '#34495E' } }}>
                    <ListItemIcon sx={{ color: '#fff' }}>
                        <BarChart />
                    </ListItemIcon>
                    {open && <ListItemText primary="Analytics" sx={{ color: '#abdbe3' }} />}
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
