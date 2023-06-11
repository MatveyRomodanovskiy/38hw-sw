import React from 'react';
import {navs} from "../config/navs";
import NavItems from "./NavItems";
interface Props{
    changePage:(page: string) => void
}

const Navigation = ({changePage}: Props) => {


    return (
        <nav className="fixed-top mt-1 ms-5">
            <ul className="nav">
                {navs.map(item => <NavItems changePage={changePage} key={item} item={item}/>) }
            </ul>
        </nav>
    );
};

export default Navigation;