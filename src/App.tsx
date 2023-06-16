import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, addOrderQuantity } from "./redux/slice/orders";
import { RootState } from "./redux/store";
import { OrderDataI } from "./interfaces/interfaces";
import MainContent from "./container/MainContent/MainContent";

const App: React.FC = () => {
  const [data, setData] = useState<Array<[string, any]>>([]);
  const orderData: OrderDataI[] = useSelector(
    (state: RootState) => state.orders
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://testtask.twnty.de/");
        const data = await response.json();
        const formateData = Object.entries(data);
        setData(formateData);
      } catch (error) {}
    };

    getData();
  }, []);

  const handleCard = (newCart: OrderDataI) => {
    const currentOrderEl = orderData.find((el) => el.title === newCart.title);
    const mainArrEl = data.find((el) => el[0] === currentOrderEl?.title);

    if (
      currentOrderEl?.quantity &&
      mainArrEl &&
      Number(newCart.quantity) + Number(currentOrderEl?.quantity) >
        Number(mainArrEl[1]?.quantity)
    )
      return;

    if (orderData.some((el) => el.title === newCart.title)) {
      const mapArr = orderData.map((el) =>
        el.title === newCart.title
          ? { ...el, quantity: Number(el.quantity) + Number(newCart.quantity) }
          : el
      );
      return dispatch(addOrderQuantity(mapArr));
    }
    return dispatch(addOrder(newCart));
  };

  return (
    <div>
      <MainContent handleCard={handleCard} data={data} />
    </div>
  );
};

export default App;
