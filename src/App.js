import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import PokemonCard from "./components/pokemoncard/PokemonCard"
import pokemonlogo from './assets/pokemonlogo.png';
import Header from "./components/header/Header"
import Button from "./components/button/Button"

function App() {

    const [ error, setError ] = useState('');
    const [ pokemon, setPokemon ] = useState ( [])
    const [ endpoint, setEndpoint ] = useState(`https://pokeapi.co/api/v2/pokemon`)
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        async function getPokemonData() {
            setLoading(true);
            try {
                const result = await axios.get(`${endpoint}`);
                console.log(result.data.next)
                setPokemon(result.data)

            } catch (e) {
                console.error(e);
                setError (e.message ||"jammer hoor, er gaat iets mis");

            }
            setLoading(false);
        }
        getPokemonData()

    }, [endpoint])
    if (loading) return `loading...`

 return (

    <>
        <header>
            <Header
                image={pokemonlogo}
                title="p o k e m o n"
                description="gotta catch 'em all"
            />
        </header>

        <nav>
          <Button
                clickHandler={() => setEndpoint(pokemon.previous)}>
                vorige
            </Button>


            <Button
                clickHandler={() => setEndpoint(pokemon.next)}>
                volgende
            </Button>
        </nav>

        <tile>
               {pokemon.results && pokemon.results.map ((poke)=> {
               return <PokemonCard url={poke.url} key={poke.name}/>
               })}
        </tile>

        </>
  );
}

export default App;
