import { useState } from "react";
import "./ProductsList.css";

import product1 from "../assets/image-product-1.jpg";
import product2 from "../assets/image-product-2.jpg";
import product3 from "../assets/image-product-3.jpg";
import product4 from "../assets/image-product-4.jpg";

import tap1 from "../assets/image-product-1-thumbnail.jpg";
import tap2 from "../assets/image-product-2-thumbnail.jpg";
import tap3 from "../assets/image-product-3-thumbnail.jpg";
import tap4 from "../assets/image-product-4-thumbnail.jpg";

import plus from "../assets/icon-plus.svg";
import minus from "../assets/icon-minus.svg";

import { useDispatch } from "react-redux";
import { addProduct } from "../features/productSlice";

export const products = [
  {
    id: 1,
    name: "Fall Limited Edition Sneakers",
    company: "Sneaker Company",
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
    price: 125,
    images: [
      {
        id: 1,
        img: product1,
      },
      {
        id: 2,
        img: product2,
      },
      {
        id: 3,
        img: product3,
      },
      {
        id: 4,
        img: product4,
      },
    ],
    taps: [
      {
        id: 1,
        img: tap1,
      },
      {
        id: 2,
        img: tap2,
      },
      {
        id: 3,
        img: tap3,
      },
      {
        id: 4,
        img: tap4,
      },
    ],
  },
];



function ProductsList() {
  const dispatch = useDispatch();

  const [productAmount, setProductAmount] = useState(1);

  const setAmount = (type) => {
    if (type == "decrease") {
      setProductAmount((prev) => prev - 1);
    } else if (type == "increase") {
      setProductAmount((prev) => prev + 1);
    }
  };

  const addToBag = () => {
    const newProduct = {
      ...products,
      amount: productAmount,
    };

    dispatch(addProduct(newProduct));
  };

  return (
    <>
      {products.map((product) => {
        return (
          <div className="cart" key={product.id}>
            <div className="cart-images">
              <img
                className="image"
                src={product1}
                alt=""
                width={445}
                height={445}
              />
              <div className="cart-taps">
                <img src={tap1} alt="" width={88} height={88} />

                <img src={tap2} alt="" width={88} height={88} />

                <img src={tap3} alt="" width={88} height={88} />

                <img src={tap4} alt="" width={88} height={88} />
              </div>
            </div>

            <div className="cart__content">
              <div className="cart__text">
                <h2>{product.company}</h2>
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <p className="price">
                  {" "}
                  {new Intl.NumberFormat("us-US", {
                    currency: "USD",
                    style: "currency",
                  }).format(product.price)}
                </p>
              </div>{" "}
              <div className="card-add">
                <div className="plus">
                  {" "}
                  <button
                    onClick={() => setAmount("decrease")}
                    className="btn btn-secondary"
                    disabled={productAmount == 1 ? true : false}
                  >
                    <img src={minus} alt="" />
                  </button>
                  <h3 className="w-4">{productAmount}</h3>
                  <button
                    onClick={() => setAmount("increase")}
                    className="btn btn-secondary"
                  >
                    <img src={plus} alt="" />
                  </button>
                </div>
                <button onClick={addToBag} className=" btn-primary ">
                  Add to Bag
                </button>
              </div>
              <h1 className=" text-xl ">
                Total Price:{" "}
                {new Intl.NumberFormat("us-US", {
                  currency: "USD",
                  style: "currency",
                }).format(product.price * productAmount)}
              </h1>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ProductsList;
