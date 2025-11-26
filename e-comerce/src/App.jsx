import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'
import All_Products from './components/All_products'
import  ShopByCategory from './components/ShopByCategory'

import Product_Details from './pages/Product_Detail'
import productByCategory from './pages/productByCategory'
import Search_product from './pages/Search_product'
import TrendingSlider from './components/Trending_Slider'


const App = () => {
  return (
    <Router> 
        <Navbar />
        <Routes>
            <Route path='/' element={<All_Products />} />
            <Route path='/carts' element={<Cart />} />
            <Route path='/product/:id' element={<Product_Details/>} />
            <Route path='/category/category/:cat' element={<productByCategory/>} />
            <Route path='/category/search/:terms' element={<Search_product />} />

        </Routes>
        {/* <TrendingSlider /> */}
         </Router> 
  )
}

export default App
