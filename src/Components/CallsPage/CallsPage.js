import React from "react";
import style from "./CallsPage.module.css";
import SortBar from "./SortBar/SortBar";
import CallsList from "./CallsList/CallsList";

const CallsPage = () => {
  return (
    <div className={style.CallsPage}>
      <SortBar />
      <CallsList />
    </div>
  );
};

export default CallsPage;
