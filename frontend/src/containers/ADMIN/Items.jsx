import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import icon from '../../assets/Iconly/icon.png'

import iPhone from '../../assets/Iconly/iphone.png'

const Items = () => {

  const createData = (name, category, price, inStock, costValue) => {
    return { name, category, price, inStock, costValue};
  }
    
  const rows = [
      createData('chezzy ', 'dairy', '₦1,225,000.00', '8', '₦50,000.00'),
      createData('iPhone 12 Pro ', 'Gadgets', '₦725,000.00', '12', '₦50,000.00'),
      createData('chezzy ', 'dairy', '₦1,225,000.00', '8', '₦50,000.00'),

  ];

  const cols = ['Product Name', 'Category', 'Selling Price', 'In-Stock', 'Cost Value']


    return ( 
      <div>
      <div className='lg:hidden'>
          please open this page in a bigger screen
      </div>
      <div className="hidden lg:flex bg-[#F4F5FA]">
          <SideBar />
          <div className="flex items-center flex-col">
              <NavBar />
              <div className="bg-soumia-500 w-[calc(100vw-120px)] h-fit mt-5 flex flex-col justify-between gap-3 rounded-xl text-white p-5">
                <img src={icon} className="w-fit"/>
                <div className="flex w-[calc(100vw-120px)] gap-96"> 
                  <span>
                    <h1 className="text-xl">All products</h1>
                    <p>350</p>
                  </span>
                  <span>
                    <h1>Expired products</h1>
                    <p>316</p>
                  </span>
                </div>
              </div>
              <div className="w-[calc(100vw-120px)] h-[calc(100vh-240px)] mt-5 flex flex-col bg-white rounded-xl">
                <div className="flex w-inherit justify-between">
                  <h1 className="self-center justify-self-center p-5 text-base">Inventory Requests</h1>
                  <input type='text' placeholder='Search'/>
                </div>
                  
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
                                  <TableCell align="left" sx={{paddingLeft: '70px'}}>{row.category}</TableCell>
                                  <TableCell align="left" sx={{paddingLeft: '70px'}}>{row.price}</TableCell>
                                  <TableCell align="left" sx={{paddingLeft: '70px'}}>{row.inStock}</TableCell>
                                  <TableCell align="left" sx={{paddingLeft: '70px'}}>{row.costValue}</TableCell>
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
 
export default Items;