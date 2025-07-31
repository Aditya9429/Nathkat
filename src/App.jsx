import React, { useContext } from 'react'
import Heelo from './component/Heelo'
import Home from './pages/Home/Home'
import Orders from './pages/Orders/Orders'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Cart from './pages/Cart/Cart'
import Login from './pages/Login/Login'
import Product from './pages/Product/Product'
import Contact from './pages/contact/Contact'
import About from './pages/About/About'
import Collection from './pages/Collection/Collection'
import { Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import SearchBar from './component/SearchBar'
import { ShopContext } from './context/ShopContext'
import Account from './pages/Account/Account'
export default function App() {
  const { theme } = useContext(ShopContext);
  return (
    <div>
      <Navbar />
      <div className={`${theme === "dark" ? "dark-mode" : "light-mode"} body-container`}>
        <SearchBar />

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/collection' element={<Collection />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          {/* <Route path='/product' element={<div>Please select a product.</div>} /> */}
          <Route path='/product/:productId' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/place-order' element={<PlaceOrder />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/account' element={<Account />} />
        </Routes>
        <Footer />
      </div>
    </div>
  )
}
