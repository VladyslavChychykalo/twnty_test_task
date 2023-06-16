import React from "react";
import { useSelector } from "react-redux";
import Drawer from "@mui/material/Drawer";
import { RootState } from "../../redux/store";
import styles from "./Sidebar.module.css";
import { OrderDataI } from "../../interfaces/interfaces";
import solarImage from "../../assets/solar.jpg";

// interface IProps {
//   orderData: OrderDataI[];
// }

const Sidebar: React.FC = () => {
  const orderData: OrderDataI[] = useSelector(
    (state: RootState) => state.orders
  );

  const totalPrice = orderData.reduce((acc, el) => {
    return (acc = acc + el.quantity * el.price);
  }, 0);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 260,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: 260,
          boxSizing: "border-box",
          background: "#121212",
          padding: "24px 0px",
        },
      }}
    >
      <div className={styles.sidebarWrapper}>
        <h2>Your order</h2>
        <p>Total price: {totalPrice}</p>
        <ul>
          {orderData.map((el: OrderDataI) => {
            const { title, quantity, price } = el;
            return (
              <li key={title}>
                <img src={solarImage} alt="Solar" />
                <h2>{title}</h2>
                <p>Choosen quantity: {quantity}</p>
                <p>Price for one item: {price}</p>
                {quantity > 1 && <p>Common Price: {quantity * price}</p>}
              </li>
            );
          })}
        </ul>
      </div>
    </Drawer>
  );
};

export default Sidebar;
