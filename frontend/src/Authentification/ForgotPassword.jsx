import mailIcon from '../assets/Iconly/Light/Message.png'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [data, setData] = useState({
        email: '', 
        port: 5173,
        hostname: 'localhost',
        protocol: 'http'
    })
    const navigate = useNavigate()
    const handleChange = (e) => {
        setData(prevData => ({
            ...prevData,
            email: e.target.value
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('hello')
        try {
            const response = await fetch('http://localhost:4000/api/users/forgotpassword', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.log(errorData)
                throw new Error('Network response was not ok');
            }

            const responseData = await response.json();
            console.log(responseData)
            navigate('/after_forgot_password')
        } catch (error) {
            console.error('Error:', error);
        }
    };
    return ( 
        <div className='h-screen flex items-center justify-center bg-[#F4F5FA]'>
            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center rounded-lg w-[85%] bg-[#FFFFFF] py-11 px-6 sm:px-9 sm:w-1/3 md:w-1/2 lg:w-1/3'>
                <h1 className='text-3xl'>Forgot Password</h1>
                <p className='text-center p-5 t-sm'>please enter the email address you'd like your password reset information sent to</p>
                <div className="relative w-full mb-7">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                        <img src={mailIcon} className="w-4 h-4" aria-hidden="true" viewBox="0 0 20 16"/>
                    </div>
                    <input type="email" name='email' onChange={handleChange} value={data.email} id="mail-input" className="bg-[#EFF1F9] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full h-14 ps-10 p-2.5" placeholder="Email Address" required/>
                </div>
                <button type='submit' className='bg-soumia-500 text-white px-14 py-3 rounded-2xl text-xl'>Send</button>
            </form>
        </div>
    );
}
 
export default ForgotPassword;