import React, {Component, useEffect, useState} from 'react';
import styles from '../css_modules/contacs.module.css'
import {base_url} from "../config/baseUrl";

const Contact =()=> {
    const[planets, setPlanets] = useState(["wait..."])

    async function fillOptions(url: string){
        const response = await fetch(url)
        const jsn = await response.json();
        const plan = jsn.map((pl: { name: string; }) => pl.name);
        setPlanets(plan)
    }
    useEffect(() =>{
     fillOptions(`${base_url}/v1/planets`)
    },[]);

    return (
                <div className={`${styles.container}`}>
                    <form  className={`${styles.form}`} onSubmit={(e) => {
                        e.preventDefault();
                    }}>
                        <label id={'fstName'}>First Name</label>
                        <input type="text" id={'InptFstNm'} placeholder="Your name.."/>
                        <label id={'lstName'}>Last Name</label>
                        <input type="text" id={'InptLstNm'} placeholder="Your last name.."/>
                        <label htmlFor="planet">Planet</label>
                        <select id={'planet'}>
                            {planets.map((name, i) => <option value={name} key={i}>{name}</option>)}
                        </select>
                        <label id={'subject'}>Subject</label>
                        <textarea className={`${styles.subject}`} placeholder="Write something.."
                        ></textarea>
                        <input type="submit" value="Submit" />
                    </form>
                </div>)
}
export default Contact;
