import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { OrderDataI } from "../../../interfaces/interfaces";
import { RootState } from "../../../redux/store";
import { addOrderQuantity } from "../../../redux/slice/orders";
import useInputNumber from "../../../hooks/useInputNumber";
import solarImage from "../../../assets/solar.jpg";

interface PropsI {
  title: string;
  quantity: number;
  price: number;
  maxQuantity: number;
}

const SidebarCard: React.FC<PropsI> = ({
  title,
  quantity,
  price,
  maxQuantity,
}) => {
  const { qV, setQV, handleChange }: any = useInputNumber({
    defaultValue: quantity,
    maxQuantity,
  });
  const dispatch = useDispatch();
  const orderData: OrderDataI[] = useSelector(
    (state: RootState) => state.orders
  );

  useEffect(() => {
    setQV(quantity);
  }, [quantity, setQV]);

  useEffect(() => {
    const mapArr = orderData.map((el) =>
      el.title === title ? { ...el, quantity: qV } : el
    );

    dispatch(addOrderQuantity(mapArr));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [qV, dispatch, title]);

  return (
    <li key={title}>
      <img src={solarImage} alt="Solar" />
      <h2>{title}</h2>
      <p>Choosen quantity: {quantity}</p>
      <p>Price for one item: {price}</p>
      {quantity > 1 && <p>Common Price: {quantity * price}</p>}
      <input
        type="number"
        onChange={handleChange}
        value={qV}
        min={1}
        max={maxQuantity}
      />
    </li>
  );
};

export default SidebarCard;
