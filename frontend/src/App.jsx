import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './output.css'
import WithoutBar from './Bars/WithoutBar';
import WithBar from './Bars/WithBar';
import Login from './Authentification/Login';
import SignUp from './Authentification/SignUp';
import Landing from './Pages/Landing';
import AfterSignUp from './Pages/AfterSignUp';
import ForgotPassword from './Authentification/ForgotPassword';
import AfterForgotPassword from './Pages/AfterForgotPassword';
import Products from './Pages/Admin/Products';
import Requests from './Pages/Admin/Requests';
import Product from './Pages/Admin/Product';
import UpdatePrice from './Pages/Admin/UpdatePrice';
import StoreProducts from './Pages/Manager/StoreProducts';
import AddProduct from './Pages/Manager/AddProduct';
import StoreProduct from './Pages/Manager/StoreProduct';
import AdminAuth from './Pages/Admin/AdminAuth';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState()
  return (
    <Router>
      <Routes>
        <Route element={<WithoutBar />}>
          <Route exact path="/" element={<Landing />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/after_sign_up" element={<AfterSignUp />} />
          <Route path="/forgot_password" element={<ForgotPassword />} />
          <Route path="/admin_auth" element={<AdminAuth setUser={setUser} />} />
          <Route path="/after_forgot_password" element={<AfterForgotPassword />} />
        </Route>
        <Route element={<WithBar user={user} />}>
          <Route path='/admin/products' element={<Products />} />
          <Route path='/admin/requests' element={<Requests />}/>
          <Route path='/admin/product/:id' element={<Product />}/>
          <Route path='/admin/product/update_price/:id' element={<UpdatePrice />}/>
          <Route path='/manager/products' element={<StoreProducts />}/>
          <Route path='/manager/add_product' element={<AddProduct />}/>
          <Route path='/manager/product/:id' element={<StoreProduct />}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App
