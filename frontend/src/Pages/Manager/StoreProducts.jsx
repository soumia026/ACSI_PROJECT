import { useEffect, useState } from "react";
import ProductBar from "../../Components/ProductBar";
import ProductsTable from "../../Components/ProductsTable";
import { Link } from "react-router-dom";
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const StoreProducts = ({user}) => {
    const [products, setProducts] = useState([]);
    const [expiredProducts, setExpiredProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const [productsResponse, expiredProductsResponse] = await Promise.all([
                    fetch('http://localhost:4000/api/product/products'),
                    fetch('http://localhost:4000/api/product/expiredProducts')
                ]);

                if (!productsResponse.ok || !expiredProductsResponse.ok) {
                    throw new Error('Network response was not ok');
                }

                const productsData = await productsResponse.json();
                const expiredProductsData = await expiredProductsResponse.json();

                setProducts(productsData.product || []);
                setExpiredProducts(expiredProductsData.expiredProduct || []);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);
    if (loading) {
        return <div className="flex items-center justify-center">Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }
    return ( 
        <div className="bg-[#F4F5FA] flex flex-col gap-2 p-3">
            
            <div className="flex w-full justify-between items-center">
                <h1 className="self-center text-xl">Inventory Summary</h1>
                <Link className="flex bg-soumia-500 items-center justify-center text-white px-6 py-3 rounded-lg"
                to='/manager/add_product'
                >
                    <AddRoundedIcon/>
                    Add a New Product
                </Link>
            </div>
            <ProductBar products={products.length} expiredProducts={expiredProducts.length} />
            <ProductsTable products={products} user={user}/>
        </div>


     );
}
 
export default StoreProducts;