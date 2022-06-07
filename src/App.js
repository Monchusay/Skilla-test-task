import style from "./App.module.css";
import NavBar from "./Components/NavBar/NavBar";
import InfoBar from "./Components/InfoBar/InfoBar";

const App = () => {
  return (
    <div className={style.App}>
      <NavBar />
      <InfoBar />
    </div>
  );
};

export default App;
