import React from 'react';
import './Pokecard.styles.css'

export const Pokecard = (props) => {


    const Poke_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
    let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
    let imgSrc = `${Poke_API}${padToThree(props.pokemonId)}.png`;
    
    
    return (
        <div className = "Pokecard">   
            <div className="Pokecard-title">{props.pokemonName}</div>
            <div className = "Pokecard-image">
            <img alt="pokemons" src={ imgSrc }/>
            </div>
            <div className="Pokecard-data">{`Type: ${props.pokemonType}`}</div>
            <div className="Pokecard-data">{`EXP: ${props.pokemonExp}`}</div>
        </div>
    )
}