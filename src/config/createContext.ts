import {createContext, useState} from "react";
import {navs} from "./navs";

export const CurrentPageContext = createContext(navs[0]);
//export const DispatchCurrentPageContext = createContext <React.Dispatch<React.SetStateAction<string>>>();