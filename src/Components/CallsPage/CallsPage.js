import React from "react";
import style from "./CallsPage.module.css";
import CallsListContainer from "./CallsList/CallsListContainer";
import SortBarContainer from "./SortBar/SortBarContainer";

const CallsPage = () => {
  return (
    <div className={style.CallsPage}>
      <SortBarContainer />
      <CallsListContainer />
    </div>
  );
};

export default CallsPage;
