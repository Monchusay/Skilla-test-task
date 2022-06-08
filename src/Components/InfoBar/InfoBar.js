import React, { useState } from "react";
import style from "./InfoBar.module.css";
import { ReactComponent as InfoBarSearch } from "../../Usage/InfoBarImages/InfoBarSearch.svg";
import { ReactComponent as InfoBarArrow } from "../../Usage/InfoBarImages/InfoBarArrow.svg";
import InfoBarPhoto from "../../Usage/InfoBarImages/InfoBarPhoto.svg";
import Select from "react-select";

const optionsCompany = [
  { value: "Sidorovna", label: "ИП Сидоровна Александра Михайловна" },
  { value: "Gruz", label: "ООО Грузчиков Сервис Запад" },
  { value: "Mitrofanov", label: "ИП Митрофанов М.М." },
  { value: "Ivanov", label: "ИП Иванов М.М." },
];

const InfoBar = () => {
  return (
    <div className={style.InfoBar}>
      <div className={style.TodaysDate}>Среда, 13 окт</div>
      <div className={style.InfoBars}>
        <div className={style.Bar}>
          <div className={style.BarText}>
            <span>Новые звонки</span>
            <span className={style.BarTextColored1}>20 из 30 шт</span>
          </div>
          <div className={style.BarLine}>
            <div className={style.ColoredBar}>
              <div className={style.Colored1} />
            </div>
          </div>
        </div>
        <div className={style.Bar}>
          <div className={style.BarText}>
            <span>Качество разговора</span>
            <span className={style.BarTextColored2}>40%</span>
          </div>
          <div className={style.BarLine}>
            <div className={style.ColoredBar}>
              <div className={style.Colored2} />
            </div>
          </div>
        </div>
        <div className={style.Bar}>
          <div className={style.BarText}>
            <span>Конверсия в заказ</span>
            <span className={style.BarTextColored3}>67%</span>
          </div>
          <div className={style.BarLine}>
            <div className={style.ColoredBar}>
              <div className={style.Colored3} />
            </div>
          </div>
        </div>
      </div>
      <div className={style.SearchButton}>
        <InfoBarSearch className={style.InfoBarSearch} />
      </div>
      <div className={style.CompanyName}>
        <Select
          className={style.Select}
          classNamePrefix="info-select"
          options={optionsCompany}
          placeholder="Все компании"
        />
      </div>
      <div className={style.Profile}>
        <img src={InfoBarPhoto} />
        <InfoBarArrow className={style.ProfileArrow} />
      </div>
    </div>
  );
};

export default InfoBar;
