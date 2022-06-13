import React, { useEffect } from "react";
import style from "./SortBar.module.css";
import { ReactComponent as SortBarAccountIcon } from "../../../Usage/SortBarImages/SortBarAccountIcon.svg";
import { ReactComponent as SortBarArrowLeft } from "../../../Usage/SortBarImages/SortBarArrowLeft.svg";
import { ReactComponent as SortBarArrowRight } from "../../../Usage/SortBarImages/SortBarArrowRight.svg";
import { ReactComponent as SortBarSearch } from "../../../Usage/InfoBarImages/InfoBarSearch.svg";
import { ReactComponent as OutgoingCallIcon } from "../../../Usage/SortBarImages/SelectImages/OutgoingCallIcon.svg";
import { ReactComponent as MissedOutgoingCallIcon } from "../../../Usage/SortBarImages/SelectImages/MissedCallIcon.svg";
import { ReactComponent as MissedIncomingCallIcon } from "../../../Usage/SortBarImages/SelectImages/MissedIncomingCall.svg";
import { ReactComponent as IncomingCallIcon } from "../../../Usage/SortBarImages/SelectImages/IncomingCallIcon.svg";
import { ReactComponent as EmployeeAvatar } from "../../../Usage/SortBarImages/SelectImages/EmployeeAvatar.svg";
import { ReactComponent as EmployeeAvatar2 } from "../../../Usage/SortBarImages/SelectImages/EmployeeAvatar2.svg";
import { ReactComponent as EmployeeAvatarMale } from "../../../Usage/SortBarImages/SelectImages/EmployeeAvatar3.svg";
import { ReactComponent as GradeBad } from "../../../Usage/SortBarImages/SelectImages/GradeBad.svg";
import { ReactComponent as GradeGood } from "../../../Usage/SortBarImages/SelectImages/GradeGood.svg";
import { ReactComponent as GradePerfect } from "../../../Usage/SortBarImages/SelectImages/GradePerfect.svg";
import { ReactComponent as RefreshFiltersIcon } from "../../../Usage/SortBarImages/SelectImages/RefreshFiltersIcon.svg";

import Select from "react-select";
import { format } from "date-fns";
import { getMillisecondsFromDates } from "../../../Helpers/getMillisecondsFromDates";
import axios from "axios";

const optionsCallType = [
  { value: "AllCallTypes", label: "Все типы" },
  { value: "Incoming", label: <IncomingCallIcon /> },
  { value: "Outgoing", label: <OutgoingCallIcon /> },
  { value: "MissedOutgoing", label: <MissedOutgoingCallIcon /> },
  { value: "MissedIncoming", label: <MissedIncomingCallIcon /> },
];
const optionsDate = [
  { value: "3days", label: "3 дня" },
  { value: "Week", label: "Неделя" },
  { value: "Month", label: "Месяц" },
  { value: "Year", label: "Год" },
];

const optionsEmployers = [
  { value: "AllEmployers", label: "Все сотрудники" },
  {
    value: "Kostya",
    label: [
      <EmployeeAvatarMale />,
      <span className={style.EmployeeName}>Игорь Х.</span>,
    ],
  },
  {
    value: "Polina",
    label: [
      <EmployeeAvatar2 />,
      <span className={style.EmployeeName}>Полина З.</span>,
    ],
  },
  {
    value: "Masha",
    label: [
      <EmployeeAvatar />,
      <span className={style.EmployeeName}>Мария В.</span>,
    ],
  },
];
const optionsCalls = [
  { value: "AllCalls", label: "Все звонки" },
  { value: "AllClients", label: "Все клиенты" },
  { value: "NewClients", label: "Новые клиенты" },
  { value: "AllPerformers", label: "Все исполнители" },
  { value: "ViaApp", label: "Через приложение" },
  { value: "OtherCalls", label: "Прочие звонки" },
];
const optionsSources = [
  { value: "AllSources", label: "Источники" },
  { value: "Rabota", label: "Rabota.ru" },
  { value: "SPB", label: "Санкт-Петербург" },
  { value: "Google", label: "Google" },
  { value: "Yandex", label: "Yandex" },
  { value: "OtherSource", label: "Другой источник" },
];
const optionsMistakes = [
  { value: "AllMistakes", label: "Все ошибки" },
  { value: "Greetings", label: "Приветствие" },
  { value: "Name", label: "Имя" },
  { value: "Price", label: "Цена" },
  { value: "Discount", label: "Скидка" },
  { value: "Preorder", label: "Предзаказ" },
  { value: "Gratitude", label: "Благодарность" },
  { value: "Stop", label: "Стоп-слово" },
];
const optionsGrade = [
  { value: "AllGrades", label: "Все ошибки" },
  { value: "NoScript", label: "Скрипт не использован" },
  { value: "GradeBad", label: <GradeBad className={style.GradeIcon} /> },
  { value: "GradeGood", label: <GradeGood className={style.GradeIcon} /> },
  {
    value: "GradePerfect",
    label: <GradePerfect className={style.GradeIcon} />,
  },
];

