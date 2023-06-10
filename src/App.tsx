import React, {useState} from "react";
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {navs} from "./config/navs";
import {CurrentPageContext} from "./config/createContext";
//import {DispatchCurrentPageContext} from "./config/createContext";

const App = () => {
  const [page, setPage] = useState(navs[0]);
  const changePage = (newPage: string) => {
      setPage(newPage);
  }
  return(
    <CurrentPageContext.Provider value={page}>
        {/*<DispatchCurrentPageContext.Provider value={setPage}>*/}
      <div className="container-fluid">
        <Header changePage={changePage}/>
        <Main page={page}/>
        {/*  <Main />*/}
        <Footer/>
      </div>
            {/*</DispatchCurrentPageContext.Provider>*/}
    </CurrentPageContext.Provider>
  );

}

export default App;
