import React from 'react'

function ProductCard({name,price,image}) {
  return (
    <div>
       <h1>{name}</h1>
       <p>{price}</p>
       <img src={image} alt={name} />
    </div>
  )
}

export default ProductCard