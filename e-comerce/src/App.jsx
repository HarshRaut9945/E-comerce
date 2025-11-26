import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import All_Products from './components/All_products'
import ShopByCategory from './components/ShopByCategory'
import Product_Details from './pages/Product_Detail'
import ProductByCategory from './pages/ProductByCategory'
import Search_product from './pages/Search_product'

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<All_Products />} />
        <Route path='/carts' element={<Cart />} />
        <Route path='/product/:id' element={<Product_Details />} />

        {/* Correct category route */}
        <Route path='/product/category/:cat' element={<ProductByCategory />} />

        <Route path='/category/search/:terms' element={<Search_product />} />
      </Routes>
    </Router>
  )
}

export default App
