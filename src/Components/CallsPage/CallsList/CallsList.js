import React from "react";
import style from "./CallsList.module.css";
import CallsItem from "./CallsItem/CallsItem";

const CallsList = () => {
  return (
    <div className={style.CallsList}>
      <div className={style.CallsHeader}>
        <span className={style.CallsHeaderType}>Тип</span>
        <span className={style.CallsHeaderTime}>Время</span>
        <span className={style.CallsHeaderEmployer}>Сотрудник</span>
        <span className={style.CallsHeaderCall}>Звонок</span>
        <span className={style.CallsHeaderSource}>Источник</span>
        <span className={style.CallsHeaderGrade}>Оценка</span>
        <span className={style.CallsHeaderRecord}>Запись звонка</span>
        <span className={style.CallsHeaderDuration}>Длительность</span>
      </div>
      <div className={style.CallsItems}>
        <CallsItem/>
      </div>
    </div>
  );
};

export default CallsList;
