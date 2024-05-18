import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import icon from '../../assets/Iconly/icon.png';
import { useEffect, useState } from "react";
import {Link, useNavigate } from 'react-router-dom';


const Items = () => {

  const [products, setProducts] = useState([{}])
  const [expiredProducts, setExpiredProducts] = useState([{}])
  const navigate = useNavigate();
    const fetchData = async ()=>{
        try {
            const response = await fetch('http://localhost:4000/api/product/products')
            if(!response.ok){
                console.log('Network response was not ok')
            }
            const result = await response.json()
            setProducts(result.product)
            console.log(result.product)
        } catch (error) {
            console.log('error', error)
        }
    }
    const fetchData2 = async ()=>{
      try {
          const response = await fetch('http://localhost:4000/api/product/expiredProducts')
          if(!response.ok){
              console.log('Network response was not ok')
          }
          const result = await response.json()
          setExpiredProducts(result.expiredProduct)
          console.log(result.expiredProduct)
      } catch (error) {
          console.log('error', error)
      }
  }
  const handleRowClick = (id)=>{
    navigate(`/product/${id}`);
  }

    useEffect(()=>{
        fetchData()
        fetchData2()
    }, [])
    

  const cols = ['Product Name', 'Category', 'Selling Price', 'In-Stock', 'Cost Value']


    return ( 
      <div>
      <div className='lg:hidden'>
          please open this page in a bigger screen
      </div>
      <div className="hidden lg:flex bg-[#F4F5FA]">
          <SideBar />
          <div className="flex items-center flex-col">
              <NavBar />
              <span>
                <p>Inventory Summary</p>
                <Link >
                  Add a new product
                </Link>
              </span>
              <div className="bg-soumia-500 w-[calc(100vw-120px)] h-fit mt-5 flex flex-col justify-between gap-3 rounded-xl text-white p-5">
                <img src={icon} className="w-fit"/>
                <div className="flex w-[calc(100vw-120px)] gap-96"> 
                  <span>
                    <h1 className="text-xl">All products</h1>
                    <p>{products.length}</p>
                  </span>
                  <span>
                    <h1>Expired products</h1>
                    <p>{expiredProducts.length}</p>
                  </span>
                </div>
              </div>
              <div className="w-[calc(100vw-120px)] h-[calc(100vh-280px)] mt-5 flex flex-col bg-white rounded-xl">
                <div className="flex w-inherit justify-between">
                  <h1 className="self-center justify-self-center p-5 text-base">Inventory Requests</h1>
                  <input type='text' placeholder='Search'/>
                </div>
                  
                  <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                          <TableHead>
                          <TableRow sx={{borderTop: 1, borderColor: '#E1E2E9'}}>
                              {cols.map((col, index)=>(
                                  <TableCell key={index} align="left" sx={{paddingLeft: '70px'}}>{col}</TableCell>
                              ))}
                          </TableRow>
                          </TableHead>
                          <TableBody>
                          {products.map((row, index) => (
                              <TableRow
                              key={index}
                              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
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
          </div>
      </div>
      </div>
     );
}
 
export default Items;