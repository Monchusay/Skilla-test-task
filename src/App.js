import style from "./App.module.css";
import NavBar from "./Components/NavBar/NavBar";
import InfoBar from "./Components/InfoBar/InfoBar";
import CallsPage from "./Components/CallsPage/CallsPage";
import ProfileCard from "./Components/InfoBar/ProfileCard/ProfileCard";
import { useState } from "react";

const App = () => {

  const [profileDropdown, setProfileDropdown] = useState(false);

  return (
    <div className={style.App}>
      <NavBar />
      <div className={style.MainObj}>
        <InfoBar profileDropdown={profileDropdown} setProfileDropdown={setProfileDropdown} />
        <CallsPage setProfileDropdown={setProfileDropdown} />
      </div>
      <ProfileCard profileDropdown={profileDropdown}/>
    </div>
  );
};

export default App;
