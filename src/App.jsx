
import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from '../src/pages/Counter'
import GreetComponent from './Component/GreetComponent'
import Products from './pages/Products'
import ProductFetching from './pages/ProductFetching'
import BasicForm from './pages/Form'
import React from 'react'
import BlogPage from './pages/task1/BlogPage'
import PostTitle from './Component/onecomponent/PostTitle'
import UseCard from './Component/onecomponent/UseCard'
import Product from './pages/Product'
import CounterApp from './pages/task1/CounterApp'

function App() {

  return (
    <>
     <Routes>
     {/* <Route path='/' element={<Home />}></Route> */}
     {/* <Route path='/' element={<GreetComponent/>}></Route> */}
     {/* <Route path='/' element={<Products/>}></Route> */}
     {/* <Route path='/' element={<ProductFetching/>}></Route> */}
     {/* <Route path='/' element={<UseCard/>} /> */}
     {/* <Route path='/' element={<Product/>} /> */}
     <Route path='/' element={<CounterApp/>}/>
     </Routes>
    </>
  )
}

export default App
