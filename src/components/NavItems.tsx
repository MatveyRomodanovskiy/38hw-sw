import React from 'react';
import {useContext} from "react";
// import {DispatchCurrentPageContext} from '../config/createContext'

interface Props {
    changePage:(page: string) => void,
    item: string
}

const NavItems = ({changePage, item} : Props) => {
    // const setPage = useContext(DispatchCurrentPageContext);

    function handleclick() {
        changePage(item)
    }

    return (
        <li onClick={handleclick} className="nav-item btn btn-danger mx-1">{item}</li>
    );
};

export default NavItems;