import React, {Component, useEffect, useState} from 'react';
import {base_url} from "../config/baseUrl";

const FarGalaxy =() =>{
    const [isLoading, setLoading] = useState(true);
    const [opening_crawl, setOpening_crawl] = useState('')
    useEffect(() => {
        const opening_crawl = sessionStorage.getItem('opening_crawl');
        if(opening_crawl){
            setOpening_crawl(opening_crawl);
            setLoading(false)

        } else {
            const randomNum = Math.floor(Math.random() * 6) + 1;
            fetch(`${base_url}/v1/films/${randomNum}`)
                .then(response => response.json())
                .then(data => {
                    setOpening_crawl(`${data.opening_crawl}`);
                    setLoading(false);
                    sessionStorage.setItem('opening_crawl', data.opening_crawl);
                });

        }
    }, [])


        if (isLoading){
            return (
                <div>
                    <div className="spinner-border text-primary"></div>
                    <div className="spinner-border text-primary"></div>
                    <div className="spinner-border text-primary"></div>
                </div>
            );
        }else {
            return(
                <div>
                    <p className="farGalaxy">{opening_crawl}</p>
                </div>
            )
        }

};

export default FarGalaxy;