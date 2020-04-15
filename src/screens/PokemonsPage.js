import React, {useEffect} from 'react'
import {useSelector, connect} from 'react-redux'

import {map, isEmpty, get} from 'lodash'

import {fetchPokemons} from '../redux/actions'
import {getPokemonList} from '../redux/pokemons'

import ListItem from '../components/ListItem'

const PokemonsPage = ({ fetchPokemonList }) => {

    useEffect(() => {
        fetchPokemonList()
      }, []);

    const pokemonList = get(useSelector((state) => state.pokeReducer), 'pokemons')

    const renderList = () => {
        if(isEmpty(pokemonList)) {
            return
        }

        return map(pokemonList,(pokemon, key) => {
            return <ListItem key={key} title={pokemon.name}></ListItem>
        })
    }

    return (
        <div>
            {renderList()}
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return({
        fetchPokemonList: () => {dispatch(fetchPokemons())}
    })
}

export default connect(null, mapDispatchToProps)(PokemonsPage)
