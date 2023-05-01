import Login from "./pages/Login";
import Restaurant from "./pages/Restaurant";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Order from "./pages/Order";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import Menu_card from "./components/Menu_card";
import Post from "./pages/Post";
import Rest_card from "./components/Rest_card";
import Allorder_card from "./components/Allorder_card";
import Cart from "./pages/Cart";
import Select from "./pages/Select";
import User from "./pages/User";
import Recieve from "./pages/Recieve";

function App() {
  const [reload, setReload] = useState(0);

  return (
    <BrowserRouter>
      <Navbar reload={[reload, setReload]} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/restaurant" element={<Restaurant />} />
        <Route
          path="/restaurant/:id"
          element={<Order reload={[reload, setReload]} />}
        />
        <Route path="/Post" element={<Post />} />

        <Route path="/Mc" element={<Menu_card />} />
        <Route path="/Rc" element={<Rest_card />} />
        <Route path="/Ac" element={<Allorder_card />} />
        <Route path="/cart" element={<Cart reload={[reload, setReload]} />} />
        <Route path="/sel" element={<Select />} />
        <Route path="/user" element={<User />} />
        <Route path="/Receive" element={<Recieve />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
