import React from "react";
import style from "./NavBar.module.css";
import MainLogo from "../../Usage/NavBarImages/logo.svg";
import CounterpartiesIcon from "../../Usage/NavBarImages/CounterpartiesIcon.svg";
import DatabaseIcon from "../../Usage/NavBarImages/DatabaseIcon.svg";
import DocumentsIcon from "../../Usage/NavBarImages/DocumentsIcon.svg";
import MessagesIcon from "../../Usage/NavBarImages/MessagesIcon.svg";
import OrdersIcon from "../../Usage/NavBarImages/OrdersIcon.svg";
import PerformersIcon from "../../Usage/NavBarImages/PerformersIcon.svg";
import ReportsIcon from "../../Usage/NavBarImages/ReportsIcon.svg";
import CallsIcon from "../../Usage/NavBarImages/CallsIcon.svg";
import SettingsIcon from "../../Usage/NavBarImages/SettingsIcon.svg";
import ResultsIcon from "../../Usage/NavBarImages/ResultsIcon.svg";
import AddButtonIcon from "../../Usage/NavBarImages/AddButtonIcon.svg"
import PaymentIcon from "../../Usage/NavBarImages/PaymentIcon.svg"

const NavBar = () => {
  return (
    <div className={style.NavBar}>
      <img src={MainLogo} className={style.MainLogo} />
      <div className={style.NavBarItemsList}>
        <div className={style.NavBarItem}>
          <img src={ResultsIcon} className={style.IconImg} />{" "}
          <span className={style.NavBarItemText}> Итоги </span>
          <span className={style.IsActive}/>
        </div>
        <div className={style.NavBarItem}>
          <img src={OrdersIcon} className={style.IconImg} />{" "}
          <span className={style.NavBarItemText}> Заказы </span>
          <span className={style.IsActive}/>
        </div>
        <div className={style.NavBarItem}>
          <img src={MessagesIcon} className={style.IconImg} />{" "}
          <span className={style.NavBarItemText}> Сообщения </span>
          <span className={style.IsActive}/>
        </div>
        <div className={style.NavBarItem}>
          <img src={CallsIcon} className={style.IconImg} />{" "}
          <span className={style.NavBarItemText}> Звонки </span>
          <span className={style.IsActive}/>
        </div>
        <div className={style.NavBarItem}>
          <img src={CounterpartiesIcon} className={style.IconImg} />{" "}
          <span className={style.NavBarItemText}> Контрагенты </span>
          <span className={style.IsActive}/>
        </div>
        <div className={style.NavBarItem}>
          <img src={DocumentsIcon} className={style.IconImg} />{" "}
          <span className={style.NavBarItemText}> Документы </span>
          <span className={style.IsActive}/>
        </div>
        <div className={style.NavBarItem}>
          <img src={PerformersIcon} className={style.IconImg} />{" "}
          <span className={style.NavBarItemText}> Исполнители </span>
          <span className={style.IsActive}/>
        </div>
        <div className={style.NavBarItem}>
          <img src={ReportsIcon} className={style.IconImg} />{" "}
          <span className={style.NavBarItemText}> Отчеты </span>
          <span className={style.IsActive}/>
        </div>
        <div className={style.NavBarItem}>
          <img src={DatabaseIcon} className={style.IconImg} />{" "}
          <span className={style.NavBarItemText}> База знаний </span>
          <span className={style.IsActive}/>
        </div>
        <div className={style.NavBarItem}>
          <img src={SettingsIcon} className={style.IconImg} />{" "}
          <span className={style.NavBarItemText}> Настройки </span>
          <span className={style.IsActive}/>
        </div>
      </div>
      <div className={style.ButtonArea}>
        <div className={style.NavBarButton}>
          <span className={style.NavBarButtonText}>Добавить заказ</span>
          <img src={AddButtonIcon} className={style.NavBarButtonIcon}/>
        </div>
        <div className={style.NavBarButton}>
          <span className={style.NavBarButtonText}>Оплата</span>
          <img src={PaymentIcon} className={style.NavBarButtonIcon}/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