const SortBar = (props) => {
  const onChangeCallType = (value) => {
    props.filterCallsByType(value);
  };
  const onChangeCallSource = (value) => {
    props.filterCallsBySource(value);
  };
  const onChangeCallGrade = (value) => {
    props.filterCallsByGrade(value);
  };

  const onDateChange = (value) => {
    const todaysDate = new Date().getTime();
    let mapping = {
      "3days": 3,
      Week: 7,
      Month: 31,
      Year: 365,
    };
    const days = getMillisecondsFromDates(mapping[value]);
    const daysAgo = new Date(todaysDate - days);
    let startDate = format(daysAgo, "yyyy-MM-dd");
    axios
      .post(
        `https://api.skilla.ru/mango/getList?date_start=${startDate}&limit=400`,
        null,
        {
          headers: {
            Authorization: "Bearer testtoken",
          },
        }
      )
      .then((response) => {
        props.setCalls(response.data.results);
        props.filterCallsByType(props.filteredByType);
      });
  };
  const refreshPage = () => {
    console.log("refresh");
    window.location.reload();
  };

  return (
    <div className={style.SortBar}>
      <div className={style.SortBarFirstRow}>
        <div className={style.Account}>
          <span className={style.AccountPermanent}>Баланс:</span>
          <span className={style.AccountChangeable}>272 ₽</span>
          <SortBarAccountIcon className={style.SortBarAccountIcon} />
        </div>
        <div className={style.NumberOfDays}>
          <SortBarArrowLeft className={style.SortBarArrowLeft} />
          <Select
            className={style.NumberOfDaysSelector}
            classNamePrefix="sortDays-select"
            placeholder="Выбрать дату"
            options={optionsDate}
            isSearchable={false}
            onChange={(date) => onDateChange(date.value)}
          />
          <SortBarArrowRight className={style.SortBarArrowRight} />
        </div>
      </div>
      <div className={style.SortBarSecondRow}>
        <div className={style.CallSearch}>
          <SortBarSearch className={style.SortBarIcon} />
          <span className={style.CallSearchText}>Поиск по звонкам</span>
        </div>
        <div className={style.RefreshFilters}>
          <span>Сбросить фильтры</span>
          <RefreshFiltersIcon
            onClick={refreshPage}
            className={style.SortBarIcon}
          />
        </div>
        <div className={style.SortBarElement}>
          <Select
            className={style.SortBarSelectCallType}
            classNamePrefix="sort-select"
            placeholder="Все типы"
            options={optionsCallType}
            isSearchable={false}
            onChange={(type) => onChangeCallType(type.value)}
          />
        </div>
        <div className={style.SortBarElement}>
          <Select
            className={style.SortBarSelectEmployee}
            classNamePrefix="sort-select"
            placeholder="Все сотрудники"
            options={optionsEmployers}
            isSearchable={false}
          />
        </div>
        <div className={style.SortBarElement}>
          <Select
            className={style.SortBarSelectCalls}
            classNamePrefix="sort-select"
            placeholder="Все звонки"
            options={optionsCalls}
            isSearchable={false}
          />
        </div>
        <div className={style.SortBarElement}>
          <Select
            className={style.SortBarSelectCalls}
            classNamePrefix="sort-select"
            placeholder="Все источники"
            options={optionsSources}
            isSearchable={false}
            onChange={(type) => onChangeCallSource(type.value)}
          />
        </div>
        <div className={style.SortBarElement}>
          <Select
            className={style.SortBarSelectCalls}
            classNamePrefix="sort-select"
            placeholder="Все оценки"
            options={optionsGrade}
            isSearchable={false}
            onChange={(type) => onChangeCallGrade(type.value)}
          />
        </div>
        <div className={style.SortBarElement}>
          <Select
            className={style.SortBarSelectCalls}
            classNamePrefix="sort-select"
            placeholder="Все ошибки"
            options={optionsMistakes}
            isSearchable={false}
          />
        </div>
      </div>
    </div>
  );
};

export default SortBar;
