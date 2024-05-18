import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Divider from '@mui/material/Divider';

const AdminActions = ({product}) => {
    if (!product) {
        return <div className="flex items-center justify-center">Loading...</div>;
    }
    return ( 
        <div className="flex items-center justify-between px-5 pt-5">
            <h1 className="text-lg">{product.name}</h1>
            <Link className="bg-[#1C1D22] text-white flex items-center text-md py-2 px-4 rounded-xl" 
            to={`/admin/product/update_price/${product._id}`}>Update Price
                <Divider orientation="vertical" flexItem sx={{ backgroundColor: 'white', marginX: 1 }} />
                <ArrowBackIosNewIcon sx={{ transform: 'rotate(270deg)' }} />
            </Link>
        </div>
    );
}
 
export default AdminActions;