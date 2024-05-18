import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const AddProduct = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState(
        {
            name: "",
            category:"",
            description:"", 
            sellingPrice:"", 
            costPrice:"", 
            quantity:"", 
            orderType:"",
            expireAt: ""
    }
    )
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
            expireAt: name === "expireDate" ? `${value}T${formData.expireTime}:00.000Z` :
                name === "expireTime" ? `${formData.expireDate}T${value}:00.000Z` :
                formData.expireAt
        });
    };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:4000/api/product/createProduct`, {
                method: 'POST',
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
            navigate(`/manager/products`);
        } catch (error) {
            console.log('error: ', error)
        }
        console.log(formData);
      };
    return (
            <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-[calc(100vw-5rem)] h-[calc(100vh-5rem)]'>
                <div className="flex justify-between px-6 items-center w-full pb-5">
                    <h1>New Inventory Item</h1>
                    <button
                        type="submit"
                        className='bg-soumia-500 text-white px-9 py-3 rounded-2xl text-md'
                        >
                        Save & Publish
                    </button>
                </div>
                <div className="flex items-start pt-28 h-[calc(100vh-12rem)] w-[calc(100vw-8rem)] justify-around gap-6 rounded-lg bg-[#FFFFFF] py-11 px-6">
                    <div className="flex flex-col gap-5 items-center w-full ">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Product Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="bg-[#EFF1F9] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/3 h-14 ps-10 p-2.5"
                        />
                        <select
                            id="category"
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            className="bg-[#EFF1F9] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/3 h-14 ps-10 pe-10 p-2.5"
                        >
                            <option value="">Select Product Category</option>
                            <option value="produce">Produce</option>
                            <option value="meat">Meat</option>
                            <option value="dairy">Dairy</option>
                            <option value="frozen food">Frozen food</option>
                        </select>
                        <span className="w-2/3 h-14 flex justify-between gap-4">
                            <input
                                type="number"
                                id="sellingPrice"
                                name="sellingPrice"
                                placeholder="Selling Price"
                                value={formData.sellingPrice}
                                onChange={handleChange}
                                className="bg-[#EFF1F9] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-1/2 h-14 ps-10 p-2.5"
                            />
                            <input
                                type="number"
                                id="costPrice"
                                name="costPrice"
                                placeholder="Cost Price"
                                value={formData.costPrice}
                                onChange={handleChange}
                                className="bg-[#EFF1F9] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-1/2 h-14 ps-10 p-2.5"
                            />
                        </span>
                        <input
                            type="number"
                            id="quantity"
                            name="quantity"
                            placeholder="Quantity in Stock"
                            value={formData.quantity}
                            onChange={handleChange}
                            className="bg-[#EFF1F9] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/3 h-14 ps-10 p-2.5"
                        />
                        <select
                            id="orderType"
                            name="orderType"
                            value={formData.orderType}
                            onChange={handleChange}
                            className="bg-[#EFF1F9] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/3 h-14 ps-10 pe-10 p-2.5"
                        >
                            <option value="">Order Type</option>
                            <option value="normal">Normal</option>
                            <option value="special">Special</option>
                        </select>
                    </div>
                    <div className="flex flex-col gap-5 w-full items-start">
                        <textarea 
                            id="description"
                            name="description"
                            placeholder="Short Description"
                            value={formData.description}
                            onChange={handleChange}
                            className="bg-[#EFF1F9] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-2/3 h-32 ps-10 p-2.5"
                        />
                        <p className="align-text-left">
                            Expired Date
                        </p>
                        <span className="w-2/3 h-14 flex justify-between gap-4">
                            <input
                                type="date"
                                id="expireDate"
                                name="expireDate"
                                value={formData.expireDate}
                                onChange={handleChange}
                                className="bg-[#EFF1F9] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-1/2 h-14 ps-10 p-2.5"
                            />
                            <input
                                type="time"
                                id="expireTime"
                                name="expireTime"
                                value={formData.expireTime}
                                onChange={handleChange}
                                className="bg-[#EFF1F9] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-1/2 h-14 ps-10 p-2.5"
                            />
                        </span>
                    </div>
                    {/* <input
                        type="datetime-local"
                        id="orderDate"
                        name="orderDate"
                        value={formData.orderDate}
                        onChange={handleChange}
                        className="bg-[#EFF1F9] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-1/3 h-14 ps-10 p-2.5"
                    />
'produce', 'meat', 'dairy', 'frozen food'
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
                    /> */}
                </div>
                
            </form>
     );
}
 
export default AddProduct;