import Login from "./pages/Login"
import Restaurant from "./pages/Restaurant"
import Signup from "./pages/Signup"
import Navbar from "./components/Navbar"
import Order from "./pages/Order"
import Home from "./pages/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./pages/Cart"
import Menu_card from "./components/Menu_card"
import Post from "./pages/Post"
import Rest_card from "./components/Reat_card"
import Allorder_card from "./components/Allorder_card"
function App() {
 

  return (
    <BrowserRouter>
     <Navbar /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/restaurant/:id" element={<Order />} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Post" element={<Post/>} />
        <Route path="/Mc" element={<Menu_card/>} />
        <Route path="/Rc" element={<Rest_card/>} />
        <Route path="/Ac" element={<Allorder_card/>} />
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
