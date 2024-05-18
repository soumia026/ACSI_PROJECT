import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from 'react';

const ProductsTable = ({products, user}) => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState(products);
    
    const handleRowClick = (id)=>{
        if (user === 'admin'){
            navigate(`/admin/product/${id}`);
        } else if (user === 'store manager'){
            navigate(`/manager/product/${id}`);
        }
    }
    useEffect(() => {
        setFilteredProducts(
          products.filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
      }, [searchTerm, products]);
    const cols = ['Product Name', 'Category', 'Selling Price', 'In-Stock', 'Cost Value']
  
    return ( 
        <div className=" flex flex-col bg-white rounded-xl">
            <div className="flex w-inherit justify-between items-center">
                <h1 className="p-5 text-base">Inventory Requests</h1>
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
            
            <TableContainer component={Paper} sx={{height: '450px'}}>
                <Table sx={{overflow: 'scroll'}} aria-label="simple table">
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
                        sx={{ '&:last-child td, &:last-child th': { border: 0 }
                        , ":hover": {backgroundColor: '#F4F5FA', cursor: 'pointer'} }}
                        onClick={() => handleRowClick(row._id)}
                        
                        >
                            <TableCell align="left" sx={{paddingLeft: '70px'}}>{row.name}</TableCell>
                            <TableCell align="left" sx={{paddingLeft: '70px'}}>{row.category}</TableCell>
                            <TableCell align="left" sx={{paddingLeft: '70px'}}>{row.sellingPrice}</TableCell>
                            <TableCell align="left" sx={{paddingLeft: '70px'}}>{row.quantity}</TableCell>
                            <TableCell align="left" sx={{paddingLeft: '70px'}}>{row.costPrice}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
     );
}
 
export default ProductsTable;