import { Route, Routes } from "react-router-dom"
import Landing from "./containers/Landing" 
import Login from "./containers/Login"
import SignUp from "./containers/SignUp"

function App() {
  return(
    <div className="font-poppins">
      <Routes>
        <Route exact path='/' Component={Landing}></Route>
        <Route path='/login' Component={Login}></Route>
        <Route path='/signup' Component={SignUp}></Route>
      </Routes>
    </div>
  )
}

export default App