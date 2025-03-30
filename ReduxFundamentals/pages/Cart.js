import React, { use } from 'react'
import CartItem from '../component/CartItem'
import { useSelector } from 'react-redux'

export default function Cart() {
  const cartItems = useSelector(({ products, cartItems }) => {
    const updatedCart = cartItems.list.map(({ productId, quantity }) => {
      const cartProduct = products.list.find((product) => product.id === productId)
      return cartProduct ? { ...cartProduct, quantity } : null
    }).filter(item => item !== null) // Remove null values

    console.log("Updated Cart Items:", updatedCart) // Console log inside useSelector
    return updatedCart
  })

  console.log("Cart Items in Component:", cartItems) // Log outside useSelector
  const isLoading=useSelector((state)=>state.cartItems.loading)
  const error =useSelector((state)=>state.cartItems.error)
  return (
    isLoading? <h1 style={{textAlign:"center"}}>Loading cart items...</h1> :
    error ? (<h1 style={{textAlign:"center"}}>{error}</h1>):
    // if loading is true, display loading message
    <div className="cart-container">
      <h2>Items in Your Cart</h2>
      <div className="cart-items-container">
        <div className="cart-header cart-item-container">
          <div className="cart-item">Item</div>
          <div className="item-price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
        </div>
        {cartItems.map(({ id, title, rating, price, image, quantity }) => (
          <CartItem
            key={id}
            productId={id}
            title={title}
            price={price}
            quantity={quantity}
            imageUrl={image}
            rating={rating.rate}
          />
        ))}
        <div className="cart-header cart-item-container">
          <div></div>
          <div></div>
          <div></div>
          <div className="total">
            $
            {cartItems.reduce(
              (accumulator, currentItem) =>
                accumulator + currentItem.quantity * currentItem.price,
              0
            )}
          </div>
        </div>
      </div>
    </div>
  )
}