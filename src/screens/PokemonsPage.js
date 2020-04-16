import React, {useEffect, useState} from 'react'
import {useSelector, connect} from 'react-redux'

import { get, isEmpty } from 'lodash'

import {fetchPokemons, filterPokemons} from '../redux/actions'

import PokemonsPageDetails from '../components/PokemonsPageDetails'
import SearchBar from '../components/SearchBar'

const PokemonsPage = ({ fetchPokemonList, filterList }) => {

    useEffect(() => {
        fetchPokemonList()
      }, []);

    const [value, setValue] = useState('')
    const pokemonList = get(useSelector((state) => state.pokemons), 'pokemons')
    const filteredPokemons = get(useSelector((state) => state.pokemons), 'filteredPokemons')

    const onChange = (event) => {
        const filter = event.target.value

        setValue(filter)
        filterList(filter)
    }

    return (
        <div>
            <SearchBar onChange={onChange} value={value}/>
            <PokemonsPageDetails pokemonList={isEmpty(value) ? pokemonList : filteredPokemons}/>
       </div>
    )
}

function mapDispatchToProps(dispatch) {
    return({
        fetchPokemonList: () => {dispatch(fetchPokemons())},
        filterList: (filter) => {dispatch(filterPokemons(filter))}
    })
}

export default connect(null, mapDispatchToProps)(PokemonsPage)
