import React, {Component, useEffect, useState} from 'react';
import {base_url} from "../config/baseUrl";

const AboutMe =()=>{
const[isLoading,setIsloading] = useState(true);
const [character, setCharacter] = useState({
    eye_color: '',
    gender: '',
    hair_color: '',
    height: '',
    mass: '',
    skin_color: '',
    birth_year: '',
    imgUrl: ''
});
const [homeworld, setHomeworld] =useState('')
    async function buildCharacter() {
        await fetch(`${base_url}/v1/peoples/1`)
            .then(response => response.json())
            .then(data => {
                setCharacter({
                    eye_color: data.eye_color,
                    gender: data.gender,
                    hair_color: data.hair_color,
                    height: data.height,
                    mass: data.mass,
                    skin_color: data.skin_color,
                    birth_year: data.birth_year,
                    imgUrl: `${base_url}/${data.image}`
                })
            })
    }
    async function findHomeworld() {
        const res = await fetch(`${base_url}/v1/planets/1`);
        if (!res.ok){
            throw new Error(res.statusText)
        };
        const resJson = await res.json();
        setHomeworld(resJson.name)
    }

    useEffect(() => {
    buildCharacter();
    findHomeworld();
    setIsloading(false)
},[])



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
                    <h2>Birth year: {character.birth_year}</h2>
                    <h2>Eye color: {character.eye_color}</h2>
                    <h2>Gender: {character.gender}</h2>
                    <h2>Hair color: {character.hair_color}</h2>
                    <h2>Height: {character.height}</h2>
                    <h2>Homeworld: {homeworld}</h2>
                    <h2>Mass: {character.mass}</h2>
                    <h2>Skin color: {character.skin_color}</h2>
                    <img src={character.imgUrl} alt='sw hero'/>
                </div>
            )

        }

    }

export default AboutMe;