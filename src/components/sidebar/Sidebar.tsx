import React from "react";
import { useSelector } from "react-redux";
import Drawer from "@mui/material/Drawer";
import SidebarCard from "./SidebarCard/SidebarCard";
import { RootState } from "../../redux/store";
import styles from "./Sidebar.module.css";
import { OrderDataI } from "../../interfaces/interfaces";

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
            const { title, quantity, price, maxQuantity } = el;
            return (
              <SidebarCard
                key={title}
                title={title}
                quantity={quantity}
                price={price}
                maxQuantity={maxQuantity}
              />
            );
          })}
        </ul>
      </div>
    </Drawer>
  );
};

export default Sidebar;
