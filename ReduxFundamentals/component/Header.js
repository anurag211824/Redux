import React from "react";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart-icon.svg";
import { useSelector } from "react-redux";
import WishListIcon from "../assets/wishList.png";

export default function Header() {
  const cartItems = useSelector((state) => state.cartItems);
  const wishList = useSelector((state) => state.wishList);
  console.log(cartItems);
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
