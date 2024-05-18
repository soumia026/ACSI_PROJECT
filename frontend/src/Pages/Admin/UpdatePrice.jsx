import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UpdatePrice = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [formData, setFormData] = useState(
        {
            orderDate: "",
            orderType: "",
            quantity: "",
            costPrice: ""
        }
    )
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:4000/api/product/updatePrice/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            console.log(JSON.stringify(formData))

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            

            const responseData = await response.json();
            console.log(responseData)
            navigate(`/admin/product/${id}`);
        } catch (error) {
            console.log('error: ', error)
        }
        console.log(formData);
      };
    return (
            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-[calc(100vw-5rem)] h-[calc(100vh-5rem)]'>
                <div className="flex justify-between px-6 items-center w-full pb-5">
                    <h1>Update Price</h1>
                    <button
                        type="submit"
                        className='bg-soumia-500 text-white px-9 py-3 rounded-2xl text-md'
                        >
                        Save & Publish
                    </button>
                </div>
                <div className="flex flex-col items-center h-[calc(100vh-12rem)]  w-[calc(100vw-8rem)] justify-center gap-6 rounded-lg bg-[#FFFFFF] py-11 px-6">
                    <input
                        type="datetime-local"
                        id="orderDate"
                        name="orderDate"
                        value={formData.orderDate}
                        onChange={handleChange}
                        className="bg-[#EFF1F9] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-1/3 h-14 ps-10 p-2.5"
                    />

                    <select
                        id="orderType"
                        name="orderType"
                        value={formData.orderType}
                        onChange={handleChange}
                        className="bg-[#EFF1F9] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-1/3 h-14 ps-10 pe-10 p-2.5"
                    >
                        <option value="">Order Type</option>
                        <option value="normal">Normal</option>
                        <option value="special">Special</option>
                    </select>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        placeholder="Quantity in Stock"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="bg-[#EFF1F9] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-1/3 h-14 ps-10 p-2.5"
                    />

                    <input
                        type="number"
                        id="costPrice"
                        name="costPrice"
                        placeholder="New Cost Price"
                        value={formData.costPrice}
                        onChange={handleChange}
                        className="bg-[#EFF1F9] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-1/3  h-14 ps-10 p-2.5"
                    />
                </div>
                
            </form>
    );
}
 
export default UpdatePrice;