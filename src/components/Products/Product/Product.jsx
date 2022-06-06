import React, { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import styles from "./Product.module.css";

const Product = ({ name, description, id }) => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);

  const { AddToCart, removeFromCart, updateCount } = useContext(CartContext);

  const handleAdd = (data) => {
    AddToCart(data);
    setToggle(false)
  };

  // Note: this id should come from api
  const product = { id: 1 };
  return (
    <div data-cy={`product-${product.id}`} className={styles.productDiv}>
      <h3 data-cy="product-name">{name}</h3>
      <h6 data-cy="product-description">{description}</h6>
        { toggle ? (
          <button
          data-cy="product-add-item-to-cart-button"
          onClick={() => {
            handleAdd({ productId: id, count: 1 });
          }}
        >
          Add To Cart
        </button>
        ) : (
          <div>
          <button
            data-cy="product-increment-cart-item-count-button"
            onClick={() => setCount(count + 1)}
          >
            +
          </button>
          <span data-cy="product-count">
            {
              // Count here from CartItems
              count
            }
          </span>
          <button
            data-cy="product-decrement-cart-item-count-button"
            onClick={() => {
              if (count >= 2) setCount(count - 1);
            }}
          >
            -
          </button>
          <button
            data-cy="product-remove-cart-item-button"
            onClick={() => {
              removeFromCart(id);
              setToggle(true)
            }}
          >
            Remove from cart
          </button>
        </div>
        )}  
    </div>
  );
};

export default Product;
