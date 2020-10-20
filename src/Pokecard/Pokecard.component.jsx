import React from 'react';
import './Pokecard.styles.css'

export const Pokecard = (props) => {
    const Poke_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
    let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
    let imgSrc = `${Poke_API}${padToThree(props.pokemonId)}.png`;
    return (
        <div className = "Pokecard">   
            <p className="Pokecard-title">{props.pokemonName}</p>
            <img alt="pokemons" src={ imgSrc }/>
            <div className="Pokecard-data">{`Type: ${props.pokemonType}`}</div>
            <div className="Pokecard-data">{`EXP: ${props.pokemonExp}`}</div>
        </div>
    )
}