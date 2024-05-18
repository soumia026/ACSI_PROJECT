import {  Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';


const ProductTable = ({ product }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { 
            year: 'numeric', 
            month: 'short', 
            day: '2-digit', 
            hour: '2-digit', 
            minute: '2-digit', 
            hour12: true 
        };
        const formattedDate = date.toLocaleString('en-US', options);
    
        return formattedDate;
    }
    const cols = ['Order Date', 'Order Type', 'Cost Price', 'Qty'];

    useEffect(() => {
        if (product) {
            setFilteredProducts(
                product.purchases.filter((row) =>
                    row.orderType.toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
        }
    }, [searchTerm, product]);

    if (!product) {
        return <div></div>;
    }

    return ( 
        <div className="m-4 flex flex-col bg-white rounded-xl">
            <div className="flex w-inherit justify-between items-center">
                <h1 className="self-center justify-self-center p-5 text-base">Purchases</h1>
                <div className="relative pr-2">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
                        <SearchIcon />
                    </div>
                    <input
                        type="text"
                        className="text-sm pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Search..."
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            
            <TableContainer component={Paper} sx={{ height: '580px' }}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow sx={{borderTop: 1, borderColor: '#E1E2E9'}}>
                            {cols.map((col, index)=>(
                                <TableCell key={index} align="left" sx={{paddingLeft: '70px'}}>{col}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredProducts.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="left" sx={{paddingLeft: '70px'}}>{formatDate(row.orderDate)}</TableCell>
                                <TableCell align="left" sx={{paddingLeft: '70px'}}>{row.orderType}</TableCell>
                                <TableCell align="left" sx={{paddingLeft: '70px'}}>{row.costPrice}</TableCell>
                                <TableCell align="left" sx={{paddingLeft: '70px'}}>{row.quantity}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
 
export default ProductTable;
