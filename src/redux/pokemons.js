import { POKEMON_ADDED, FETCH_POKEMONS_SUCCESS, FETCH_POKEMONS_FAILURE, FETCH_POKEMONS_STARTED } from './actions'

//INITIAL STATE

const initialState = {
    loading: false,
    pokemons: [],
    error: null
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

      case POKEMON_ADDED:
        let newArray = state.pokemons
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
