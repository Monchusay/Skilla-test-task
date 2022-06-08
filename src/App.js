import style from "./App.module.css";
import NavBar from "./Components/NavBar/NavBar";
import InfoBar from "./Components/InfoBar/InfoBar";
import CallsPage from "./Components/CallsPage/CallsPage";

const App = () => {
  return (
    <div className={style.App}>
      <NavBar />
      <div className={style.MainObj}>
        <InfoBar />
        <CallsPage />
      </div>
    </div>
  );
};

export default App;
