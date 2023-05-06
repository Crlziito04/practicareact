import React, { useContext } from "react";
import OrderItem from "../components/OrderItem.jsx";
import "@styles/MyOrder.scss";
import AppContext from "../context/AppContext.js";
import flechita from "@icons/flechita.svg";

const MyOrder = () => {
  const {
    state: { cart },
    addToCart,
  } = useContext(AppContext);

  const sumTotal = () => {
    const reducer = (acc, currValue) => acc + currValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <aside className="MyOrder">
      <div className="title-container">
        <img src={flechita} alt="arrow" />
        <p className="title">My order</p>
      </div>
      <div className="my-order-content">
        {cart.map((product) => (
          <OrderItem product={product} key={`orderItem-${product.id}`} />
        ))}
        <div className="order">
          <p>
            <span>Total</span>
          </p>
          <p>${sumTotal() }</p>
        </div>
        <button className="primary-button">Checkout</button>
      </div>
    </aside>
  );
};

export default MyOrder;
