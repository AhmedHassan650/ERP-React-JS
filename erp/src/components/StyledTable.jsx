import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Paper, TableSortLabel } from '@mui/material';

const StyledTable = ({ data, columns }) => {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map(column => (
                            <TableCell key={column.field}>
                                <TableSortLabel>{column.label}</TableSortLabel>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <TableRow key={index}>
                            {columns.map(column => (
                                <TableCell key={column.field}>{row[column.field]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default StyledTable;
