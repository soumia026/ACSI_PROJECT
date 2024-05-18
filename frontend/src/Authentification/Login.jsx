import Logo from '../assets/Logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import mailIcon from '../assets/Iconly/Light/Message.png'
import lockIcon from '../assets/Iconly/Light/Lock.png'
import eyeOff from '../assets/Iconly/Light/fi_eye-off.png'
import { useState } from 'react';


const Login = ({setUser}) => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: '',
        password: ''
    })
    const handleChange = (e) =>{
        const {name, value } = e.target
        setData(prev => ({
            ...prev, 
            [name] : value
        }))
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'token'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.log(errorData)
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            localStorage.setItem('token', responseData.token);
            console.log(responseData)
            setUser(responseData)
            navigate('/manager/products')
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return ( 
        <div className='h-screen flex items-center justify-center bg-[#F4F5FA]'>
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-2 rounded-lg w-[85%] bg-[#FFFFFF] py-11 px-6 sm:px-9 sm:w-1/3 md:w-1/2 lg:w-1/3">
                <img src={Logo} alt="metrix logo" className='w-16 mb-6'/>
                <h1 className='text-xl font-medium'>Welcome Back!</h1>
                <p className='text-sm text-[#8B8D97] mb-12'>Login to your account</p>

                <div className="relative w-full mb-7">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <img src={mailIcon} className="w-4 h-4" aria-hidden="true" viewBox="0 0 20 16"/>
                    </div>
                    <input type="email" name='email' onChange={handleChange} value={data.email} id="mail-input" className="bg-[#EFF1F9] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full h-14 ps-10 p-2.5" placeholder="Email Address" required/>
                </div>

                <div className="relative w-full">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <img src={lockIcon} className="w-5 h-5" aria-hidden="true" alt="lock icon" />
                    </div>
                    <input 
                        type={showPassword ? "text" : "password"} 
                        id="password-input" 
                        className="bg-[#EFF1F9] text-sm rounded-lg w-full h-14 ps-10 p-2.5" 
                        placeholder="Password" 
                        name='password'
                         onChange={handleChange} 
                         value={data.password}
                         required
                    />
                    <button 
                        type="button" 
                        onClick={togglePasswordVisibility} 
                        className="absolute inset-y-0 end-0 flex items-center pr-3.5">
                        <img src={showPassword ? eyeOff : eyeOff} alt="toggle password visibility" />
                    </button>
                </div>

                <Link className='text-soumia-500 text-sm self-end' to='/forgot_password
                '>Recover Password</Link>
                
                <p className='text-sm text-[#8B8D97] my-12'>Don't have an account? <Link to='/signup' className='text-soumia-500'>Sign Up</Link></p>
                <button type='submit' className='bg-soumia-500 text-white px-14 py-3 rounded-2xl text-xl'>Login</button>
            </form>
        </div>
     );
}
 
export default Login;
