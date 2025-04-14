import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import { useDispatch, useSelector } from "react-redux";
import WishListIcon from "../assets/wishList.png";
import { fetchProducts, fetchProductsData, fetchProductsError, updateAllProducts } from "../store/slices/productsSlice";
import { fetchCartItems, loadCartItems,fetchCartItemsError, fetchCartItemsData } from "../store/slices/cartSlice";

export default function Header() {
  const cartItems = useSelector((state) => state.cartItems.list);
  const wishList = useSelector((state) => state.wishList);
  const dispatch=useDispatch();
  useEffect(()=>{

  // dispatch({
  //   type:"api/makeCall",
  //   payload:{
  //     url:'products',
  //     onStart:fetchProducts.type,
  //     onError:fetchProductsError.type,
  //     onSuccess:updateAllProducts.type,
  //   }
  // })

  // dispatch({
  //   type:"api/makeCall",
  //   payload:{
  //     url:'carts/5',
  //     onStart:fetchCartItems.type,
  //     onError:fetchCartItemsError.type,
  //     onSuccess: loadCartItems.type,
  //   }
  // })
//..................................................................................
//  Redux thunk we can dispatch a function instead of an action object
//  dispatch((dispatch)=>{
//   dispatch(fetchCartItems())
//   fetch(`https://fakestoreapi.com/carts/5`)
//   .then((res)=>res.json())
//   .then((data)=>{
//     dispatch(loadCartItems(data))
//   })
//   .catch(()=>{
//     dispatch(fetchCartItemsError()) 
//   })
//  })
dispatch(fetchProductsData())
dispatch(fetchCartItemsData())
//..................................................................................

//.....................................................................................
  //Commneted this part becuase we will use api middleware to fetch data from api
  // dispatch(fetchProducts())
  // fetch("https://fakestoreapi.com/products").then((response)=>{
  //   return response.json();
  // }).then((data)=>{
  //   dispatch(updateAllProducts(data));
  // }) .catch((error) => {
  //   dispatch(fetchProductsError()); // Dispatch error action
  // });
  //  dispatch(fetchCartItems())
  // fetch("https://fakestoreapi.com/carts/5").then((res)=>{
  //   return res.json();
  // }).then((data)=>{
  //   dispatch(loadCartItems(data))
  // }).catch((error) => {
  //   dispatch(fetchCartItemsError()); // Dispatch error action
  // })
  //.....................................................................................
  },[])
  // console.log(cartItems);
  return (
    <header>
      <div className="header-contents">
        <h1>
          <Link to="/">Shopee</Link>
        </h1>
        <div className="header-links">
          <Link className="cart-icon" to="/wishList">
            <div className="wishList-container">
              <p>{wishList.length}</p>
              <img width={30} src={WishListIcon} alt="wishlist-icon" />
            </div>
          </Link>
          <Link className="cart-icon" to="/cart">
            <img src={CartIcon} alt="cart-icon" />
            <div className="cart-items-count">
              {cartItems.reduce((accumulator, currentItem) => {
                return accumulator + currentItem.quantity;
              }, 0)}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
