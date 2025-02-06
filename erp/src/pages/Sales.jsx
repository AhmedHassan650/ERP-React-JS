import React, { useEffect, useState } from 'react';
import { fetchSalesData, fetchCustomerData, fetchInventoryData } from '../services/mockApi';
import StyledTable from '../components/StyledTable';  // Importing the StyledTable component

const Sales = () => {
    const [salesData, setSalesData] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        fetchSalesData().then(res => setSalesData(res.data));
        fetchCustomerData().then(res => setCustomers(res.data));
        fetchInventoryData().then(res => setInventory(res.data));
    }, []);

    // Column configuration for the table
    const columns = [
        { label: 'Customer', field: 'customerName' },
        { label: 'Product', field: 'productName' },
        { label: 'Quantity', field: 'quantity' },
        { label: 'Revenue', field: 'revenue' },
        { label: 'Date', field: 'date' },
    ];

    // Add customer and product names based on IDs
    const modifiedSalesData = salesData.map(sale => ({
        ...sale,
        customerName: customers.find(c => c.id === sale.customerId)?.name || 'Unknown',
        productName: inventory.find(p => p.id === sale.productId)?.name || 'Unknown',
    }));

    return (
        <div>
            <h2>Sales</h2>
            {/* Using the StyledTable Component */}
            <StyledTable data={modifiedSalesData} columns={columns} />
        </div>
    );
};

export default Sales;
