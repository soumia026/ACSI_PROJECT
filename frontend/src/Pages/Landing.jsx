import Logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom';

const Landing = () => {
    return ( 
        <div className="flex items-center justify-center h-screen flex-col">
            <img src={Logo} alt="metrix logo" className='w-1/2 sm:w-1/4'/>
            <h1 className='text-xl sm:text-4xl mb-6'>Welcome to Metrix<Link className='cursor-text' to='/admin_auth'>!</Link></h1>
            <Link to='/login' className='bg-soumia-500 text-white px-8 py-3.5 rounded-2xl text-xl'>Get Started!</Link>
        </div>
     );
}
 
export default Landing;