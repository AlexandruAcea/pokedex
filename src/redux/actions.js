import axios from 'axios'


//TYPES

export const FETCH_POKEMONS_SUCCESS = 'FETCH_POKEMONS_SUCCESS'
export const FETCH_POKEMONS_FAILURE = 'FETCH_POKEMONS_FAILURE'
export const FETCH_POKEMONS_STARTED = 'FETCH_POKEMONS_STARTED'

export const POKEMON_ADDED = 'POKEMON_ADDED'

const ENDPOINT = `https://pokeapi.co/api/v2/generation/1`

//ACTIONS

export const fetchPokemons = () => {
    return dispatch => {
      dispatch(fetchPokemonsStarted())
      axios
        .get(ENDPOINT)
        .then(res => {
            res.data.pokemon_species.forEach(function(pokemon){
                dispatch(getSpecificPokemon(pokemon))
            })

            dispatch(fetchPokemonsSuccess());
        })
        .catch(err => {
            dispatch(fetchPokemonsFailure(err.message));
        });
    };
  };


const getSpecificPokemon = (pokemon) =>{
    return dispatch => {
        const URL = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        axios
            .get(URL)
            .then((res) => {
                dispatch(fetchedNewPokemon(res.data))
        })
    }
}

const fetchedNewPokemon = pokemon => ({
    type: POKEMON_ADDED,
    payload: {
      ...pokemon
    }
});

const fetchPokemonsSuccess = () => ({
    type: FETCH_POKEMONS_SUCCESS
});
  
const fetchPokemonsStarted = () => ({
    type: FETCH_POKEMONS_STARTED
});
  
const fetchPokemonsFailure = error => ({
    type: FETCH_POKEMONS_FAILURE,
    payload: {
      error
    }
});

