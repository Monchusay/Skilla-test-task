import React from "react";
import style from "./ProfileCard.module.css";
import { ReactComponent as ProfileDot } from "../../../Usage/InfoBarImages/ProfileDot.svg";
import { ReactComponent as ProfilePhone } from "../../../Usage/InfoBarImages/ProfilePhone.svg";
import { ReactComponent as ProfileMail } from "../../../Usage/InfoBarImages/ProfileMail.svg";
import { ReactComponent as ProfileLogout } from "../../../Usage/InfoBarImages/ProfileLogout.svg";
import { ReactComponent as ProfileEmployeeAvatar } from "../../../Usage/InfoBarImages/ProfileEmployeeAvatar.svg";
import { ReactComponent as ProfileLogin } from "../../../Usage/InfoBarImages/ProfileLogin.svg";

const ProfileCard = ({ profileDropdown }) => {
  return (
    <div
      className={
        profileDropdown ? style.ProfileCard : style.DisabledProfileCard
      }
    >
      <div className={style.ProfileInfo}>
        <div className={style.ProfileInfoData}>
          <div className={style.ProfileName}>
            <span className={style.Name}>Упоров Кирилл</span>
            <span className={style.Info}>
              Директор <ProfileDot className={style.ProfileInfoIcon} />{" "}
              Санкт-Петербург
            </span>
          </div>
          <div className={style.ContactInfo}>
            <span className={style.Phone}>
              <ProfilePhone className={style.ProfileContactIcon} />8 (800)
              333-17-21
            </span>
            <span className={style.Mail}>
              <ProfileMail className={style.ProfileContactIcon} />
              hi@skilla.ru
            </span>
          </div>
        </div>
        <div className={style.LogOutButton}>
          <ProfileLogout className={style.ProfileLogoutIcon} />
        </div>
      </div>
      <div className={style.EmployeesList}>
        <div className={style.EmployeesGroup}>
          <span className={style.EmployeesListHeader}>Операторы</span>
          <div className={style.EmployeesListElement}>
            <span className={style.EmployeesListElementContent}>
              <ProfileEmployeeAvatar className={style.ProfileEmployeeAvatar} />
              <span className={style.EmployeeName}>Мирон Батонов</span>
              <ProfileLogin className={style.EmployeeLogoutButton} />
            </span>
          </div>
          <div className={style.EmployeesListElement}>
            <span className={style.EmployeesListElementContent}>
              <ProfileEmployeeAvatar className={style.ProfileEmployeeAvatar} />
              <span className={style.EmployeeName}>Алексей Ильин</span>
              <ProfileLogin className={style.EmployeeLogoutButton} />
            </span>
          </div>
          <div className={style.EmployeesListElement}>
            <span className={style.EmployeesListElementContent}>
              <ProfileEmployeeAvatar className={style.ProfileEmployeeAvatar} />
              <span className={style.EmployeeName}>
                Милана Константинопольская
              </span>
              <ProfileLogin className={style.EmployeeLogoutButton} />
            </span>
          </div>
        </div>
        <div className={style.EmployeesGroup}>
          <span className={style.EmployeesListHeader}>Логисты</span>
          <div className={style.EmployeesListElement}>
            <span className={style.EmployeesListElementContent}>
              <ProfileEmployeeAvatar className={style.ProfileEmployeeAvatar} />
              <span className={style.EmployeeName}>Александра Сизых</span>
              <ProfileLogin className={style.EmployeeLogoutButton} />
            </span>
          </div>
          <div className={style.EmployeesListElement}>
            <span className={style.EmployeesListElementContent}>
              <ProfileEmployeeAvatar className={style.ProfileEmployeeAvatar} />
              <span className={style.EmployeeName}>Илья Алексеев</span>
              <ProfileLogin className={style.EmployeeLogoutButton} />
            </span>
          </div>
          <div className={style.EmployeesListElement}>
            <span className={style.EmployeesListElementContent}>
              <ProfileEmployeeAvatar className={style.ProfileEmployeeAvatar} />
              <span className={style.EmployeeName}>Владимир Петров</span>
              <ProfileLogin className={style.EmployeeLogoutButton} />
            </span>
          </div>
        </div>
        <div className={style.EmployeesGroup}>
          <span className={style.EmployeesListHeader}>Бухгалтеры</span>
          <div className={style.EmployeesListElement}>
            <span className={style.EmployeesListElementContent}>
              <ProfileEmployeeAvatar className={style.ProfileEmployeeAvatar} />
              <span className={style.EmployeeName}>Полина Калинина</span>
              <ProfileLogin className={style.EmployeeLogoutButton} />
            </span>
          </div>
          <div className={style.EmployeesListElement}>
            <span className={style.EmployeesListElementContent}>
              <ProfileEmployeeAvatar className={style.ProfileEmployeeAvatar} />
              <span className={style.EmployeeName}>Наталья Натальева</span>
              <ProfileLogin className={style.EmployeeLogoutButton} />
            </span>
          </div>
          <div className={style.EmployeesListElement}>
            <span className={style.EmployeesListElementContent}>
              <ProfileEmployeeAvatar className={style.ProfileEmployeeAvatar} />
              <span className={style.EmployeeName}>
                Константин Константинопольский
              </span>
              <ProfileLogin className={style.EmployeeLogoutButton} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
