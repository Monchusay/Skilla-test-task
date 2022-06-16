import React from "react";
import style from "./CallsPage.module.css";
import CallsListContainer from "./CallsList/CallsListContainer";
import SortBarContainer from "./SortBar/SortBarContainer";

const CallsPage = ({setProfileDropdown}) => {
  return (
    <div className={style.CallsPage} onClick={()=> setProfileDropdown(false)}>
      <SortBarContainer />
      <CallsListContainer />
    </div>
  );
};

export default CallsPage;
