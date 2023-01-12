import React from 'react'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import SingleProduct from '../pages/SingleProduct'
import { Routes,Route } from 'react-router-dom'
import ProductList from '../pages/ProductList'
import Cart from '../pages/Cart'

const MainRouter = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element = {<Home/>} />   
            <Route path='/register' element = {<Register/>} />   
            <Route path='/login' element = {<Login/>} />   
            <Route path='/productlist' element = {<ProductList/>} />   
            <Route path='/singleproduct' element = {<SingleProduct/>} />   
            <Route path='/cart' element = {<Cart/>} />   
        </Routes>
    </div>
  )
};

export default MainRouter