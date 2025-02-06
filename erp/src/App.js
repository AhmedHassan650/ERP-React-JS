import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme'; // Import the custom theme
import Dashboard from './pages/Dashboard';
import Sales from './pages/Sales';
import Inventory from './pages/Inventory';
import Customers from './pages/Customers';
import Users from './pages/Users';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <div style={{ display: 'flex' }}>
                    <Sidebar />
                    <main style={{ flexGrow: 1, padding: '20px' }}>
                        <Navbar />
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/sales" element={<Sales />} />
                            <Route path="/inventory" element={<Inventory />} />
                            <Route path="/customers" element={<Customers />} />
                            <Route path="/users" element={<Users />} />
                        </Routes>
                    </main>
                </div>
            </Router>
        </ThemeProvider>
    );
};

export default App;
