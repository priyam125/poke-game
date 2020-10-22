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

     let list = "", list1 = "", title1 = "", title2 = "";

     console.log(sumExp1);
     console.log(sumExp2);

     if (sumExp1 > sumExp2) {
         list = <Pokedex pokemons = {arr1} />
         list1 = <Pokedex pokemons = {arr2} />
         title1 = <div className = "Pokegame-winner">Winning Hand</div>
         title2 = <div className = "Pokegame-loser">Losing Hand</div>
     }
     else if (sumExp1 < sumExp2){
          list = <Pokedex pokemons = {arr2} />
          list1 = <Pokedex pokemons = {arr1} />
          title1 = <div className = "Pokegame-loser">Losing Hand</div>
          title2 = <div className = "Pokegame-winner">Winning Hand</div>
     } 

    return (
        <div>
            {title1}
            <div className = "Pokegame-exp">{`Total exp : ${sumExp1}`}</div>
        {list}
            {title2}
            <div className = "Pokegame-exp">{`Total exp : ${sumExp2}`}</div>
        {list1}
        </div>
    );
}



/* {arr1.map((pokemon) => (
    <Pokecard key = {pokemon.id} pokemonName={pokemon.name} pokemonId={pokemon.id} pokemonType={pokemon.type} pokemonExp={pokemon.base_experience} />
))} */


/* let shuffled = [];
     shuffled = props.pokemons.sort(() => 0.5 - Math.random());
    
    let arr2 = shuffled.slice(4, 8); */