import React from 'react';
import Navigation from "./Navigation";
interface Props{
    changePage:(page: string) => void
}

export const Header = ({changePage}: Props) => {
        return (
                <header>
                    <Navigation changePage={changePage}/>
                    <h1 className="text-center py-4">Luke Skywalker</h1>
                </header>

        );
}

export default Header;