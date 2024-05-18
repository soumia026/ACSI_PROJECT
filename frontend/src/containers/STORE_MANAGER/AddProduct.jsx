import { useState } from "react";

const AddProduct = () => {
    const [formData, setFormData] = useState({
        name : '',
        category : 'produce',
        description : '',
        sellingPrice : 0,
        costPrice : 0,
        quantity : 0,
        orderType: 'normal',
        expireAt: '',
        purchases: [{
            orderDate: '',
            orderType: '',
            costPrice: 0,
            quantity: 0
        }]
    })
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
            const response = await fetch('http://localhost:4000/api/product/createProduct', {
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
        } catch (error) {
            console.log('error: ', error)
        }
        console.log(formData);
      };
    return (
        <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Category</label>
        <select name="category" value={formData.category} onChange={handleChange}>
          <option value="produce">Produce</option>
          <option value="meat">Meat</option>
          <option value="dairy">Dairy</option>
          <option value="frozen food">Frozen Food</option>
        </select>
      </div>
      <div>
        <label>Description</label>
        <input type="text" name="description" value={formData.description} onChange={handleChange} />
      </div>
      <div>
        <label>Selling Price</label>
        <input type="number" name="sellingPrice" value={formData.sellingPrice} onChange={handleChange} />
      </div>
      <div>
        <label>Cost Price</label>
        <input type="number" name="costPrice" value={formData.costPrice} onChange={handleChange} />
      </div>
      <div>
        <label>Quantity</label>
        <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
      </div>
      <div>
        <label>Order Type</label>
        <select name="orderType" value={formData.orderType} onChange={handleChange}>
          <option value="normal">Normal</option>
          <option value="special">Special</option>
        </select>
      </div>
      <div>
        <label>Expire At</label>
        <input type="date" name="expireAt" value={formData.expireAt} onChange={handleChange} />
      </div>
      <button type="submit">Submit</button>
    </form>
    );
}
 
export default AddProduct;