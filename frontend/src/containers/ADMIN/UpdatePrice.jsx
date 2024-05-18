import { useParams, Link } from "react-router-dom";
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
import {useNavigate } from 'react-router-dom';



const Product = () => {
    const {id} = useParams()

  const [product, setProduct] = useState({})
    const fetchData = async ()=>{
        try {
            const response = await fetch(`http://localhost:4000/api/product/${id}`)
            if(!response.ok){
                console.log('Network response was not ok')
            }
            const result = await response.json()
            setProduct(result.product)
        } catch (error) {
            console.log('error', error)
        }
    }

    useEffect(()=>{
        fetchData()
        console.log(product)
    }, [])
    

  const cols = ['Order Date', 'Order Type', 'Cost Price', 'Qty']

    return ( 
        <div>
            <div className='lg:hidden'>
                please open this page in a bigger screen
            </div>
            <div className="hidden lg:flex bg-[#F4F5FA]">
                <SideBar />
                <div className="flex items-center flex-col">
                    <NavBar />
                    <div className="flex w-[calc(100vw-120px)] justify-between"> 
                        <p>{product.name}</p>
                        <Link to>Update Price</Link>
                    </div>
                    <div className="w-[calc(100vw-120px)] h-[calc(100vh-280px)] mt-5 flex flex-col bg-white rounded-xl">
                        
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Product;