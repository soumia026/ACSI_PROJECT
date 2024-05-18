import ProductTable from "../../Components/ProductTable";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AdminActions from "../../Components/AdminActions";

const Product = () => {
    const {id} = useParams()
    const [product, setProduct] = useState({})
    const fetchData = async ()=>{
        try {
            const response = await fetch(`http://localhost:4000/api/product/${id}`)
            if(!response.ok){
                console.log('Network response was not ok')
            }

            const result = await response.json()
            setProduct(result)
        } catch (error) {
            console.log('error', error)
        }
    }
    useEffect(()=>{
        fetchData() 
        console.log(product)
    }, [])
    return ( 
        <div>
            <AdminActions product={product.product}/>
            <ProductTable product={product.product}/>
        </div>
    );
}
 
export default Product;