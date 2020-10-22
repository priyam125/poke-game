import React from 'react';
import { Pokedex } from '../Pokedex/Pokedex.component';
import './Pokegame.styles.css';


export const Pokegame = (props) => {
     //let shuffled = props.pokemons;
     let shuffledArr = props.pokemons.sort(() => 0.5 - Math.random());
     let arr1 = shuffledArr.slice(0, 4);
     let sumExp1 = 0;
     arr1.map((pokemon) => {
         return sumExp1 = sumExp1 + pokemon.base_experience;
     })

     let arr2 = shuffledArr.slice(4, 8);
     let sumExp2 = 0;
     arr2.map((pokemon) => {
         return sumExp2 = sumExp2 + pokemon.base_experience;
     })



    return (
        <div>
            <h1>First hand</h1>
            <p>{`Total exp : ${sumExp1}`}</p>
            <Pokedex pokemons = {arr1} className = "Pokegame" />
            <h1>Second hand</h1>
            <p>{`Total exp : ${sumExp2}`}</p>
            <Pokedex pokemons = {arr2} className = "Pokegame" />
        </div>
    );
}



/* {arr1.map((pokemon) => (
    <Pokecard key = {pokemon.id} pokemonName={pokemon.name} pokemonId={pokemon.id} pokemonType={pokemon.type} pokemonExp={pokemon.base_experience} />
))} */


/* let shuffled = [];
     shuffled = props.pokemons.sort(() => 0.5 - Math.random());
    
    let arr2 = shuffled.slice(4, 8); */