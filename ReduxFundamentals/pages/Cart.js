import React, { use } from 'react'
import CartItem from '../component/CartItem'
import { useSelector } from 'react-redux'
import { getAllCartItems, getCartError,  getCartLoadingState } from '../store/slices/cartSlice'

export default function Cart() {

  //Selector getCartItems returned a different result when called with the same parameters. T
// his can lead to unnecessary rerenders.Selectors that return a new reference (such as 
// an object or an array) should be memoized: 
// const cartItems = useSelector(getCartItems)
const cartItems =useSelector(getAllCartItems)

  console.log("Cart Items in Component:", cartItems) // Log outside useSelector
  const isLoading=useSelector(getCartLoadingState)
  const error =useSelector(getCartError)
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