import Logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom';
import mailIcon from '../../assets/Iconly/Light/Message.png'
import lockIcon from '../../assets/Iconly/Light/Lock.png'
import eyeOff from '../../assets/Iconly/Light/fi_eye-off.png'
import profile from '../../assets/Iconly/Light/Profile.png'
import { useState } from 'react';

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [data, setData] = useState({
        fullName: '',
        mail: '',
        password: '',
        role:' '
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
        console.log(data)

        // try {
        //     const response = await fetch('', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json'
        //         },
        //         body: JSON.stringify(data)
        //     });

        //     if (!response.ok) {
        //         throw new Error('Network response was not ok');
        //     }

        //     const responseData = await response.json();
        //     console.log(responseData);
        // } catch (error) {
        //     console.error('Error:', error);
        // }
    };

    return ( 
        <div className='h-screen flex items-center justify-center bg-[#F4F5FA]'>
            <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center gap-2 rounded-lg w-[85%] bg-[#FFFFFF] py-11 px-6 sm:px-9 sm:w-1/3 md:w-1/2 lg:w-1/3">
                <img src={Logo} alt="metrix logo" className='w-16 mb-4'/>
                <h1 className='text-xl font-medium'>Get Started with <span className='text-soumia-500'>Metrix</span></h1>
                <p className='text-sm text-[#8B8D97] mb-6'>Create your free account</p>
                <div className="relative w-full mb-3.5">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <img src={profile} className="w-5 h-5" aria-hidden="true" viewBox="0 0 20 16"/>
                    </div>
                    <input type="text" name='fullName' onChange={handleChange} value={data.fullName} id="name-input" className="bg-[#EFF1F9] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full h-14 ps-10 p-2.5" placeholder="Your Full Name" />
                </div>
                <div className="relative w-full mb-3.5">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <img src={mailIcon} className="w-4 h-4" aria-hidden="true" viewBox="0 0 20 16"/>
                    </div>
                    <input type="email" name='mail' onChange={handleChange} value={data.mail} id="mail-input" className="bg-[#EFF1F9] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full h-14 ps-10 p-2.5" placeholder="Email Address" />
                </div>

                <div className="relative w-full mb-3.5">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <img src={lockIcon} className="w-5 h-5" aria-hidden="true" alt="lock icon" />
                    </div>
                    <input 
                        type={showPassword ? "text" : "password"} 
                        id="password-input" 
                        className="bg-[#EFF1F9] text-sm rounded-lg w-full h-14 ps-10 p-2.5" 
                        placeholder="Create a Strong Password" 
                        name='password'
                         onChange={handleChange} 
                         value={data.password}
                    />
                    <button 
                        type="button" 
                        onClick={togglePasswordVisibility} 
                        className="absolute inset-y-0 end-0 flex items-center pr-3.5">
                        <img src={showPassword ? eyeOff : eyeOff} alt="toggle password visibility" />
                    </button>
                </div>
                <div className="relative w-full">
                    <input list="roles" id="role" name="role" className="bg-[#EFF1F9] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full h-14 ps-10 p-2.5" />
                    <select
                        className="absolute inset-y-0 start-0 bg-[#EFF1F9] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full h-14 pe-7 p-2.5"
                        id="role"
                        name="role"
                        onChange={handleChange}
                        placeholder='Add your role'
                        value={data.role}
                    >
                        <option value="">Add your role</option>
                        <option value="Inventary Manager">Inventary Manager</option>
                        <option value="Store Manager">Store Manager</option>
                        <option value="Supplier">Supplier</option>
                    </select>
                </div>

                
                <p className='text-sm text-[#8B8D97] my-12'>Already have an account?  <Link to='/login' className='text-soumia-500'>Login</Link></p>
                <button type='submit' className='bg-soumia-500 text-white px-14 py-3 rounded-2xl text-xl'>Sign Up</button>
            </form>
        </div>
     );
}
 
export default SignUp;
