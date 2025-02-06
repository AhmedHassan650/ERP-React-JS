import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';
import { Line } from 'react-chartjs-2';
import { fetchSalesData, fetchInventoryData, fetchCustomerData } from '../services/mockApi';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const [salesData, setSalesData] = useState([]);
    const [inventoryData, setInventoryData] = useState([]);
    const [customerData, setCustomerData] = useState([]);

    useEffect(() => {
        fetchSalesData().then(res => setSalesData(res.data));
        fetchInventoryData().then(res => setInventoryData(res.data));
        fetchCustomerData().then(res => setCustomerData(res.data));
    }, []);

    // Chart Data
    const salesChartData = {
        labels: salesData.map(sale => sale.date),
        datasets: [{
            label: 'Sales Revenue',
            data: salesData.map(sale => parseFloat(sale.revenue)),
            borderColor: '#3f51b5',
            backgroundColor: 'rgba(63, 81, 181, 0.2)',
            fill: true,
        }],
    };

    const totalSales = salesData.reduce((acc, sale) => acc + parseFloat(sale.revenue), 0).toFixed(2);
    const totalInventory = inventoryData.reduce((acc, product) => acc + product.stock, 0);
    const totalCustomers = customerData.length;

    return (
        <div>
            <Typography variant="h4" gutterBottom>Dashboard</Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ minHeight: 150 }}>
                        <CardContent>
                            <Typography variant="h6"  >Total Sales</Typography>
                            <Typography variant="h5" sx={{ color: '#e3090d' }}>${totalSales}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ minHeight: 150 }}>
                        <CardContent>
                            <Typography variant="h6">Total Inventory</Typography>
                            <Typography variant="h5" sx={{ color: '#e3090d' }}>{totalInventory} Items</Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{ minHeight: 150 }}>
                        <CardContent>
                            <Typography variant="h6">Total Customers</Typography>
                            <Typography variant="h5" sx={{ color: '#e3090d' }}>{totalCustomers}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>

            <Box sx={{ marginTop: 4 }}>
                <Typography variant="h6">Sales Trend</Typography>
                <Line data={salesChartData} />
            </Box>

            {/* Mini Cross Table Example (using Sales and Inventory Data) */}
            <Box sx={{ marginTop: 4 }}>
                <Typography variant="h6">Sales vs Inventory</Typography>
                <Grid container spacing={2}>
                    {inventoryData.map(product => {
                        const salesForProduct = salesData.filter(sale => sale.productId === product.id);
                        const totalRevenueForProduct = salesForProduct.reduce((acc, sale) => acc + parseFloat(sale.revenue), 0);
                        return (
                            <Grid item xs={12} sm={6} key={product.id}>
                                <Card sx={{ padding: 2 }}>
                                    <Typography variant="body1">{product.name}</Typography>
                                    <Typography variant="body2">Stock: {product.stock}</Typography>
                                    <Typography variant="body2">Total Sales: ${totalRevenueForProduct.toFixed(2)}</Typography>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
        </div>
    );
};

export default Dashboard;
