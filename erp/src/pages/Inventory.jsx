import React, { useEffect, useState } from 'react';
import { fetchInventoryData } from '../services/mockApi';
import StyledTable from '../components/StyledTable';

const Inventory = () => {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        fetchInventoryData().then(res => setInventory(res.data));
    }, []);

    const columns = [
        { label: 'Product Name', field: 'name' },
        { label: 'Price', field: 'price' },
        { label: 'Stock', field: 'stock' },
    ];

    return (
        <div>
            <h2>Inventory</h2>
            <StyledTable data={inventory} columns={columns} />
        </div>
    );
};

export default Inventory;
