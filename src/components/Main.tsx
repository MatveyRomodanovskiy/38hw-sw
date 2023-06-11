import React from 'react';
import Home from "./Home";
import AboutMe from "./AboutMe";
import {navs} from "../config/navs";
import StarWars from "./StarWars";
import Contact from "./Contact";
// import {useContext} from "react";
// import {CurrentPageContext} from '../config/createContext'
interface Props{
    page: string
}
//const Main =({page}: Props) =>{
const Main =({page}: Props) =>{
    // const page = useContext(CurrentPageContext);
        switch (page) {
            case navs[1]:
                return <AboutMe/>
            case navs[2]:
                return <StarWars/>
            case navs[3]:
                return <Contact/>
            default:
                return <Home/>
        }
}

export default Main;