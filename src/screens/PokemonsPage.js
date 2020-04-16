import React, {useEffect} from 'react'
import {useSelector, connect} from 'react-redux'

import { get } from 'lodash'

import {fetchPokemons} from '../redux/actions'

import PokemonsPageDetails from '../components/PokemonsPageDetails'
import SearchBar from '../components/SearchBar'

const PokemonsPage = ({ fetchPokemonList }) => {

    useEffect(() => {
        fetchPokemonList()
      }, []);

    const pokemonList = get(useSelector((state) => state.pokemons), 'pokemons')

    

    return (
        <div>
            <SearchBar/>
            <PokemonsPageDetails pokemonList={pokemonList}/>
       </div>
    )
}

function mapDispatchToProps(dispatch) {
    return({
        fetchPokemonList: () => {dispatch(fetchPokemons())}
    })
}

export default connect(null, mapDispatchToProps)(PokemonsPage)
