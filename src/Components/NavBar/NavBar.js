import React from "react";
import style from "./NavBar.module.css";
import MainLogo from "../../Usage/NavBarImages/logo.svg";
import { ReactComponent as CounterpartiesIcon}  from "../../Usage/NavBarImages/CounterpartiesIcon.svg";
import { ReactComponent as DatabaseIcon} from "../../Usage/NavBarImages/DatabaseIcon.svg";
import { ReactComponent as DocumentsIcon} from "../../Usage/NavBarImages/DocumentsIcon.svg";
import { ReactComponent as MessagesIcon}  from "../../Usage/NavBarImages/MessagesIcon.svg";
import { ReactComponent as OrdersIcon}  from "../../Usage/NavBarImages/OrdersIcon.svg";
import { ReactComponent as PerformersIcon}  from "../../Usage/NavBarImages/PerformersIcon.svg";
import { ReactComponent as ReportsIcon}  from "../../Usage/NavBarImages/ReportsIcon.svg";
import { ReactComponent as CallsIcon}  from "../../Usage/NavBarImages/CallsIcon.svg";
import { ReactComponent as SettingsIcon}  from "../../Usage/NavBarImages/SettingsIcon.svg";
import { ReactComponent as ResultsIcon}  from "../../Usage/NavBarImages/ResultsIcon.svg";
import { ReactComponent as AddButtonIcon}  from "../../Usage/NavBarImages/AddButtonIcon.svg"
import { ReactComponent as PaymentIcon} from "../../Usage/NavBarImages/PaymentIcon.svg"

const NavBar = () => {
  return (
    <div className={style.NavBar}>
      <img src={MainLogo} className={style.MainLogo} />
      <div className={style.NavBarItemsList}>
        <div className={style.NavBarItem}>
          <ResultsIcon className={style.IconImg} />{" "}
          <span className={style.NavBarItemText}> Итоги </span>
          <span className={style.IsActive}/>
        </div>
        <div className={style.NavBarItem}>
          <OrdersIcon className={style.IconImg} />{" "}
          <span className={style.NavBarItemText}> Заказы </span>
          <span className={style.IsActive}/>
        </div>
        <div className={style.NavBarItem}>
          <MessagesIcon className={style.IconImg} />{" "}
          <span className={style.NavBarItemText}> Сообщения </span>
          <span className={style.IsActive}/>
        </div>
        <div className={style.NavBarItem}>
          <CallsIcon className={style.IconImg} />{" "}
          <span className={style.NavBarItemText}> Звонки </span>
          <span className={style.IsActive}/>
        </div>
        <div className={style.NavBarItem}>
          <CounterpartiesIcon className={style.IconImg} />{" "}
          <span className={style.NavBarItemText}> Контрагенты </span>
          <span className={style.IsActive}/>
        </div>
        <div className={style.NavBarItem}>
          <DocumentsIcon className={style.IconImg} />{" "}
          <span className={style.NavBarItemText}> Документы </span>
          <span className={style.IsActive}/>
        </div>
        <div className={style.NavBarItem}>
          <PerformersIcon className={style.IconImg} />{" "}
          <span className={style.NavBarItemText}> Исполнители </span>
          <span className={style.IsActive}/>
        </div>
        <div className={style.NavBarItem}>
          <ReportsIcon className={style.IconImg} />{" "}
          <span className={style.NavBarItemText}> Отчеты </span>
          <span className={style.IsActive}/>
        </div>
        <div className={style.NavBarItem}>
          <DatabaseIcon className={style.IconImg} />{" "}
          <span className={style.NavBarItemText}> База знаний </span>
          <span className={style.IsActive}/>
        </div>
        <div className={style.NavBarItem}>
          <SettingsIcon className={style.IconImg} />{" "}
          <span className={style.NavBarItemText}> Настройки </span>
          <span className={style.IsActive}/>
        </div>
      </div>
      <div className={style.ButtonArea}>
        <div className={style.NavBarButton}>
          <span className={style.NavBarButtonText}>Добавить заказ</span>
          <AddButtonIcon/>
        </div>
        <div className={style.NavBarButton}>
          <span className={style.NavBarButtonText}>Оплата</span>
          <PaymentIcon/>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
