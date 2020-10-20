import React, { Component } from 'react';
import './App.css';
import { Pokedex } from './Pokedex/Pokedex.component';

class App extends Component {
  constructor () {
    super() ;
    
    this.state = {
      pokemons: [
        {id: 4, name:'Charmender', type: 'fire', base_experience: 62},
            {id: 7, name:'Squirtle', type: 'water', base_experience: 62},
            {id: 11, name:'Metapod', type: 'bug', base_experience: 62},
            {id: 12, name:'Butterfree', type: 'flying', base_experience: 62},
            {id: 25, name:'Pikachu', type: 'electric', base_experience: 62},
            {id: 39, name:'Jigglypuff', type: 'fire', base_experience: 62},
            {id: 94, name:'Gengar', type: 'fire', base_experience: 62},
            {id: 133, name:'Eevee', type: 'fire', base_experience: 62},
      ],
    };
  }

    render() {
      return (
        <div className="App">
          <h1>Pokedex</h1>
          <Pokedex pokemons = {this.state.pokemons} />
        </div>
      );
    }
  }
  



export default App;
