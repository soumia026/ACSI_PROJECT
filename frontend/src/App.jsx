import { Route, Routes } from "react-router-dom"
import Landing from "./containers/AUTH/Landing" 
import Login from "./containers/AUTH/Login"
import SignUp from "./containers/AUTH/SignUp"
import Requests from "./containers/ADMIN/Requests"
import Items from "./containers/ADMIN/Items"
import Product from "./containers/ADMIN/Product"
import Items2 from "./containers/STORE_MANAGER/Items"
import AddProduct from "./containers/STORE_MANAGER/AddProduct"

function App() {
  return(
    <div>
      <Routes>
        <Route exact path='/' Component={Landing}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/signup' Component={SignUp}></Route>
        <Route path='/admin/requests' Component={Requests}></Route>
        <Route path='/admin/items' Component={Items}></Route>
        <Route path='/store_manager/items' Component={Items2}></Route>
        <Route path='/product/:id' Component={Product}></Route>
        <Route path='/add_product' Component={AddProduct}></Route>
      </Routes>
    </div>
  )
}

export default App