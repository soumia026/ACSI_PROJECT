import { Link, useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Divider from '@mui/material/Divider';


const ManagerActions = ({ product }) => {
    if (!product) {
        return <div className="flex items-center justify-center">Loading...</div>;
    }
    const navigate = useNavigate()
    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:4000/api/product/deleteProduct/${product._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const responseData = await response.text();
            if (responseData) {
                const parsedData = JSON.parse(responseData);
            }
            
            navigate(`/manager/products`);
        } catch (error) {
            console.log('error: ', error);
        }
    };
    

    return ( 
        <div className="flex items-center justify-between px-5 pt-4">
            <h1 className="text-lg">{product.name}</h1>
            <div className="flex gap-4">
                <Link className="bg-[#1C1D22] text-white flex items-center text-md py-2 px-4 rounded-xl" 
                >Replace Product
                    <Divider orientation="vertical" flexItem sx={{ backgroundColor: 'white', marginX: 1 }} />
                    <ArrowBackIosNewIcon sx={{ transform: 'rotate(270deg)' }} />
                </Link>
                <button 
                    onClick={handleDelete}
                    className="bg-[#CC5F5F] text-white flex items-center justify-center text-md py-2 px-4 rounded-xl" 
                >
                    Unpublish Product
                </button>
            </div>
            
        </div>
    );
}

export default ManagerActions;
