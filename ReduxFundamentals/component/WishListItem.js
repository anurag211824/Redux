import React from "react";
import { useDispatch } from "react-redux";
import { removeWishlistItem } from "../store/slices/wishListSlice";

const WishListItem = ({
  productId,
  title,
  rating,
  price,
  imageUrl,
  quantity,
}) => {
  const dispatch = useDispatch();
  return (
    <div className="wishList-box">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>Rating: {rating}</p>
      <p>Price: ${price}</p>
      <button
        onClick={() => {
          console.log("Removing productId:", productId);
          dispatch(removeWishlistItem(productId));
        }}
      >
        Remove
      </button>
    </div>
  );
};

export default WishListItem;
