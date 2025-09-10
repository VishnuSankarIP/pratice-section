import axiosInstance from '../config/axios'
import React, { useEffect ,useState} from 'react'

function ProductFetching() {
    const[products,SetProducts]=useState([]);

    useEffect(()=>{
   fetchProducts()
    },[])

    const fetchProducts=()=>{
        axiosInstance.get('/product').then(response=>{
            SetProducts(response.data.products)
        })
        .catch(error=>{
            console.error('Error fetching Products');
        })
    }

  return (
    <>
    <div className='py-6'>
        <h1>ProductFetching</h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
{
    products.map(product=>(
<div
            key={product.id}
            className="bg-white border rounded-lg shadow-md p-4 hover:shadow-xl transition duration-300"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-48 object-cover rounded-sm mb-4"
            />
            <h2 className="text-xl font-semibold mb-1">{product.title}</h2>
            <p className="text-gray-600 mb-2 line-clamp-2">{product.description}</p>
            <div className="flex items-center justify-between">
              <span className="text-green-600 font-bold text-lg">${product.price}</span>
              <span className="text-sm text-yellow-600">⭐ {product.rating}</span>
            </div>
          </div>    ))
}
        </div>

    </div>
    </>
  )
}

export default ProductFetching