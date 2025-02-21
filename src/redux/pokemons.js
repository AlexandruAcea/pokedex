import { POKEMONS_FILTERED, POKEMON_SELECTED, POKEMON_ADDED, FETCH_POKEMONS_SUCCESS, FETCH_POKEMONS_FAILURE, FETCH_POKEMONS_STARTED } from './actions'
import history from '../utils/history'
import {isEmpty, includes, map, without, isEqual} from 'lodash'

//INITIAL STATE

const initialState = {
    loading:               false,
    pokemons:              [],
    filteredPokemons:      [],
    error:                 null,
    selectedPokemon:       null
}

//REDUCER

export function pokemons(state = initialState, action) {
    switch (action.type) {
      case FETCH_POKEMONS_STARTED:
        return {
          ...state,
          loading: true
        };

      case FETCH_POKEMONS_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null
        };

      case POKEMONS_FILTERED:
        const filter = action.payload
        const pokemonList = state.pokemons

        let filteredPokemons = map(pokemonList, (item) => {
          if (includes(item.name, filter)) {
            return item;}
        });
      
        filteredPokemons = without(filteredPokemons, undefined)

        if(isEqual(state.filteredPokemons, filteredPokemons)) {
          return {
            ...state
          };
        }

        return {
          ...state,
          filteredPokemons
        };
  

      case POKEMON_SELECTED:
        const pokemon = action.payload

        if(!isEmpty(pokemon)) {
            history.push(`/viewPokemon/${pokemon.id}`);
        }

        return {
            ...state,
            selectedPokemon: action.payload
        };

      case POKEMON_ADDED:
        let newArray = state.pokemons

        if(includes(newArray, action.payload)) {
          return {...state}
        }

        newArray.push(action.payload)

        return {
            ...state,
            pokemons: newArray
      };

      case FETCH_POKEMONS_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload.error
        };

      default:
        return state;
    }
  }
