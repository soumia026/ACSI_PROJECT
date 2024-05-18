import mailIcon from '../assets/Iconly/Light/Message.png'
import { useState } from 'react';
import Logo from '../assets/Logo.svg'
import lockIcon from '../assets/Iconly/Light/Lock.png'
import eyeOff from '../assets/Iconly/Light/fi_eye-off.png'
import { useParams } from 'react-router-dom';



const ForgotPassword = () => {
    const {resetToken} = useParams()
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false);
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const handleChange = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            console.log(password)
            const response = await fetch(`http://localhost:4000/api/users/resetpassword/${resetToken}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(password)
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.log(errorData)
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log(responseData)
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return ( 
        <div className='h-screen flex items-center justify-center bg-[#F4F5FA]'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center rounded-lg w-[85%] bg-[#FFFFFF] py-11 px-6 sm:px-9 sm:w-1/3 md:w-1/2 lg:w-1/3'>
                <h1 className='text-3xl'>Reset Password</h1>
                <p className='text-center p-5 t-sm'>New Password</p>
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
                        value={password}
                         onChange={handleChange} 
                         required
                    />
                    <button 
                        type="button" 
                        onClick={togglePasswordVisibility} 
                        className="absolute inset-y-0 end-0 flex items-center pr-3.5">
                        <img src={showPassword ? eyeOff : eyeOff} alt="toggle password visibility" />
                    </button>
                </div>
                <button type='submit' className='bg-soumia-500 text-white px-14 py-3 mt-5 rounded-2xl text-xl'>Confirm</button>
            </form>
        </div>
    );
}
 
export default ForgotPassword;