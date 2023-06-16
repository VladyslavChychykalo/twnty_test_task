import React from "react";
import { DataItemI } from "../../interfaces/interfaces";
import Card from "../../components/Card";
import Sidebar from "../../components/sidebar/Sidebar";
import styles from "./MainContent.module.css";

interface IProps {
  data: DataItemI[];
  handleCard: Function;
}

const MainContent: React.FC<IProps> = ({ data, handleCard }) => {
  return (
    <div className={styles.mainContentWrapper}>
      <Sidebar />
      <ul className={styles.wrapper}>
        {data.map((el: DataItemI) => {
          const title = el[0];
          const extraInfo = el[1];
          return (
            <Card key={title} handleCard={handleCard} title={title} extraInfo={extraInfo} />
          );
        })}
      </ul>
    </div>
  );
};

export default MainContent;
