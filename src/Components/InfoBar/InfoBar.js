import React, { useState } from "react";
import style from "./InfoBar.module.css";
import { ReactComponent as SortBarSearch } from "../../Usage/InfoBarImages/InfoBarSearch.svg";
import { ReactComponent as InfoBarArrow } from "../../Usage/InfoBarImages/InfoBarArrow.svg";
import { ReactComponent as InfoBarPhoto } from "../../Usage/InfoBarImages/InfoBarPhoto.svg";
import Select from "react-select";
import { ReactComponent as RefreshFiltersIcon } from "../../Usage/SortBarImages/SelectImages/RefreshFiltersIcon.svg";

const optionsCompany = [
  { value: "Sidorovna", label: "ИП Сидоровна Александра Михайловна" },
  { value: "Gruz", label: "ООО Грузчиков Сервис Запад" },
  { value: "Mitrofanov", label: "ИП Митрофанов М.М." },
  { value: "Ivanov", label: "ИП Иванов М.М." },
];

const InfoBar = ({ profileDropdown, setProfileDropdown }) => {
  const [fullSearch, setFullSearch] = useState("");

  const onFullSearch = (e) => {
    setFullSearch(e.target.value);
  };
  const onFullSearchRefresh = () => {
    setFullSearch("");
  };
  return (
    <div className={style.InfoBar}>
      <div className={style.InfoBarContent}>
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
          <SortBarSearch className={style.fullSearchIcon} />
          <input
            className={style.fullSearchInput}
            placeholder="Поиск по системе"
            value={fullSearch}
            onChange={onFullSearch}
          />
          {fullSearch.length === 0 ? null : (
            <RefreshFiltersIcon
              onClick={onFullSearchRefresh}
              className={style.fullSearchRefreshIcon}
            />
          )}
        </div>
        <div className={style.CompanyName}>
          <Select
            className={style.Select}
            classNamePrefix="info-select"
            options={optionsCompany}
            placeholder="Все компании"
            isSearchable={false}
          />
        </div>
        <div
          className={style.Profile}
          onClick={() => setProfileDropdown(!profileDropdown)}
        >
          <InfoBarPhoto />
          <InfoBarArrow className={style.ProfileArrow} />
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
