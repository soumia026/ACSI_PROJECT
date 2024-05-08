import SideBar from "../../components/SideBar";
import NavBar from "../../components/NavBar";
import { DataGrid } from '@mui/x-data-grid';
import iPhone from '../../assets/Iconly/iphone.png'

const Items = () => {

const columns = [
  { field: 'ProductName', headerName: 'Product Name', width: 130 },
  { field: 'Category', headerName: 'Category', width: 130 },
  {
    field: 'UnitPrice',
    headerName: 'Unit Price',
    type: 'number',
    width: 90,
  },
  {
    field: 'In-Stock',
    headerName: 'In-Stock',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'Discount',
    headerName: 'Discount',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'TotalValue',
    headerName: 'Total Value',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  }
  ,
  {
    field: 'Action',
    headerName: 'Action',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
  {
    field: 'Status',
    headerName: 'Status',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  }
];

const rows = [
  {ProductName: 'iPhone 13 Pro' ,Category: 'Gadgets', UnitPrice: '₦1,225,000.00', UnitPrice: 35 },
];
    return ( 
        <div>
            <div className='lg:hidden'>
                please open this pUnitPrice in a bigger screen
            </div>
            <div className="hidden lg:flex bg-[#F4F5FA]">
                <SideBar />
                <div className="flex items-center flex-col">
                    <NavBar />
                    <div>
                        <div>
                            <h1>Inventory Summary</h1>
                            <button>+ Add a New Product</button>
                        </div>
                        <div>
                            <span>ijuhytfrdxcfgh</span>
                            <span>ijuhytfrdxcfgh</span>
                        </div>
                        <div style={{ height: 400, width: '100%' }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                initialState={{
                                pagination: {
                                    paginationModel: { pUnitPrice: 0, pUnitPriceSize: 5 },
                                },
                                }}
                                pUnitPriceSizeOptions={[5, 10]}
                                checkboxSelection
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Items;