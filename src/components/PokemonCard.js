import React, {useEffect, useState} from "react"
import axios from "axios";

const PokemonCard = ({url}) => {
    const [pokemon, setPokemon ] = useState ( [])


useEffect (() => {
 async function getPokemonData() {
        try {
            const result = await axios.get(`${url}`);
            console.log(result.data)
            setPokemon(result.data)

        } catch (e) {
            console.error(e);

        }
    }
    getPokemonData()

    }, [url])

return (
    <section>
        {Object.keys(pokemon).length > 0 &&
    <>
        <p>{ pokemon.name }</p>
        <img src={pokemon.sprites.front_default} alt="pokemon plaat"/>
        <> weight: { pokemon.weight }</>
        <> height: { pokemon.height }</>
        <> moves: { pokemon.moves.length }</>

        <h4>Abilities:</h4>
        {pokemon.abilities.map((pokemon) => {
            return (
                    <li>{pokemon.ability.name}</li>)
        })}
  </>}
  </section>
    );
};


    export default PokemonCard


