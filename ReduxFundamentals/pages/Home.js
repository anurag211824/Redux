import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../component/Product.js'
import { getAllProducts, getproductError, getProductLoadingState } from '../store/slices/productsSlice'

export default function Home() {
  // const productsList = useSelector((state) => state.products.list)
  // const isLoading =useSelector((state) => state.products.loading)
  // const error = useSelector((state) => state.products.error);
  // Instead of writing this here (state) => state.products.list we will write a function in slice
  const productsList = useSelector(getAllProducts)
  const isLoading =useSelector(getProductLoadingState)
  const error =useSelector(getproductError)
  return (
    isLoading ? (<h1 style={{textAlign:"center"}}>Loading products...</h1>) :
    error ? (<h2 style={{textAlign:"center"}}>{error}</h2>) : (<div className="products-container">
      {productsList.map(({ id, title, rating, price, image }) => (
        <Product
          key={id}
          productId={id}
          title={title}
          rating={rating.rate}
          price={price}
          imageUrl={image}
        />
      ))}
    </div>)
  )
}
