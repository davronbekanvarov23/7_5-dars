import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeProduct } from "../features/productSlice";

import "./ProductsList.css";
import { useState } from "react";

function Cart() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  if (products.length == 0) {
    return (
      <div className="empty ">
        <p className="h1">Cart</p>
        <p>Your cart is empty</p>
      </div>
    );
  } else {
    return (
      <>
        {products.map((product, i) => {
          return (
            <div key={product[i].id} className="product-box">
              <p className="h1">Cart</p>
              <div className="product-cart">
                {" "}
                <div className="cart-text">
                  {" "}
                  <h1 className="name">{product[i].name}</h1>
                  <h1 className=" price ">
                    {new Intl.NumberFormat("us-US", {
                      currency: "USD",
                      style: "currency",
                    }).format(product[i].price * product.amount)}
                  </h1>
                </div>
                <button
                  onClick={() => dispatch(removeProduct(product.id))}
                  className="delete"
                >
                  <FaTrash />
                </button>
              </div>
              <button className="btnClose">Check out</button>
            </div>
          );
        })}
      </>
    );
  }
}

export default Cart;
