import React from "react";
import style from "./SortBar.module.css";
import { ReactComponent as SortBarAccountIcon } from "../../../Usage/SortBarImages/SortBarAccountIcon.svg";
import { ReactComponent as SortBarArrowLeft } from "../../../Usage/SortBarImages/SortBarArrowLeft.svg";
import { ReactComponent as SortBarArrowRight } from "../../../Usage/SortBarImages/SortBarArrowRight.svg";
import { ReactComponent as SortBarCalendarIcon } from "../../../Usage/SortBarImages/SortBarCalendarIcon.svg";
import { ReactComponent as SortBarSearch } from "../../../Usage/InfoBarImages/InfoBarSearch.svg";
import { ReactComponent as IncomingCallIcon } from "../../../Usage/SortBarImages/SelectImages/IncomingCallIcon.svg";
import { ReactComponent as MissedCallIcon } from "../../../Usage/SortBarImages/SelectImages/MissedCallIcon.svg";
import { ReactComponent as OutgoingCallIcon } from "../../../Usage/SortBarImages/SelectImages/OutgoingCallIcon.svg";
import { ReactComponent as EmployeeAvatar } from "../../../Usage/SortBarImages/SelectImages/EmployeeAvatar.svg";
import { ReactComponent as EmployeeAvatar2 } from "../../../Usage/SortBarImages/SelectImages/EmployeeAvatar2.svg";
import { ReactComponent as EmployeeAvatarMale } from "../../../Usage/SortBarImages/SelectImages/EmployeeAvatar3.svg";
import { ReactComponent as GradeBad } from "../../../Usage/SortBarImages/SelectImages/GradeBad.svg";
import { ReactComponent as GradeGood } from "../../../Usage/SortBarImages/SelectImages/GradeGood.svg";
import { ReactComponent as GradePerfect } from "../../../Usage/SortBarImages/SelectImages/GradePerfect.svg";
import Select from "react-select";

const optionsCallType = [
  { value: "AllCallTypes", label: "Все типы" },
  { value: "Incoming", label: <IncomingCallIcon /> },
  { value: "Outgoing", label: <OutgoingCallIcon /> },
  { value: "Missed", label: <MissedCallIcon /> },
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
  { value: "NoScript", label: "Скрипт не использован" },
  { value: "Greetings", label: <GradeBad className={style.GradeIcon}/> },
  { value: "Name", label: <GradeGood className={style.GradeIcon} /> },
  { value: "Price", label: <GradePerfect className={style.GradeIcon} /> },
];

const SortBar = () => {
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
          <SortBarCalendarIcon className={style.SortBarCalendarIcon} />
          <span className={style.NumberOfDaysText}>3 дня</span>
          <SortBarArrowRight className={style.SortBarArrowRight} />
        </div>
      </div>
      <div className={style.SortBarSecondRow}>
        <div className={style.CallSearch}>
          <SortBarSearch className={style.SortBarIcon} />
          <span className={style.CallSearchText}>Поиск по звонкам</span>
        </div>
        <div className={style.SortBarElement}>
          <Select
            className={style.SortBarSelectCallType}
            classNamePrefix="sort-select"
            placeholder="Все типы"
            options={optionsCallType}
            isSearchable={false}
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
          />
        </div>
        <div className={style.SortBarElement}>
          <Select
            className={style.SortBarSelectCalls}
            classNamePrefix="sort-select"
            placeholder="Все оценки"
            options={optionsGrade}
            isSearchable={false}
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
