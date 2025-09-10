import React from 'react'
import ProductCard from '../Component/onecomponent/ProductCard'
import img from '../assets/images/pic.jpg'
function Product() {
  return (
    <>
    <ProductCard name="manu" price={"100"} image={img} />
    </>
  )
}

export default Product