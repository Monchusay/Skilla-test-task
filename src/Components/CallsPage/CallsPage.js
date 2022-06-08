import React from "react";
import style from "./CallsPage.module.css";
import SortBar from "./SortBar/SortBar";

const CallsPage = () => {
  return (
    <div className={style.CallsPage}>
      <SortBar />
    </div>
  );
};

export default CallsPage;
