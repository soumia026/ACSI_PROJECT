import FolderIcon from '../assets/icons/FolderIcon';

const ProductBar = ({products, expiredProducts}) => {
    return ( 
        <div className="bg-soumia-500 rounded-xl flex flex-col text-white p-4 gap-2 mb-2.5">
            <FolderIcon />
            <div className="flex gap-96"> 
                <div className='mr-14'>
                    <h1 className="text-xl">All products</h1>
                    <p>{products}</p>
                </div>
                <div>
                    <h1 className="text-xl">Expired products</h1>
                    <p>{expiredProducts}</p>
                </div>
            </div>
        </div>
    );
}
 
export default ProductBar;