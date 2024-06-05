import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductList from './ProductList'
import { SingleProduct } from './SingleProduct'
import { CreateProduct } from './CreateProduct'
import { EditProduct } from './EditProduct'

export const MainRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<ProductList/>} />
        <Route path='/product/:id' element={<SingleProduct/>} />
        <Route path="product/create" element={<CreateProduct/>} />
        <Route path="product/:id/edit" element={<EditProduct/>} />
    </Routes>
  )
}
