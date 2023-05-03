import { useTranslation } from "react-i18next";
import { Link ,useNavigate } from "react-router-dom";
import LoginContainer from "./containers/user/login-container";


function App() {

  const {t} = useTranslation();
  

  return (
    <div className="App">
      <header className="flex items-center flex-col gap-5">
        <img src={"assets/images/logo.png"} className="App-logo" alt="logo" />
        <h1 className="text-3xl font-bold text-red-500 underline">
          {t('app.name')}
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
<div>     
   <Link  to="/login-page "><button className="p-3 max-w-sm mx-auto rounded-xxl  shadow-lg flex items-center  text-xl text-left hover:text-center" onClick={handleClick} > LoginPage</button></Link>
</div>
    </div>
  );
  const navigate = useNavigate();

  function handleClick() {
    navigate("/login-page");
  }
  
}

export default App;
