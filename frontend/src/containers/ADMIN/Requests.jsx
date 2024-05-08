import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Requests = () => {

    const createData = (name, email, role) => {
        return { name, email, role};
    }
      
    const rows = [
        createData('Kouadri Soumia', 'soumiakoudri8@gmail.com', 'store manager'),
        createData('Kouadri Soumia', 'soumiakoudri8@gmail.com', 'store manager'),
        createData('Kouadri Soumia', 'soumiakoudri8@gmail.com', 'store manager'),
        createData('Kouadri Soumia', 'soumiakoudri8@gmail.com', 'store manager'),
        createData('Kouadri Soumia', 'soumiakoudri8@gmail.com', 'store manager'),
        createData('Kouadri Soumia', 'soumiakoudri8@gmail.com', 'store manager'),
        createData('Kouadri Soumia', 'soumiakoudri8@gmail.com', 'store manager'),
        createData('Kouadri Soumia', 'soumiakoudri8@gmail.com', 'store manager'),
        createData('Kouadri Soumia', 'soumiakoudri8@gmail.com', 'store manager'),
        createData('Kouadri Soumia', 'soumiakoudri8@gmail.com', 'store manager'),
        createData('Kouadri Soumia', 'soumiakoudri8@gmail.com', 'store manager'),
        createData('Kouadri Soumia', 'soumiakoudri8@gmail.com', 'store manager'),
    ];

    const cols = ['Name', 'Email', 'Role', '', '']
    return ( 
        <div>
            <div className='lg:hidden'>
                please open this page in a bigger screen
            </div>
            <div className="hidden lg:flex bg-[#F4F5FA]">
                <SideBar />
                <div className="flex items-center flex-col">
                    <NavBar />
                    <div className="w-[calc(100vw-120px)] h-[calc(100vh-120px)] mt-5 flex flex-col bg-white rounded-xl">
                        <h1 className="self-center justify-self-center p-5 text-base">Inventory Requests</h1>
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                <TableRow sx={{borderTop: 1, borderColor: '#E1E2E9'}}>
                                    {cols.map((col)=>(
                                        <TableCell align="left" sx={{paddingLeft: '70px'}}>{col}</TableCell>
                                    ))}
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="left" sx={{paddingLeft: '70px'}}>{row.name}</TableCell>
                                        <TableCell align="left" sx={{paddingLeft: '70px'}}>{row.email}</TableCell>
                                        <TableCell align="left" sx={{paddingLeft: '70px'}}>{row.role}</TableCell>
                                        <TableCell align="left"><button className='bg-[#92F345] px-3 py-1 text-white rounded-lg'>Accept</button></TableCell>
                                        <TableCell align="left"><button className='bg-[#FD2525] px-3 py-1 text-white rounded-lg'>Reject</button></TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Requests;