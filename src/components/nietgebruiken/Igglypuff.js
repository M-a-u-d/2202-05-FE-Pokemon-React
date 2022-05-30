import React, { useState } from 'react';
import './App.css';
import axios from 'axios';


function Igglypuff() {
    const [error, setError] = useState('');

    async function fetchPokemonIglyNogWat() {
        setError('');

        try {
            const response = await axios.get('https://pokeapi.co/api/v2/pokemon/jigglypuff');
            // const jigglypuff = response.data;

            console.log (response)

        } catch (e) {
            console.error(e);
            setError('Er is iets misgegaan bij het ophalen van de data. Probeer het opnieuw');

        }
    }


    return (
        <div>
            <button type="button" onClick={fetchPokemonIglyNogWat}>Haal de data op</button>
            {error && <p className="small-error">{error}</p>}
        </div>
    );
}

export default Igglypuff;
