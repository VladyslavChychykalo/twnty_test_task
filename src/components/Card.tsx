import React, { useState } from "react";
import styles from "./Card.module.css";
import solarImage from "../assets/solar.jpg";

interface IProps {
  title: string;
  extraInfo: {
    quantity: number;
    price: number;
  };
  handleCard: Function;
}

const Card: React.FC<IProps> = ({ title, extraInfo, handleCard }) => {
  const [qV, setQV] = useState(1);
  const handleChange = ({ target }: any) => {
    if (target.value > extraInfo.quantity) return;
    setQV(target.value);
  };

  return (
    <li className={styles.card}>
      <img src={solarImage} alt="Solar" />
      <h2>{title}</h2>
      <div>
        <p>Quantity: {extraInfo.quantity}</p>
        <p>Price: {extraInfo.price}</p>
        <div className={styles.qWrapper}>
          <p>Choose quantity</p>
          <input
            onChange={handleChange}
            type="number"
            value={qV}
            min={1}
            max={extraInfo.quantity}
          />
        </div>
      </div>
      <button
        onClick={() => {
          const newCart = {
            title,
            price: extraInfo.price,
            quantity: Number(qV),
          };
          handleCard(newCart);
        }}
      >
        Add to cart
      </button>
    </li>
  );
};

export default Card;
