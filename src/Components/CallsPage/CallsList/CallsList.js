import React, { useEffect } from "react";
import style from "./CallsList.module.css";
import CallsItem from "./CallsItem/CallsItem";
import axios from "axios";

const CallsList = (props) => {

  useEffect(() => {
    axios.post("https://api.skilla.ru/mango/getList?limit=50", null,{headers: {
            Authorization: "Bearer testtoken"
        }}).then((response) => {
            console.log(response.data)
      props.setCalls(response.data.results);
    });
  }, []);

  let CallElement = props.calls.map((c)=> (
      <CallsItem
          key={c.id}
          in_out={c.in_out}
          status={c.status}
          person_avatar={c.person_avatar}
          partner_name={c.partner_data.name}
          partner_phone={c.partner_data.phone}
          source={c.source}
          errors={c.errors}
          call_duration={c.time}
          date={c.date}
          contact_company={c.contact_company}
          contact_name={c.contact_name}
          from_number={c.from_number}
      />
  ))
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
        <span className={style.CallsHeaderDuration}>Длительность (sec)</span>
      </div>
      <div className={style.CallsItems}>
          {CallElement}
      </div>
    </div>
  );
};

export default CallsList;
