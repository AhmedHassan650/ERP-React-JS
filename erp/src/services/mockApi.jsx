export const fetchSalesData = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                data: Array.from({ length: 20 }, (_, index) => ({
                    id: index + 1,
                    customerId: Math.floor(Math.random() * 20) + 1,
                    productId: Math.floor(Math.random() * 20) + 1,
                    quantity: Math.floor(Math.random() * 10) + 1,
                    revenue: (Math.random() * 1000).toFixed(2),
                    date: `2025-02-${(index % 30) + 1}`,
                })),
            });
        }, 1000);
    });
};

export const fetchInventoryData = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                data: Array.from({ length: 20 }, (_, index) => ({
                    id: index + 1,
                    name: `Product ${index + 1}`,
                    price: (Math.random() * 100).toFixed(2),
                    stock: Math.floor(Math.random() * 500) + 1,
                })),
            });
        }, 1000);
    });
};

export const fetchCustomerData = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                data: Array.from({ length: 20 }, (_, index) => ({
                    id: index + 1,
                    name: `Customer ${index + 1}`,
                    email: `customer${index + 1}@example.com`,
                    phone: `+1 (555) 123-456${(index % 10)}`,
                })),
            });
        }, 1000);
    });
};

export const fetchUserData = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                data: Array.from({ length: 5 }, (_, index) => ({
                    id: index + 1,
                    name: `User ${index + 1}`,
                    role: index % 2 === 0 ? 'Admin' : 'Employee',
                    email: `user${index + 1}@example.com`,
                })),
            });
        }, 1000);
    });
};
