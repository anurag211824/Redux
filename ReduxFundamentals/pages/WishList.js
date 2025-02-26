import React from "react";
import WishListItem from "../component/WishListItem";
import { useSelector } from "react-redux";
const WishList = () => {
  const wishListItems = useSelector((state) => state.wishList);
  return (
    <div className="wishList-page-grid">
      {wishListItems.map(
        ({ productId, title, rating, price, imageUrl, quantity }) => (
          <WishListItem
            key={productId}
            productId={productId}
            title={title}
            rating={rating}
            price={price}
            imageUrl={imageUrl}
            quantity={quantity}
          />
        )
      )}
    </div>
  );
};

export default WishList;
