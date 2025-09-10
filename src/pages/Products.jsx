import React, { useEffect, useState } from 'react'

function Products() {
    const[products,SetProducts]=useState([]);
useEffect(()=>{
    fetch('https://dummyjson.com/products').then(res=>res.json()).then(data=>SetProducts(data.products))

},[])
  return (
    <>
    <h1>Products</h1>
    {products.map(pro=>(
        <div key={pro.id}>
            <h1>Price:{pro.price}</h1>
            {/* <img src={pro.images}/> */}
        </div>
    ))}


    </>
  )
}

export default Products