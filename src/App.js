import React, {useState} from "react";
import './App.css';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {navs} from "./config/navs";

const App = () => {
    const [page, setPage] = useState(navs[0])


    return(

<div className="container-fluid">
<Header changePage={setPage}/>
<Main page={page}/>
<Footer/>
</div>
)
    ;

}

export default App;
