import React from "react";
import styles from "./Card.module.css";
import useInputNumber from "../../hooks/useInputNumber";
import solarImage from "../../assets/solar.jpg";

interface IProps {
  title: string;
  extraInfo: {
    quantity: number;
    price: number;
  };
  handleCard: Function;
}

const Card: React.FC<IProps> = ({ title, extraInfo, handleCard }) => {
  const { qV, handleChange }: any = useInputNumber({
    defaultValue: 1,
    maxQuantity: extraInfo.quantity,
  });

  return (
    <li className={styles.card}>
      <img src={solarImage} alt="Solar" />
      <h2>{title}</h2>
      <div className={styles.cardInfo}>
        <p>Quantity: {extraInfo.quantity}</p>
        <p>Price: {extraInfo.price}</p>
        <div className={styles.qWrapper}>
          <p>Choose quantity:</p>
          <input
            onChange={handleChange}
            type="number"
            value={qV}
            min={1}
            max={extraInfo.quantity}
          />
        </div>
        <p className={styles.additionalText}>
          *You can`t add to the order quantity more than you have.
        </p>
      </div>
      <button
        onClick={() => {
          const newCart = {
            title,
            price: extraInfo.price,
            quantity: Number(qV),
            maxQuantity: extraInfo.quantity,
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
