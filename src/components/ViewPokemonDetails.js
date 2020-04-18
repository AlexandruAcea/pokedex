import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'

import { get, isEmpty, map } from 'lodash'

import { getPokemonById, selectPokemon } from '../redux/actions'

import { MainWrapper, BackgroundImage} from '../components/PokemonsPageDetails'
import { Image } from '../components/ListItem'

import { Card, SmallerTitle } from '../styles/common'

import Background from '../assets/background.png';

const ViewPokemonDetails = () => {
    let { id } = useParams();

    const pokemonList     = get(useSelector((state) => state.pokemons), 'pokemons')
    const selectedPokemon = get(useSelector((state) => state.pokemons), 'selectedPokemon')
    const dispatch = useDispatch();

    useEffect(() => {
        if(!selectedPokemon) {
            dispatch(getPokemonById(id))
        }
      }, []);

    if(!selectedPokemon && !isEmpty(pokemonList)) {
        dispatch(selectPokemon(pokemonList[0]))
    }

    const renderSprites = () => {
        return map(selectedPokemon.sprites, (sprite) => {
            console.log(sprite)
            return <Image coverImage={sprite}></Image>
        })
    }
    
    return (
        <MainWrapper>
            {selectedPokemon && 
            (<Card>
                <SmallerTitle>{selectedPokemon.name}</SmallerTitle>
                {renderSprites()}
            </Card>)
}            <BackgroundImage image={Background}/>
        </MainWrapper>
    )
}    

export default ViewPokemonDetails
