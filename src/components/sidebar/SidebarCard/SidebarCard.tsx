import React from "react";
import solarImage from "../../../assets/solar.jpg";

interface PropsI {
  title: string;
  quantity: number;
  price: number;
}

const SidebarCard: React.FC<PropsI> = ({ title, quantity, price }) => {
  return (
    <li key={title}>
      <img src={solarImage} alt="Solar" />
      <h2>{title}</h2>
      <p>Choosen quantity: {quantity}</p>
      <p>Price for one item: {price}</p>
      {quantity > 1 && <p>Common Price: {quantity * price}</p>}
    </li>
  );
};

export default SidebarCard;
