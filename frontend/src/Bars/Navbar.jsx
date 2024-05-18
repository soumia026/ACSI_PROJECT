import Divider from '@mui/material/Divider';
import profile from '../assets/profile.png'
import Home from '../assets/Iconly/Bulk/Home.png'

const NavBar = ({userName}) => {
    return ( 
        <div className='h-20 w-[calc(100vw-80px)] bg-white'>
            <div className='h-14 flex justify-between items-center'>
                <h1 className='text-bold ml-6'>Inventory</h1>
                <span className="flex gap-5 justify-around items-center">
                    <p className='bg-[#FEF5EA] px-3 py-1 rounded-lg'>{userName}</p>
                    <img src={profile} className='mr-6'/>
                </span>
            </div>
            <Divider />
            <span className='h-4 flex items-center pt-2'>
                <img src={Home} className='ml-6 mr-2'/>
                <p className='text-sm text-[#8B8D97]'>/ Inventory</p>
            </span>            
        </div>
    );
}
export default NavBar;