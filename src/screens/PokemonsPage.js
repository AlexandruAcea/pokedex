import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import { get, isEmpty } from 'lodash'
import {fetchPokemons, filterPokemons} from '../redux/actions'

import PokemonsPageDetails from '../components/PokemonsPageDetails'
import SearchBar from '../components/SearchBar'

const PokemonsPage = () => {

    const [value, setValue] = useState('')
    const pokemonList = get(useSelector((state) => state.pokemons), 'pokemons')
    const filteredPokemons = get(useSelector((state) => state.pokemons), 'filteredPokemons')
    const dispatch = useDispatch();

    useEffect(() => {
        if(isEmpty(pokemonList))
            dispatch(fetchPokemons())
      }, []);

    const onChange = (event) => {
        const filter = event.target.value

        setValue(filter)
        dispatch(filterPokemons(filter))
    }

    return (
        <div>
            <SearchBar onChange={onChange} value={value}/>
            <PokemonsPageDetails pokemonList={isEmpty(value) ? pokemonList : filteredPokemons}/>
       </div>
    )
}

export default PokemonsPage
