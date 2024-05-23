import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeProduct } from "../features/productSlice";
import { Link } from "react-router-dom";
import "./ProductsList.css";

function Cart() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);
  if (products.length == 0) {
    return (
      <div className=" ">
        <h1 className=" ">Savatda hozircha mahsulot yo' q</h1>
        <p>
          Bosh sahifadagi to'plamlardan boshlang yoki kerakli mahsulotni qidiruv
          orqali toping
        </p>
        <Link className="" to="/">
          Home
        </Link>
      </div>
    );
  } else {
    return (
      <>
        {products.map((product, i) => {
          return (
            <div key={product[i].id}>
              <h1>{product[i].name}</h1>
              <h1 className=" text-xl ">
                {new Intl.NumberFormat("us-US", {
                  currency: "USD",
                  style: "currency",
                }).format(product[i].price * product.amount)}
              </h1>
              <button
                onClick={() => dispatch(removeProduct(product.id))}
                className=""
              >
                <FaTrash className=" w-5 h-5" />
              </button>
            </div>
          );
        })}
      </>
    );
  }
}

export default Cart;
