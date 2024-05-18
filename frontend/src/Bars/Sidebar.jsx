import Logo from '../assets/Logo.svg'
import Category from '../assets/Iconly/Light/Category.png'
import WhiteCat from '../assets/Category.svg'
import Bag from '../assets/Iconly/Light/Bag.png'
import User from '../assets/2User.png'
import UserDark from '../assets/2UserDark.png'
import Message from '../assets/Iconly/Light/Message.png'
import darkFolder from '../assets/Iconly/Bulk/Folder.png'
import Setting from '../assets/Iconly/Light/Setting.png'
import Headphones from '../assets/fi_headphones.png'
import Gift from '../assets/fi_gift.png'
import Logout from '../assets/Iconly/Bulk/Logout.png'
import Folder from '../assets/Iconly/Iconly/Bulk/Folder.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'

const SideBar = ({user}) => {
    const location = useLocation()
    const path = location.pathname
    const [userRole, setUserRole] = useState('')
    
    const handleUser = () => {
        if(user.isAdmin){
            setUserRole('admin')
        } else {
            setUserRole(user.role)
        }
    }
    useEffect(()=>{
        handleUser() 
    }, [])
    const navigate = useNavigate()
    const logout = ()=>{
        localStorage.removeItem('token')
        navigate('/')
    }
     return ( 
        <div className='flex items-center justify-between flex-col h-screen w-20 bg-white'>
            <div className='flex items-center justify-center flex-col '>
                <img src={Logo} className='w-16 mb-10 mt-2' />
                
                {
                    userRole === 'admin' && 
                    <ul className='flex flex-col gap-3'>
                        <img src={Category} className='p-4 rounded-xl'/>
                        <img src={Bag} className='p-4 rounded-xl'/>
                        {path === '/admin/requests' ? <Link ><img src={User} className='bg-soumia-500 p-4 rounded-xl' /></Link> : <Link to='/admin/requests'><img src={UserDark} className='p-4 rounded-xl'/></Link>}
                        {path === '/admin/products' || path === '/admin/product/:id' ? <Link to='/admin/products'><img src={Folder} className='bg-soumia-500 p-4 rounded-xl'/></Link> : <Link to='/admin/products'><img src={darkFolder} className='p-4 rounded-xl'/></Link>}
                        <img src={Message} className='p-4 rounded-xl'/>
                        <img src={Setting} className='p-4 rounded-xl'/>
                    </ul>
                }
                {
                    userRole === 'store manager' &&
                    <ul className='flex flex-col gap-3'>
                        <img src={Category} className='p-4 rounded-xl'/>
                        <img src={Bag} className='p-4 rounded-xl'/>
                        <img src={UserDark} className='p-4 rounded-xl'/>
                        {path === '/manager/products' ? <Link><img src={Folder} className='bg-soumia-500 p-4 rounded-xl'/></Link> : <Link to='/manager/products'><img src={darkFolder} className='p-4 rounded-xl'/></Link>}
                        <img src={Message} className='p-4 rounded-xl'/>
                        <img src={Setting} className='p-4 rounded-xl'/>
                    </ul>
                }
            </div>
            <div className=' flex md:items-center justify-center flex-col '>
                <ul className='flex flex-col gap-3'>
                    <img src={Headphones} className='bg-[#EFEFF0] p-4 rounded-xl'/>
                    <img src={Gift} className='bg-[#FFF5E9] p-4 rounded-xl'/>
                </ul>
                <button className='mb-10 mt-6' onClick={logout}><img src={Logout}/></button>
            </div>
        </div>
    );
}
export default SideBar;