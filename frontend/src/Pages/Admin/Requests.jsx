import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from "react";

const Requests = () => {
    const [data, setData] = useState([{}])
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetchData = async ()=>{
        try {
            const response = await fetch('http://localhost:4000/api/admin/pendingUsers')
            if(!response.ok){
                console.log('Network response was not ok')
            }
            const result = await response.json()
            setData(result.pendingUsers)
            console.log(result.pendingUsers)
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(()=>{
        fetchData()
    }, [])

    const handleStatusChange = async (userId, userEmail, status) => {
        try {
            const token= localStorage.getItem('token')
            const response = await fetch(`http://localhost:4000/api/admin/updateUser/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`

                },
                body: JSON.stringify({email: userEmail, status: status })
            });
            fetchData()
        } catch (error) {
            setError(error);
        }
    };

    if (loading) return <div className='flex items-center justify-center'>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    const cols = ['Name', 'Email', 'Role', '', '']
    return (
        <div className="flex flex-col bg-white rounded-xl m-4">
            <h1 className="self-center justify-self-center p-5 text-base">Inventory Requests</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow sx={{borderTop: 1, borderColor: '#E1E2E9'}}>
                        {cols.map((col, index)=>(
                            <TableCell align="left" key={index} sx={{paddingLeft: '70px'}}>{col}</TableCell>
                        ))}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {data.map((row, index) => (
                        <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell align="left" sx={{paddingLeft: '70px'}}>{row.name}</TableCell>
                            <TableCell align="left" sx={{paddingLeft: '70px'}}>{row.email}</TableCell>
                            <TableCell align="left" sx={{paddingLeft: '70px'}}>{row.roles}</TableCell>
                            <TableCell align="left"><button onClick={() => handleStatusChange(row.id, row.email, 'accepted')} className='bg-[#92F345] px-3 py-1 text-white rounded-lg'>Accept</button></TableCell>
                            <TableCell align="left"><button onClick={() => handleStatusChange(row.id, row.email, 'rejected')} className='bg-[#FD2525] px-3 py-1 text-white rounded-lg'>Reject</button></TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
 
export default Requests;