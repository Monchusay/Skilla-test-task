import React from "react";
import style from "./InfoBar.module.css";
import InfoBarSearch from "../../Usage/InfoBarImages/InfoBarSearch.svg"
import InfoBarArrow from "../../Usage/InfoBarImages/InfoBarArrow.svg"
import InfoBarPhoto from "../../Usage/InfoBarImages/InfoBarPhoto.svg"

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
          <img src={InfoBarSearch}/>
      </div>
      <div className={style.CompanyName}>
          <span>
              ИП Сидоровна Александра Михайловна
          </span>
          <img src={InfoBarArrow}/>
      </div>
      <div className={style.Profile}>
          <img src={InfoBarPhoto}/>
          <img src={InfoBarArrow} className={style.ProfileArrow}/>
      </div>
    </div>
  );
};

export default InfoBar;
